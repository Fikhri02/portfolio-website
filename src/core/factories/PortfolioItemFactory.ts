import type { IProject, ISkill, IExperience, IPortfolioItem } from '../interfaces/IComponent';

// Factory pattern for creating portfolio items (Single Responsibility Principle)
class PortfolioItemFactory {
  // Factory method for creating projects
  public createProject(data: Omit<IProject, 'type'>): IProject {
    return {
      ...data,
      type: 'project',
      featured: data.featured ?? false,
      technologies: data.technologies || [],
    };
  }

  // Factory method for creating skills
  public createSkill(data: Omit<ISkill, 'type'>): ISkill {
    return {
      ...data,
      type: 'skill',
      level: Math.min(100, Math.max(0, data.level)), // Ensure level is between 0-100
    };
  }

  // Factory method for creating experiences
  public createExperience(data: Omit<IExperience, 'type'>): IExperience {
    return {
      ...data,
      type: 'experience',
      achievements: data.achievements || [],
    };
  }

  // Generic factory method
  public createItem(type: 'project', data: Omit<IProject, 'type'>): IProject;
  public createItem(type: 'skill', data: Omit<ISkill, 'type'>): ISkill;
  public createItem(type: 'experience', data: Omit<IExperience, 'type'>): IExperience;
  public createItem(type: string, data: any): IPortfolioItem {
    switch (type) {
      case 'project':
        return this.createProject(data);
      case 'skill':
        return this.createSkill(data);
      case 'experience':
        return this.createExperience(data);
      default:
        throw new Error(`Unknown portfolio item type: ${type}`);
    }
  }

  // Batch creation
  public createMultiple<T extends IPortfolioItem>(
    type: T['type'],
    dataArray: any[]
  ): T[] {
    return dataArray.map(data => this.createItem(type as any, data)) as unknown as T[];
  }
}

export default PortfolioItemFactory;

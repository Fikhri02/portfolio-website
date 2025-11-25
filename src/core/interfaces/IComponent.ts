// Base interface for all components (Interface Segregation Principle)
export interface IComponent {
  render(): void;
}

// Theme-aware components
export interface IThemeable {
  applyTheme(theme: Theme): void;
}

// Animated components
export interface IAnimatable {
  animate(config: AnimationConfig): void;
}

// Observable pattern for state changes
export interface IObserver {
  update(data: any): void;
}

export interface IObservable {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notify(data: any): void;
}

// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
}

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  type?: 'fade' | 'slide' | 'scale' | 'bounce';
}

// Portfolio item types
export interface IPortfolioItem {
  id: string;
  title: string;
  description: string;
  type: 'project' | 'skill' | 'experience';
}

export interface IProject extends IPortfolioItem {
  type: 'project';
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ISkill extends IPortfolioItem {
  type: 'skill';
  category: string;
  level: number; // 0-100
  icon?: string;
}

export interface IExperience extends IPortfolioItem {
  type: 'experience';
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  achievements: string[];
}

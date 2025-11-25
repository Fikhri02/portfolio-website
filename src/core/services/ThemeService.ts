import type { IObserver, IObservable, Theme, ThemeColors } from '../interfaces/IComponent';

// Singleton pattern for theme management (Single Responsibility Principle)
class ThemeService implements IObservable {
  private static instance: ThemeService;
  private observers: IObserver[] = [];
  private currentTheme: Theme = 'dark';
  
  private themes: Record<Theme, ThemeColors> = {
    light: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#ec4899',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
    },
    dark: {
      primary: '#818cf8',
      secondary: '#a78bfa',
      accent: '#f472b6',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f1f5f9',
      textSecondary: '#94a3b8',
      border: '#334155',
    },
  };

  private constructor() {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
    }
    this.applyTheme();
  }

  // Singleton instance getter
  public static getInstance(): ThemeService {
    if (!ThemeService.instance) {
      ThemeService.instance = new ThemeService();
    }
    return ThemeService.instance;
  }

  // Observer pattern implementation
  public subscribe(observer: IObserver): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: IObserver): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  public notify(data: any): void {
    this.observers.forEach(observer => observer.update(data));
  }

  // Theme management
  public getTheme(): Theme {
    return this.currentTheme;
  }

  public getThemeColors(): ThemeColors {
    return this.themes[this.currentTheme];
  }

  public toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.currentTheme);
    this.applyTheme();
    this.notify({ theme: this.currentTheme, colors: this.getThemeColors() });
  }

  public setTheme(theme: Theme): void {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme();
    this.notify({ theme: this.currentTheme, colors: this.getThemeColors() });
  }

  private applyTheme(): void {
    const root = document.documentElement;
    const colors = this.themes[this.currentTheme];
    
    root.setAttribute('data-theme', this.currentTheme);
    
    // Apply CSS custom properties
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }
}

export default ThemeService;

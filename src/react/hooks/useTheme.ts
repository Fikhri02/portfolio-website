import { useState, useEffect } from 'react';
import ThemeService from '@core/services/ThemeService';
import type { Theme, ThemeColors } from '@core/interfaces/IComponent';

// Custom hook for theme management (Dependency Injection)
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [colors, setColors] = useState<ThemeColors | null>(null);
  const themeService = ThemeService.getInstance();

  useEffect(() => {
    // Initialize theme
    setTheme(themeService.getTheme());
    setColors(themeService.getThemeColors());

    // Subscribe to theme changes (Observer pattern)
    const observer = {
      update: (data: { theme: Theme; colors: ThemeColors }) => {
        setTheme(data.theme);
        setColors(data.colors);
      },
    };

    themeService.subscribe(observer);

    return () => {
      themeService.unsubscribe(observer);
    };
  }, []);

  const toggleTheme = () => {
    themeService.toggleTheme();
  };

  return { theme, colors, toggleTheme };
};

import { useEffect, useRef } from 'react';
import AnimationService from '@core/services/AnimationService';
import type { AnimationConfig } from '@core/interfaces/IComponent';

// Custom hook for animations (Dependency Injection)
export const useAnimation = (config: AnimationConfig) => {
  const elementRef = useRef<HTMLElement>(null);
  const animationService = new AnimationService();

  useEffect(() => {
    if (elementRef.current) {
      const observer = animationService.observeElement(
        elementRef.current,
        config,
        { threshold: 0.1 }
      );

      return () => {
        observer.disconnect();
      };
    }
  }, [config]);

  return elementRef;
};

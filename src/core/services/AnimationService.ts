import type { AnimationConfig } from '../interfaces/IComponent';

// Strategy pattern for different animation strategies (Open/Closed Principle)
interface AnimationStrategy {
  execute(element: HTMLElement, config: AnimationConfig): void;
}

class FadeAnimation implements AnimationStrategy {
  execute(element: HTMLElement, config: AnimationConfig): void {
    const duration = config.duration || 300;
    const delay = config.delay || 0;
    
    element.style.transition = `opacity ${duration}ms ${config.easing || 'ease'} ${delay}ms`;
    element.style.opacity = '0';
    
    setTimeout(() => {
      element.style.opacity = '1';
    }, 10);
  }
}

class SlideAnimation implements AnimationStrategy {
  execute(element: HTMLElement, config: AnimationConfig): void {
    const duration = config.duration || 400;
    const delay = config.delay || 0;
    
    element.style.transition = `transform ${duration}ms ${config.easing || 'ease-out'} ${delay}ms, opacity ${duration}ms ${config.easing || 'ease-out'} ${delay}ms`;
    element.style.transform = 'translateY(20px)';
    element.style.opacity = '0';
    
    setTimeout(() => {
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
    }, 10);
  }
}

class ScaleAnimation implements AnimationStrategy {
  execute(element: HTMLElement, config: AnimationConfig): void {
    const duration = config.duration || 350;
    const delay = config.delay || 0;
    
    element.style.transition = `transform ${duration}ms ${config.easing || 'ease-out'} ${delay}ms, opacity ${duration}ms ${config.easing || 'ease-out'} ${delay}ms`;
    element.style.transform = 'scale(0.9)';
    element.style.opacity = '0';
    
    setTimeout(() => {
      element.style.transform = 'scale(1)';
      element.style.opacity = '1';
    }, 10);
  }
}

class BounceAnimation implements AnimationStrategy {
  execute(element: HTMLElement, config: AnimationConfig): void {
    const duration = config.duration || 600;
    const delay = config.delay || 0;
    
    element.style.transition = `transform ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay}ms, opacity ${duration}ms ease ${delay}ms`;
    element.style.transform = 'scale(0)';
    element.style.opacity = '0';
    
    setTimeout(() => {
      element.style.transform = 'scale(1)';
      element.style.opacity = '1';
    }, 10);
  }
}

// Animation service using strategy pattern (Single Responsibility Principle)
class AnimationService {
  private strategies: Map<string, AnimationStrategy>;

  constructor() {
    this.strategies = new Map([
      ['fade', new FadeAnimation()],
      ['slide', new SlideAnimation()],
      ['scale', new ScaleAnimation()],
      ['bounce', new BounceAnimation()],
    ]);
  }

  // Open for extension, closed for modification
  public registerStrategy(name: string, strategy: AnimationStrategy): void {
    this.strategies.set(name, strategy);
  }

  public animate(element: HTMLElement | null, config: AnimationConfig): void {
    if (!element) return;

    const type = config.type || 'fade';
    const strategy = this.strategies.get(type);

    if (strategy) {
      strategy.execute(element, config);
    } else {
      console.warn(`Animation strategy "${type}" not found`);
    }
  }

  // Intersection Observer for scroll animations
  public observeElement(
    element: HTMLElement,
    config: AnimationConfig,
    options?: IntersectionObserverInit
  ): IntersectionObserver {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animate(entry.target as HTMLElement, config);
          observer.unobserve(entry.target);
        }
      });
    }, options || { threshold: 0.1 });

    observer.observe(element);
    return observer;
  }
}

export default AnimationService;

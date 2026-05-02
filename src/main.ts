import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import './index.css';

// Initialize Alpine Plugins
Alpine.plugin(intersect);

// Define global Alpine data setup
Alpine.data('appData', function() {
  return {
    activeChapter: 0,
    scrollProgress: 0,
    
    onScroll() {
      const el = (this as any).$refs.scrollContainer;
      if (!el) return;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const scrollTop = el.scrollTop;
      this.scrollProgress = (scrollTop / scrollHeight) * 100;
    },

    animateElement(el: any, animationClass: string, delay = 0) {
      setTimeout(() => {
        // Remove starting classes based on animation type
        if (animationClass === 'fade-up') {
          el.classList.remove('opacity-0', 'translate-y-8');
          el.classList.add('opacity-100', 'translate-y-0');
        } else if (animationClass === 'slide-right') {
          el.classList.remove('opacity-0', '-translate-x-8');
          el.classList.add('opacity-100', 'translate-x-0');
        } else if (animationClass === 'slide-left') {
          el.classList.remove('opacity-0', 'translate-x-8');
          el.classList.add('opacity-100', 'translate-x-0');
        } else if (animationClass === 'scale-up') {
          el.classList.remove('opacity-0', 'scale-95');
          el.classList.add('opacity-100', 'scale-100');
        } else if (animationClass === 'flip-in') {
          el.classList.remove('opacity-0', 'rotate-y-90');
          el.classList.add('opacity-100', 'rotate-y-0');
        }
      }, delay);
    },

    resetElement(el: any, animationClass: string) {
        if (animationClass === 'fade-up') {
          el.classList.add('opacity-0', 'translate-y-8');
          el.classList.remove('opacity-100', 'translate-y-0');
        } else if (animationClass === 'slide-right') {
          el.classList.add('opacity-0', '-translate-x-8');
          el.classList.remove('opacity-100', 'translate-x-0');
        } else if (animationClass === 'slide-left') {
          el.classList.add('opacity-0', 'translate-x-8');
          el.classList.remove('opacity-100', 'translate-x-0');
        } else if (animationClass === 'scale-up') {
          el.classList.add('opacity-0', 'scale-95');
          el.classList.remove('opacity-100', 'scale-100');
        } else if (animationClass === 'flip-in') {
          el.classList.add('opacity-0', 'rotate-y-90');
          el.classList.remove('opacity-100', 'rotate-y-0');
        }
    }
  };
});

// Start Alpine
Alpine.start();


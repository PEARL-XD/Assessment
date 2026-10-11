import { useEffect } from 'react';

// Content is visible by default. Only offscreen elements wait for an entrance.
export function useScrollReveal(pageRef) {
  useEffect(() => {
    const page = pageRef.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let dispose = () => {};

    function configureMotion() {
      dispose();
      if (preference.matches || !('IntersectionObserver' in window)) return;

      page.dataset.motion = 'enabled';
      const elements = [...page.querySelectorAll('[data-reveal]')];
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (!isIntersecting) return;
            target.dataset.revealState = 'visible';
            observer.unobserve(target);
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -32px 0px' },
      );

      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight - 32) {
          element.dataset.revealState = 'complete';
        } else {
          element.dataset.revealState = 'pending';
          observer.observe(element);
        }
      });

      function revealFocusedContent(event) {
        const element = event.target.closest('[data-reveal]');
        if (!element) return;
        element.dataset.revealState = 'complete';
        observer.unobserve(element);
      }
      page.addEventListener('focusin', revealFocusedContent);

      dispose = () => {
        observer.disconnect();
        page.removeEventListener('focusin', revealFocusedContent);
        delete page.dataset.motion;
        elements.forEach((element) => delete element.dataset.revealState);
      };
    }

    configureMotion();
    preference.addEventListener('change', configureMotion);
    return () => {
      dispose();
      preference.removeEventListener('change', configureMotion);
    };
  }, [pageRef]);
}

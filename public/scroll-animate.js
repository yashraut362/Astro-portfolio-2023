(function(){
  // Guard for SSR
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    // If user prefers reduced motion, just mark as visible immediately
    document.querySelectorAll('[data-animate]')?.forEach((el) => {
      el.classList.add('reveal-visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        // Stagger support via data-animate-delay
        const delay = parseFloat(target.getAttribute('data-animate-delay') || '0');
        if (delay) target.style.transitionDelay = `${delay}ms`;
        target.classList.add('reveal-visible');
        obs.unobserve(target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -5% 0px'
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-animate]')?.forEach((el) => {
      observer.observe(el);
    });
  });
})();

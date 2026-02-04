import { useRef, useEffect } from 'react';

/**
 * Lightweight scroll reveal: adds class "reveal-in" when element enters viewport (once).
 * Use with CSS classes .reveal and .reveal-in for opacity/transform. No Framer Motion.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const { rootMargin = '0px 0px -40px 0px', once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, once]);

  return ref;
}

import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Ngừng theo dõi sau khi đã hiển thị
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
} 
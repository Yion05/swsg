// useLazyLoad.ts
import { useEffect, useRef, useState, useMemo } from 'react';

interface IntersectionObserverOptions {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useLazyLoad = (
  options: IntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const observerOptions = useMemo(() => options, [
    options.root,
    options.rootMargin,
    options.threshold,
  ]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
        setIsVisible(true);
        return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const currentRef = targetRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [observerOptions]);

  return [targetRef, isVisible];
};

export default useLazyLoad;
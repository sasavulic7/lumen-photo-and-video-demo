import { useState, useEffect, useRef } from 'react';
import { FALLBACK_IMAGE } from '../data/images.js';

/** True once the element has entered the viewport (fires once). */
export function useInView(threshold = 0.16) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/**
 * Reveal wrapper.
 * variant="rise"  — text and blocks lift into place
 * variant="mask"  — images uncover behind a moving curtain
 */
export function Reveal({ children, variant = 'rise', delay = 0, className = '', as = 'div', ...rest }) {
  const [ref, inView] = useInView();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`rv rv-${variant} ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, '--rv-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Splits a line into words that rise independently. */
export function RevealLine({ text, delay = 0, className = '' }) { const [ref, inView] = useInView(0.3); const words = text.split(/\s+/); return ( <span ref={ref} className={`rvl ${inView ? 'is-in' : ''} ${className}`} > {words.map((word, i) => ( <span className="rvl-word" key={`${word}-${i}`}> <span className="rvl-inner" style={{ transitionDelay: `${delay + i * 55}ms` }} > {word} </span> {i < words.length - 1 && '\u00A0'} </span> ))} </span> ); }

/** Window scroll position, throttled to animation frames. */
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setY(window.scrollY);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return y;
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
}

/**
 * Image with lazy loading, async decoding, a soft fade-in on load and a
 * fallback if a remote URL ever disappears.
 */
export function Img({ src, alt, className = '', sizes, priority = false, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={priority ? 'high' : undefined}
      onLoad={() => setLoaded(true)}
      onError={(e) => {
        if (e.currentTarget.src !== FALLBACK_IMAGE) e.currentTarget.src = FALLBACK_IMAGE;
        setLoaded(true);
      }}
      className={`img ${loaded ? 'is-loaded' : ''} ${className}`}
      {...rest}
    />
  );
}

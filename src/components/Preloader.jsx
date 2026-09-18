import { useState, useEffect } from 'react';
import { prefersReducedMotion } from '../lib/motion.jsx';

/**
 * One orchestrated moment on first load: the wordmark assembles, a thin
 * line of light crosses the screen, then the curtain lifts. Runs once per
 * session and is skipped entirely for reduced-motion visitors.
 */
export default function Preloader({ onDone }) {
  const skip = prefersReducedMotion();
  const [count, setCount] = useState(0);
  const [lifting, setLifting] = useState(false);
  const [gone, setGone] = useState(skip);

  useEffect(() => {
    if (skip) {
      onDone?.();
      return;
    }
    document.body.style.overflow = 'hidden';
    const start = performance.now();
    const duration = 1500;

    let frame;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      // ease-out so the counter decelerates into 100
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) frame = requestAnimationFrame(tick);
      else {
        setLifting(true);
        setTimeout(() => {
          setGone(true);
          document.body.style.overflow = '';
          onDone?.();
        }, 900);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = '';
    };
  }, [skip, onDone]);

  if (gone) return null;

  return (
    <div className={`preloader ${lifting ? 'is-lifting' : ''}`} aria-hidden="true">
      <div className="preloader-inner">
        <div className="preloader-mark">
          {'LUMEN'.split('').map((letter, i) => (
            <span key={i} style={{ transitionDelay: `${120 + i * 70}ms` }}>
              {letter}
            </span>
          ))}
        </div>
        <div className="preloader-rule">
          <span style={{ transform: `scaleX(${count / 100})` }} />
        </div>
        <div className="preloader-meta">
          <span>Photography &amp; Film</span>
          <span>{String(count).padStart(3, '0')}</span>
        </div>
      </div>
    </div>
  );
}
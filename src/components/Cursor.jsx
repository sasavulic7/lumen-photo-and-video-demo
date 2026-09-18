import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../lib/Motion.jsx';

/**
 * A single thin ring that trails the pointer and widens over anything
 * clickable. Desktop + fine-pointer only; never rendered on touch devices,
 * and never for reduced-motion visitors.
 */
export default function Cursor() {
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine || prefersReducedMotion()) return;
    setEnabled(true);

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };
    let frame;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target.closest('a, button, [data-cursor]');
      setActive(Boolean(el));
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.16;
      pos.y += (target.y - pos.y) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;
  return <div ref={ring} className={`cursor-ring ${active ? 'is-active' : ''}`} aria-hidden="true" />;
}
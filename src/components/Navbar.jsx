import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ROUTES, NAV_ITEMS, navigate } from '../lib/router.jsx';
import { useScrollY } from '../lib/motion.jsx';
import { STUDIO } from '../data/Services.jsx';

export default function Navbar({ route }) {
  const y = useScrollY();
  const [open, setOpen] = useState(false);

  // Pages other than the index start on ivory, so the bar inverts immediately.
  const overHero = route === 'home' && y < window.innerHeight * 0.82;
  const condensed = y > 40;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (key) => {
    setOpen(false);
    navigate(key);
  };

  return (
    <>
      <header
        className={[
          'nav',
          overHero ? 'nav-over' : 'nav-solid',
          condensed ? 'nav-condensed' : '',
        ].join(' ')}
      >
        <button className="wordmark" onClick={() => go('home')} aria-label="LUMEN — home">
          <span className="wordmark-name">LUMEN</span>
          <span className="wordmark-sub">Photo &amp; Film</span>
        </button>

        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.map((key) => (
            <button
              key={key}
              onClick={() => go(key)}
              className={`nav-link ${route === key ? 'is-current' : ''}`}
              aria-current={route === key ? 'page' : undefined}
            >
              {ROUTES[key].label}
            </button>
          ))}
          <button className="nav-inquire" onClick={() => go('contact')}>
            Check your date
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </button>
        </nav>

        <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
          <Menu size={22} strokeWidth={1.25} />
        </button>
      </header>

      <div
        className={`menu ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
      >
        <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <X size={24} strokeWidth={1.25} />
        </button>

        <nav className="menu-links" aria-label="Mobile">
          {['home', ...NAV_ITEMS].map((key, i) => (
            <button
              key={key}
              className="menu-link"
              style={{ transitionDelay: open ? `${140 + i * 70}ms` : '0ms' }}
              onClick={() => go(key)}
            >
              <span className="menu-index">{String(i + 1).padStart(2, '0')}</span>
              {ROUTES[key].label}
            </button>
          ))}
        </nav>

        <div className="menu-foot">
          <span>{STUDIO.city}</span>
          <span>{STUDIO.email}</span>
          <span>{STUDIO.instagram}</span>
        </div>
      </div>
    </>
  );
}
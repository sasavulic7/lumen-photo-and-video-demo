import { Instagram, Mail, Phone } from 'lucide-react';
import { ROUTES, NAV_ITEMS, navigate } from '../lib/router.jsx';
import { STUDIO } from '../data/Services.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <button className="footer-mark" onClick={() => navigate('home')} aria-label="LUMEN — home">
            LUMEN
          </button>
          <p className="footer-tagline">{STUDIO.tagline}</p>
          <p className="footer-note">
            Wedding photography and cinematic film. {STUDIO.city} — {STUDIO.reach.toLowerCase()}.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {NAV_ITEMS.map((key) => (
            <button key={key} onClick={() => navigate(key)}>
              {ROUTES[key].label}
            </button>
          ))}
        </nav>

        <address className="footer-contact">
          <a href={`mailto:${STUDIO.email}`}>
            <Mail size={15} strokeWidth={1.5} /> {STUDIO.email}
          </a>
          <a href={`tel:${STUDIO.phone.replace(/\s/g, '')}`}>
            <Phone size={15} strokeWidth={1.5} /> {STUDIO.phone}
          </a>
          <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer noopener">
            <Instagram size={15} strokeWidth={1.5} /> {STUDIO.instagram}
          </a>
        </address>
      </div>

      <div className="footer-base">
        <span>© {new Date().getFullYear()} LUMEN Studio</span>
        <span>Jagodina · Beograd · Novi Sad · Europe</span>
      </div>
    </footer>
  );
}
import { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Img } from '../lib/Motion.jsx';
import { PROJECTS } from '../components/projects.js';
import { navigate } from '../lib/router.jsx';

/**
 * Story detail, presented as a full-height panel that slides over the grid
 * rather than a separate page — the work stays one continuous experience.
 */
export default function StoryOverlay({ project, onClose, onOpen }) {
  const panel = useRef(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    panel.current?.focus();
    panel.current?.scrollTo({ top: 0 });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const index = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label={`${project.names}, ${project.place}`}>
      <button className="overlay-scrim" onClick={onClose} aria-label="Close story" tabIndex={-1} />

      <div className="overlay-panel" ref={panel} tabIndex={-1}>
        <button className="overlay-close" onClick={onClose} aria-label="Close story">
          <X size={20} strokeWidth={1.25} />
        </button>

        <figure className="overlay-hero">
          <Img src={project.cover} alt={`${project.names} — wedding in ${project.place}, ${project.year}`} priority />
        </figure>

        <header className="overlay-head">
          <p className="overlay-meta">
            {project.place} <i>·</i> {project.year} <i>·</i> {project.work}
          </p>
          <h2 className="display-2">{project.names}</h2>
          <p className="prose">{project.story}</p>
        </header>

        <div className="overlay-gallery">
          {project.gallery.map((src, i) => (
            <figure key={i} className={`overlay-frame frame-${i % 3}`}>
              <Img src={src} alt={`${project.names}, photograph ${i + 1} of ${project.gallery.length}`} />
            </figure>
          ))}
        </div>

        <div className="overlay-foot">
          <button className="link-under" onClick={() => onOpen(next)}>
            Next story — {next.names} <ArrowRight size={15} strokeWidth={1.5} />
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              onClose();
              navigate('contact');
            }}
          >
            Check your date
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Img, Reveal, RevealLine } from '../lib/Motion.jsx';
import { PROJECTS } from '../components/projects.js';
import { Closing } from './Home.jsx';

const FILTERS = ['All', 'Photography', 'Film'];

export default function Stories({ onOpenStory }) {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.work.includes(filter));
  }, [filter]);

  return (
    <main className="page">
      <header className="page-head">
        <h1 className="display-1">
          <RevealLine text="Stories" />
        </h1>
        <p className="page-lede">
          Every wedding here was photographed or filmed in full. Nothing is recreated, borrowed or styled for the
          camera.
        </p>

        <div className="filters" role="group" aria-label="Filter stories">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
          <span className="filter-count">
            {visible.length} {visible.length === 1 ? 'story' : 'stories'}
          </span>
        </div>
      </header>

      <section className="stories-grid" aria-label="Wedding stories">
        {visible.map((p, i) => (
  <article
    key={p.id}
    className={`story story-${p.size}`}
  >
    <button className="story-open" onClick={() => onOpenStory(p)}>
      <span className="story-frame">
        <Img
          src={p.cover}
          alt={`${p.names} — ${p.work.toLowerCase()}, ${p.place} ${p.year}`}
          className="story-img"
        />
      </span>

      <span className="story-meta">
        <span className="story-names">{p.names}</span>

        <span className="story-line">
          {p.place} <i>·</i> {p.year} <i>·</i> {p.work}
        </span>

        <span className="story-intro">{p.intro}</span>

        <span className="story-cta">
          View story
          <ArrowRight size={14} strokeWidth={1.5} />
        </span>
      </span>
    </button>
  </article>
))}
      </section>

      <Closing title="Your story could sit here next season." />
    </main>
  );
}
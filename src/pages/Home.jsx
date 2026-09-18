import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { Img, Reveal, RevealLine, useScrollY, prefersReducedMotion } from '../lib/Motion.jsx';
import { IMAGES } from "../data/images.js";
import { PROJECTS } from '../components/projects.js';
import { EXPERIENCE } from '../data/Services.jsx';
import { navigate } from '../lib/router.jsx';
import Marquee from '../components/Marquee.jsx';

/* ------------------------------------------------------------------ *
 * Hero — one photograph, held still, with a slow drift.
 * ------------------------------------------------------------------ */
function Hero({ ready }) {
  const y = useScrollY();
  const reduce = prefersReducedMotion();
  const drift = reduce ? 0 : Math.min(y, 900) * 0.28;

  return (
    <section className="hero" id="top">
      <div className="hero-media" style={{ transform: `translate3d(0, ${drift}px, 0)` }}>
        <Img
          src={IMAGES.heroPrimary}
          alt="A bride and groom at the end of the evening, lit by warm light"
          className={`hero-img ${reduce ? '' : 'is-drifting'}`}
          priority
        />
        <div className="hero-scrim" />
        <div className="grain" />
      </div>

      <div className={`hero-body ${ready ? 'is-ready' : ''}`}>
        <p className="hero-kicker">Wedding photography &amp; cinematic film</p>
        <h1 className="hero-title">
          <span className="line">
            <span>Light, kept</span>
          </span>
          <span className="line">
            <span>long after the day ends.</span>
          </span>
        </h1>
        <p className="hero-sub">
          LUMEN is a two-person studio in Jagodina, documenting weddings across Serbia and Europe.
        </p>
        <div className="hero-actions">
          <button className="btn btn-light" onClick={() => navigate('stories')}>
            See the work
          </button>
          <button className="link-under link-light" onClick={() => navigate('contact')}>
            Check your date <ArrowUpRight size={15} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <aside className={`hero-side ${ready ? 'is-ready' : ''}`} aria-hidden="true">
        <span>43°58′N 21°15′E</span>
        <span className="hero-side-rule" />
        <span>Est. Jagodina</span>
      </aside>

      <div className={`hero-cue ${ready ? 'is-ready' : ''}`} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Selected work
 * ------------------------------------------------------------------ */
function SelectedWork({ onOpen }) {
  const featured = PROJECTS.slice(0, 4);

  return (
    <section className="section work" aria-labelledby="work-heading">
      <div className="section-head">
        <h2 className="display-2" id="work-heading">
          <RevealLine text="Selected stories" />
        </h2>
        <p className="section-note">
          Four weddings we were trusted with, documented from the first quiet hour to the last table.
        </p>
      </div>

      <div className="work-grid">
        {featured.map((p, i) => (
         <article
        key={p.id}
        className={`work-card work-card-${i + 1}`}
        >
            <button className="work-open" onClick={() => onOpen(p)} aria-label={`Open the story of ${p.names}`}>
              <span className="work-frame">
                <Img src={p.cover} alt={`${p.names}, ${p.place} ${p.year}`} className="work-img" />
              </span>
              <span className="work-meta">
                <span className="work-names">{p.names}</span>
                <span className="work-place">
                  {p.place} <i>·</i> {p.year}
                </span>
                <span className="work-cta">
                  View story <ArrowRight size={14} strokeWidth={1.5} />
                </span>
              </span>
            </button>
          </article>
        ))}
      </div>

      <div className="section-foot">
        <button className="link-under" onClick={() => navigate('stories')}>
          All stories <ArrowRight size={15} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Photography / Film — two halves of one studio
 * ------------------------------------------------------------------ */
function Craft() {
  return (
    <section className="craft" aria-labelledby="craft-heading">
      <h2 className="sr-only" id="craft-heading">
        What we make
      </h2>

      <article className="craft-half">
        <article variant="mask" className="craft-media">
          <Img src={IMAGES.photography} alt="A photographer composing a frame during a wedding" className="craft-img" />
        </article>
        <div className="craft-text">
          <span className="craft-index">01</span>
          <h3 className="display-3">Photographs</h3>
          <p className="prose prose-light">
            Available light, warm colour, and almost no instructions. Printed, they should still mean something in
            forty years.
          </p>
          <button className="link-under link-light" onClick={() => navigate('services')}>
            Photography <ArrowRight size={15} strokeWidth={1.5} />
          </button>
        </div>
      </article>

      <article className="craft-half craft-half-film">
        <article variant="mask" delay={120} className="craft-media">
          <Img src={IMAGES.film} alt="A filmmaker recording a wedding ceremony" className="craft-img" />
          <span className="craft-play">
            <Play size={18} strokeWidth={1.25} />
          </span>
        </article>
        <div className="craft-text">
          <span className="craft-index">02</span>
          <h3 className="display-3">Film</h3>
          <p className="prose prose-light">
            Vows recorded properly, sound that carries the room, and an edit built like a short film rather than a
            highlight reel.
          </p>
          <button className="link-under link-light" onClick={() => navigate('services')}>
            Cinematic film <ArrowRight size={15} strokeWidth={1.5} />
          </button>
        </div>
      </article>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * The experience — a genuine three-step sequence
 * ------------------------------------------------------------------ */
function Experience() {
  return (
    <section className="section experience" aria-labelledby="experience-heading">
      <div className="section-head">
        <h2 className="display-2" id="experience-heading">
          <RevealLine text="How a wedding with us runs" />
        </h2>
      </div>
      <ol className="experience-list">
        {EXPERIENCE.map((item, i) => (
          <article as="li" key={item.step} delay={i * 110} className="experience-item">
            <span className="experience-step">{item.step}</span>
            <h3 className="experience-title">{item.title}</h3>
            <p className="experience-body">{item.body}</p>
          </article>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Studio teaser
 * ------------------------------------------------------------------ */
function StudioTeaser() {
  return (
    <section className="studio" aria-labelledby="studio-heading">
      <div className="studio-media">
        <article variant="mask" className="studio-frame studio-frame-a">
          <Img src={IMAGES.aboutTeaser} alt="The LUMEN photographers working during a ceremony" />
        </article>
        <article variant="mask" delay={160} className="studio-frame studio-frame-b">
          <Img src={IMAGES.aboutTeaserSmall} alt="A detail from a wedding reception" />
        </article>
      </div>

      <article className="studio-text" delay={80}>
        <h2 className="display-2" id="studio-heading">
          We document. We don't direct.
        </h2>
        <p className="prose">
          LUMEN began in Jagodina with two cameras and one rule we have never broken: nothing gets staged twice. The
          best frame of a wedding is almost always the one nobody noticed us take.
        </p>
        <p className="prose">
          That approach has since taken us to Belgrade, Novi Sad, the fortresses of Vojvodina and, a few times a
          year, well past the border.
        </p>
        <button className="link-under" onClick={() => navigate('about')}>
          About the studio <ArrowRight size={15} strokeWidth={1.5} />
        </button>
      </article>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Closing
 * ------------------------------------------------------------------ */
export function Closing({ title = "Let's make something worth keeping.", image = IMAGES.closing, alt = 'Wedding guests at dusk' }) {
  return (
    <section className="closing">
      <Img src={image} alt={alt} className="closing-img" />
      <div className="closing-scrim" />
      <div className="grain" />
      <article className="closing-body">
        <h2 className="closing-title">{title}</h2>
        <p className="closing-sub">We take a limited number of weddings each season. Dates open twelve months ahead.</p>
        <button className="btn btn-light" onClick={() => navigate('contact')}>
          Start a conversation
        </button>
      </article>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export default function Home({ onOpenStory }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      <Hero ready={ready} />
      <SelectedWork onOpen={onOpenStory} />
      <Marquee items={['Weddings', 'Cinematic film', 'Portraits', 'Serbia & Europe']} />
      <Craft />
      <Experience />
      <StudioTeaser />
      <Closing />
    </main>
  );
}
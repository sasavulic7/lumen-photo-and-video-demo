import { Img, Reveal, RevealLine } from '../lib/Motion.jsx';
import { IMAGES } from '../data/images.js';
import { Closing } from './Home.jsx';

const BELIEFS = [
  {
    title: 'The day is already good',
    body:
      'It does not need improving, staging or a golden-hour detour that costs you an hour with your friends. Our job is to notice, not to arrange.',
  },
  {
    title: 'Fewer, better photographs',
    body:
      'You will not receive three thousand files to sort through. You will receive a considered edit — and every frame in it will have earned its place.',
  },
  {
    title: 'Sound matters as much as image',
    body:
      'Years from now you will want to hear the vows, the toast that went sideways, the room reacting. We record all of it properly.',
  },
];

export default function About() {
  return (
    <main className="page">
      <section className="about-hero">
        <div className="about-hero-text">
          <h1 className="display-1">
            <RevealLine text="Two people, one way of working." />
          </h1>
          <p className="page-lede">
            LUMEN is Nikola and Milica — a photographer and a filmmaker who have spent the last decade at other
            people's weddings, learning when to step forward and, more often, when not to.
          </p>
        </div>
        <article variant="mask" className="about-hero-media" delay={100}>
          <Img src={IMAGES.aboutPortrait} alt="Portrait of the two photographers behind LUMEN" priority />
        </article>
      </section>

      <section className="about-quote">
        <article>
          <blockquote>
            <p>
              The photographs people keep are rarely the ones they asked for. They are the ones nobody was
              performing for.
            </p>
          </blockquote>
        </article>
      </section>

      <section className="about-beliefs" aria-label="What we believe">
        {BELIEFS.map((b, i) => (
          <article key={b.title} delay={i * 100} className="belief">
            <h2 className="belief-title">{b.title}</h2>
            <p className="prose">{b.body}</p>
          </article>
        ))}
      </section>

      <section className="about-wide">
        <Img src={IMAGES.aboutStudio} alt="The LUMEN studio during a wedding reception" className="about-wide-img" />
      </section>

      <section className="about-detail">
        <article variant="mask" className="about-detail-media">
          <Img src={IMAGES.aboutDetail} alt="Wedding rings resting on a table" />
        </article>
        <article className="about-detail-text" delay={80}>
          <h2 className="display-2">How we got here</h2>
          <p className="prose">
            Nikola started photographing weddings for friends in Jagodina in 2014, borrowing a camera and learning
            in rooms he was not being paid to be in. Milica came from documentary film and spent years cutting
            other people's footage before deciding she would rather shoot her own.
          </p>
          <p className="prose">
            We work as a pair at every wedding — one on stills, one on film — which is why the two halves of what
            you receive look like they came from the same afternoon. Because they did.
          </p>
        </article>
      </section>

      <section className="reach">
        <article className="reach-inner">
          <h2 className="display-2">Based in Jagodina. Available across Serbia &amp; beyond.</h2>
          <p className="prose prose-light">
            Most of our season happens within two hours of the studio — Belgrade, Kragujevac, Novi Sad, the spa
            towns of the Morava valley. Travel further is simply arranged: we take a small number of weddings
            abroad each year and quote travel at cost, never as a markup.
          </p>
          <ul className="reach-list">
            <li>Jagodina &amp; central Serbia</li>
            <li>Belgrade · Novi Sad · Kragujevac</li>
            <li>Montenegro · Greece · Italy · Austria</li>
          </ul>
        </article>
      </section>

      <Closing title="If this sounds like your kind of day, write to us." />
    </main>
  );
}
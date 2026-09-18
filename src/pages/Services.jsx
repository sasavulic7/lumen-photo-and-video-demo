import { Check, ArrowRight } from 'lucide-react';
import { Img, Reveal, RevealLine } from '../lib/motion.jsx';
import { SERVICES } from '../data/Services.jsx';
import { navigate } from '../lib/router.jsx';
import { Closing } from './Home.jsx';
import { IMAGES } from '../data/images.js';

function Service({ service, i }) {
  return (
    <Reveal as="article" className={`service ${i % 2 ? 'service-flip' : ''}`} id={service.id}>
      <div className="service-media">
        <Img src={service.image} alt={service.title} className="service-img" />
      </div>

      <div className="service-body">
        <span className="service-index">{service.index}</span>
        <h2 className="display-3">{service.title}</h2>
        <p className="service-lead">{service.lead}</p>
        <p className="prose">{service.body}</p>

        <p className="service-approach">
          <span>Approach</span>
          {service.approach}
        </p>

        <ul className="service-list">
          {service.includes.map((item) => (
            <li key={item}>
              <Check size={14} strokeWidth={2} />
              {item}
            </li>
          ))}
        </ul>

        <button className="btn btn-outline" onClick={() => navigate('contact')}>
          Request availability
        </button>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <main className="page">
      <header className="page-head">
        <h1 className="display-1">
          <RevealLine text="Services" />
        </h1>
        <p className="page-lede">
          Four ways of working, all built on the same idea: be present, stay quiet, and come back with the day
          intact.
        </p>
      </header>

      <section className="services">
        {SERVICES.map((s, i) => (
          <Service key={s.id} service={s} i={i} />
        ))}
      </section>

      <section className="pricing-note">
        <Reveal className="pricing-inner">
          <h2 className="display-3">On collections</h2>
          <p className="prose">
            We don't publish packages. Every wedding differs in length, distance and what matters to the couple, so
            we build a collection after we've spoken — usually within a day of your first message.
          </p>
          <button className="link-under" onClick={() => navigate('contact')}>
            Ask about your date <ArrowRight size={15} strokeWidth={1.5} />
          </button>
        </Reveal>
      </section>

      <Closing
        title="Tell us when and where."
        image={IMAGES.aboutHands}
        alt="A couple holding hands during a wedding ceremony"
      />
    </main>
  );
}
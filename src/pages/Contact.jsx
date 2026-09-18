import { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Check } from 'lucide-react';
import { Img, Reveal, RevealLine } from '../lib/motion.jsx';
import { IMAGES } from '../data/images.js';
import { STUDIO } from '../data/Services.jsx';

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  date: '',
  location: '',
  interest: 'Both',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  /**
   * Demo only — no backend. To connect a real service later, POST `form`
   * here (Formspree, Resend, EmailJS, or your own endpoint) and keep the
   * success state below.
   */
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="page contact">
      <section className="contact-grid">
        <div className="contact-left">
          <h1 className="display-1">
            <RevealLine text="Tell us about your day." />
          </h1>
          <p className="page-lede">
            Your date, your plans, your story. Write as much or as little as you like — we answer every message
            ourselves, usually within two days.
          </p>

          <Reveal className="contact-details" delay={80}>
            <div className="detail">
              <MapPin size={16} strokeWidth={1.5} />
              <div>
                <p>{STUDIO.city}</p>
                <p className="muted">{STUDIO.reach}</p>
              </div>
            </div>
            <div className="detail">
              <Mail size={16} strokeWidth={1.5} />
              <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
            </div>
            <div className="detail">
              <Phone size={16} strokeWidth={1.5} />
              <a href={`tel:${STUDIO.phone.replace(/\s/g, '')}`}>{STUDIO.phone}</a>
            </div>
            <div className="detail">
              <Instagram size={16} strokeWidth={1.5} />
              <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer noopener">
                {STUDIO.instagram}
              </a>
            </div>
          </Reveal>

          <Reveal variant="mask" delay={140} className="contact-media">
            <Img src={IMAGES.contactSide} alt="A quiet moment before a wedding ceremony" />
          </Reveal>
        </div>

        <Reveal className="contact-right" delay={60}>
          {sent ? (
            <div className="sent" role="status">
              <Check size={26} strokeWidth={1.25} />
              <h2 className="display-3">Message received.</h2>
              <p className="prose">
                Thank you, {form.name.split(' ')[0] || 'and speak soon'}. We'll come back to you within two days
                with availability and next steps.
              </p>
              <button className="link-under" onClick={() => { setForm(EMPTY); setSent(false); }}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate={false}>
              <div className="form-row">
                <label className="field">
                  <span>Name</span>
                  <input type="text" required value={form.name} onChange={set('name')} placeholder="Ana &amp; Marko" autoComplete="name" />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input type="email" required value={form.email} onChange={set('email')} placeholder="you@email.com" autoComplete="email" />
                </label>
              </div>

              <div className="form-row">
                <label className="field">
                  <span>Phone</span>
                  <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+381" autoComplete="tel" />
                </label>
                <label className="field">
                  <span>Wedding date</span>
                  <input type="date" value={form.date} onChange={set('date')} />
                </label>
              </div>

              <div className="form-row">
                <label className="field">
                  <span>Location</span>
                  <input type="text" value={form.location} onChange={set('location')} placeholder="Venue, town or country" />
                </label>
                <label className="field">
                  <span>You're looking for</span>
                  <select value={form.interest} onChange={set('interest')}>
                    <option>Photography</option>
                    <option>Film</option>
                    <option>Both</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>

              <label className="field">
                <span>Your day</span>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="How many guests, what kind of day you're imagining, anything you'd hate to lose..."
                />
              </label>

              <button type="submit" className="btn btn-dark">
                Send inquiry
              </button>
              <p className="form-note">Demo form — nothing is sent until an email service is connected.</p>
            </form>
          )}
        </Reveal>
      </section>
    </main>
  );
}
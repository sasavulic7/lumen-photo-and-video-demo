import { IMAGES } from './images.js';

export const SERVICES = [
  {
    id: 'wedding-photography',
    index: 'I',
    title: 'Wedding Photography',
    lead: 'The whole day, told honestly.',
    body:
      'Coverage built around your timeline rather than a package. We arrive while the house is still quiet and stay until the room empties, working close but out of the way. What you get back is the day as it happened — not a reconstruction of it.',
    approach:
      'Available light wherever possible. Warm, filmic colour. Few instructions, and never during a moment that is already happening.',
    includes: [
      'Full-day coverage, no hour caps',
      'Second photographer on request',
      'Private online gallery within four weeks',
      'Hand-bound fine-art album, optional',
    ],
    image: IMAGES.serviceWedding,
  },
  {
    id: 'cinematic-films',
    index: 'II',
    title: 'Cinematic Wedding Films',
    lead: 'Your day, in motion and in sound.',
    body:
      'A short film shaped like a film — with your vows, your speeches and the sound of the room carrying it. No music-video montage, no borrowed voiceover. We record audio properly, because half of what you will want back is what people said.',
    approach:
      'Two operators, discreet lavalier audio, natural movement. Graded to match your photographs so both halves feel like one body of work.',
    includes: [
      'Feature film, 8–15 minutes',
      'Full ceremony and speech edits',
      'Aerial footage where permitted',
      '4K delivery plus a short social cut',
    ],
    image: IMAGES.serviceFilm,
  },
  {
    id: 'engagement-sessions',
    index: 'III',
    title: 'Engagement Sessions',
    lead: 'A quieter rehearsal.',
    body:
      'An unhurried hour or two before the wedding, somewhere that means something to you. Useful for invitations and save-the-dates, and more useful still as the first time you stand in front of our cameras.',
    approach:
      'Late afternoon light, one or two locations, walking more than posing.',
    includes: [
      '60–90 minute session',
      'Up to two locations',
      'Edited gallery within ten days',
      'Print-ready files included',
    ],
    image: IMAGES.serviceEngagement,
  },
  {
    id: 'events-couples',
    index: 'IV',
    title: 'Events & Couples',
    lead: 'Beyond the wedding day.',
    body:
      'Proposals, civil ceremonies, anniversaries, christenings, family gatherings and brand work for venues. The same restraint, the same attention, scaled to the occasion.',
    approach:
      'Half or full-day coverage, planned in a single call.',
    includes: [
      'Half or full-day coverage',
      'Flexible locations across Serbia',
      'Preview selection within 72 hours',
      'Custom print and framing options',
    ],
    image: IMAGES.serviceEvents,
  },
];

export const EXPERIENCE = [
  {
    step: '01',
    title: 'Before the day',
    body:
      'A call, a coffee, a walk through the venue. We build the timeline with you so the photography has room to breathe.',
  },
  {
    step: '02',
    title: 'Your wedding',
    body:
      'We work quietly and stay close. You will forget we are there, which is the entire point of how we work.',
  },
  {
    step: '03',
    title: 'The story after',
    body:
      'Your gallery within four weeks, your film shortly after, and an album made by hand if you want one.',
  },
];

export const STUDIO = {
  name: 'LUMEN',
  tagline: 'Light, kept.',
  email: 'studio@lumen.rs',
  phone: '+381 35 000 000',
  instagram: '@lumen.studio',
  instagramUrl: 'https://instagram.com/',
  city: 'Jagodina, Serbia',
  reach: 'Available across Serbia & Europe',
};
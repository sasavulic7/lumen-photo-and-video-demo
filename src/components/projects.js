import { unsplash as u } from '../data/images.js';

/**
 * Each entry is one wedding story. `size` drives the editorial grid on the
 * Stories page: 'hero' (wide, 16:10), 'tall' (portrait) or 'wide' (landscape).
 */
export const PROJECTS = [
  {
    id: 'ana-marko',
    names: 'Ana & Marko',
    place: 'Belgrade',
    year: '2026',
    work: 'Photography & Film',
    size: 'hero',
    intro: 'A late-summer wedding above the Sava.',
    story:
      'They wanted one thing from us: to be left alone. So we stayed at the edge of the room for most of the day — through the nerves in the morning, the vows that neither of them got through cleanly, and an evening that ran long past the last song on the list.',
    cover: u('1519741497674-611481863552', 1800),
    gallery: [
      u('1519741497674-611481863552', 1600),
      u('1511285560929-80b456fea0bc', 1200),
      u('1465495976277-4387d4b0b4c6', 1200),
      u('1470019693664-1d202d2c0907', 1600),
    ],
  },
  {
    id: 'mila-stefan',
    names: 'Mila & Stefan',
    place: 'Jagodina',
    year: '2025',
    work: 'Cinematic Film',
    size: 'tall',
    intro: 'A courtyard, string lights, one unbroken take.',
    story:
      'Mila grew up in the house where they married. We filmed the first dance as a single continuous shot, because cutting it would have meant losing the way her grandmother watched from the doorway.',
    cover: u('1606216794074-735e91aa2c92', 1200),
    gallery: [
      u('1606216794074-735e91aa2c92', 1600),
      u('1550005809-91ad75fb315f', 1200),
      u('1519225421980-715cb0215aed', 1200),
    ],
  },
  {
    id: 'jelena-luka',
    names: 'Jelena & Luka',
    place: 'Novi Sad',
    year: '2025',
    work: 'Photography',
    size: 'wide',
    intro: 'An autumn ceremony at the fortress.',
    story:
      'Chosen for the view, remembered for the wind. Half of our favourite frames from that afternoon exist because the veil refused to stay still.',
    cover: u('1520854221256-17451cc331bf', 1800),
    gallery: [
      u('1520854221256-17451cc331bf', 1600),
      u('1509927083803-4bd519298ac4', 1200),
      u('1522673607200-164d1b6ce486', 1200),
    ],
  },
  {
    id: 'sofija-nikola',
    names: 'Sofija & Nikola',
    place: 'Kragujevac',
    year: '2024',
    work: 'Photography & Film',
    size: 'tall',
    intro: 'Twenty-eight guests and a very long lunch.',
    story:
      'No procession, no timeline, no photographer calling people into position. They asked us to document the quiet parts as carefully as the loud ones, and that turned out to be most of the day.',
    cover: u('1525258655028-45c5f1bf9d3b', 1200),
    gallery: [
      u('1525258655028-45c5f1bf9d3b', 1600),
      u('1513279922550-250c2129b13a', 1200),
      u('1470753323753-3f8091bb0232', 1200),
    ],
  },
  {
    id: 'ivana-petar',
    names: 'Ivana & Petar',
    place: 'Belgrade',
    year: '2024',
    work: 'Cinematic Film',
    size: 'wide',
    intro: 'Filmed across two days and one very short night.',
    story:
      'We began on the eve of the wedding at Ivana\u2019s family home, with her sisters pressing the dress, and finished when the candles on the last table burned out.',
    cover: u('1511578314322-379afb476865', 1800),
    gallery: [
      u('1511578314322-379afb476865', 1600),
      u('1519671482749-fd09be7ccebf', 1200),
      u('1465495976277-4387d4b0b4c6', 1200),
    ],
  },
  {
    id: 'tamara-nemanja',
    names: 'Tamara & Nemanja',
    place: 'Vrnja\u010dka Banja',
    year: '2024',
    work: 'Photography',
    size: 'hero',
    intro: 'A spa-town weekend for thirty people.',
    story:
      'Two days, one hotel, and a couple who treated the whole weekend as the wedding. We photographed it the same way — beginning at breakfast on Friday.',
    cover: u('1583939003579-730e3918a45a', 1800),
    gallery: [
      u('1583939003579-730e3918a45a', 1600),
      u('1550005809-91ad75fb315f', 1200),
      u('1519225421980-715cb0215aed', 1200),
    ],
  },
];

export const getProject = (id) => PROJECTS.find((p) => p.id === id);
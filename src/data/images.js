/**
 * LUMEN — central image configuration.
 *
 * Every photograph used on the site is referenced from this single file.
 * To go live with real LUMEN work, replace the URLs below (keep the keys)
 * or point them at local files in /public/images/.
 *
 * Current placeholders: Unsplash (free licence), served through Unsplash's
 * CDN with width + quality parameters so the browser never downloads more
 * pixels than it needs.
 */

const u = (id, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

/** Shown if any remote image fails to load. */
export const FALLBACK_IMAGE = u('1519741497674-611481863552', 1600);

export const IMAGES = {
  /* ---- Home ---- */
  heroPrimary: u('1519741497674-611481863552', 2400, 85),
  heroSecondary: u('1465495976277-4387d4b0b4c6', 1200),
  photography: u('1520854221256-17451cc331bf', 1800),
  film: u('1606216794074-735e91aa2c92', 1800),
  aboutTeaser: u('1583939003579-730e3918a45a', 1400),
  aboutTeaserSmall: u('1511578314322-379afb476865', 900),
  closing: u('1470019693664-1d202d2c0907', 2200, 85),

  /* ---- About ---- */
  aboutPortrait: u('1522673607200-164d1b6ce486', 1400),
  aboutStudio: u('1519225421980-715cb0215aed', 2000),
  aboutDetail: u('1470753323753-3f8091bb0232', 1200),
  aboutHands: u('1550005809-91ad75fb315f', 1200),

  /* ---- Services ---- */
  serviceWedding: u('1511285560929-80b456fea0bc', 1600),
  serviceFilm: u('1525258655028-45c5f1bf9d3b', 1600),
  serviceEngagement: u('1519671482749-fd09be7ccebf', 1600),
  serviceEvents: u('1513279922550-250c2129b13a', 1600),

  /* ---- Contact ---- */
  contactSide: u('1509927083803-4bd519298ac4', 1400),
};

export { u as unsplash };
# LUMEN — Photo & Film Studio

Koncept sajta za foto/video studio iz Jagodine. React + Vite, bez backend-a.

---

## Najbrži način da vidiš sajt

Otvori **`demo/lumen-demo.html`** duplim klikom. To je ceo sajt u jednom fajlu —
bez instalacije, bez terminala. Idealno za slanje klijentu ili prikaz na sastanku.
(Potreban je internet, jer se fontovi i fotografije učitavaju sa mreže.)

## Pokretanje razvojne verzije

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produkcijski build u /dist
npm run preview  # pregled builda
```

Posle izmena u `src/`, demo fajl se osvežava sa:

```bash
node build-demo.mjs
```

---

## Struktura

```
index.html                 meta tagovi, Open Graph, LocalBusiness schema
build-demo.mjs             pravi demo/lumen-demo.html iz src/
src/
  main.jsx                 ulazna tačka
  App.jsx                  shell — ruter, preloader, kursor, stranice
  styles.css               ceo dizajn sistem (tokeni, tipografija, stranice)
  data/
    images.js              ⭐ SVE fotografije na jednom mestu
    projects.js            venčanja / portfolio
    services.js            usluge, proces, podaci studija
  lib/
    router.jsx             mini hash ruter + SEO meta po stranici
    motion.jsx             Reveal, RevealLine, Img, scroll hook-ovi
  components/
    Preloader.jsx  Cursor.jsx  Navbar.jsx  Footer.jsx
    Marquee.jsx    StoryOverlay.jsx
  pages/
    Home.jsx  Stories.jsx  Services.jsx  About.jsx  Contact.jsx
```

---

## Zamena fotografija

Sve slike se referenciraju iz **`src/data/images.js`** i `src/data/projects.js`.
Za prave fotografije:

1. Ubaci slike u `public/images/`
2. U `images.js` zameni URL-ove sa `/images/naziv.jpg` (ključeve ostavi iste)
3. U `projects.js` zameni `cover` i `gallery` po venčanju

Ništa drugo ne treba dirati — kompozicija, odnosi stranica i crop se rešavaju u CSS-u.

## Zamena imena studija i kontakata

`src/data/services.js` → objekat `STUDIO` (ime, email, telefon, Instagram, grad).
Wordmark „LUMEN" je u `components/Navbar.jsx`, `components/Footer.jsx` i
`components/Preloader.jsx`.

## Povezivanje kontakt forme

Forma je demo. U `src/pages/Contact.jsx`, funkcija `submit()` — tu ide `fetch`
ka servisu (Formspree, Resend, EmailJS, Web3Forms ili sopstveni endpoint).
Sva polja su već u state objektu `form`. Ekran uspeha ostaje isti.

---

## Dizajn

| | |
|---|---|
| Boje | obsidian `#100F0D`, ivory `#F4EFE7`, bone `#E6DCCC`, champagne `#B2915F` |
| Display font | Cormorant Garamond 300/400 |
| Interface font | Jost 300/400/500 |
| Mreža | 12 kolona, asimetrična; slike nose kompoziciju |
| Animacija | clip-path otkrivanje slika, reveal teksta po rečima, parallax u hero-u |

Sve boje i razmaci su CSS varijable na `:root` u `styles.css`.

## Pristupačnost i performanse

- semantički HTML, `aria` atributi, „skip to content" link
- vidljiv focus ring na tastaturi
- `prefers-reduced-motion` gasi sve animacije, uključujući preloader
- lazy loading + `decoding="async"` na svim slikama osim hero-a
- fallback slika ako neki URL pukne
- bez eksternih animacionih biblioteka — samo IntersectionObserver i CSS

## SEO

Naslov i meta opis se menjaju po stranici (`lib/router.jsx`), Open Graph i
`LocalBusiness` structured data su u `index.html`. Pre puštanja u produkciju
zameni `https://lumen.rs/` pravim domenom i `og:image` pravom fotografijom.

---

Fotografije su privremene (Unsplash, besplatna licenca) i služe samo za prikaz koncepta.
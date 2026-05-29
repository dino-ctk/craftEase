# CraftEase

DIY platforma za tutorijale uređenja doma. React + Vite + DaisyUI + Tailwind CSS.

## Tech stack

- **React 18** + **Vite 5**
- **React Router DOM 6** (client-side routing)
- **Tailwind CSS 3** + **DaisyUI 4** (custom `craftease` tema)
- **Statični JSON** za sve podatke (`src/data/tutorijali.json`)
- Bez backenda, bez baze podataka

## Pokretanje

```bash
npm install
npm run dev
```

Aplikacija se pokreće na `http://localhost:5173`

## Build za produkciju

```bash
npm run build
npm run preview
```

## Struktura projekta

```
craftease/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigacija s kategorijama
│   │   ├── Footer.jsx        # Footer s kontaktom
│   │   ├── TutorialCard.jsx  # Kartica tutorijala
│   │   └── ScrollToTop.jsx   # Scroll na vrh pri promjeni rute
│   ├── data/
│   │   └── tutorijali.json   # ← SVI STATIČNI PODACI (videi, alati, materijali, URLovi)
│   ├── pages/
│   │   ├── HomePage.jsx      # Početna stranica
│   │   └── TutorialPage.jsx  # Stranica pojedinog tutorijala
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js        # DaisyUI custom tema "craftease"
├── vite.config.js
└── package.json
```

## Dodavanje novih tutorijala

Otvori `src/data/tutorijali.json` i dodaj novi objekt u niz `tutorijali`:

```json
{
  "id": "jedinstveni-id",
  "naslov": "Naslov tutorijala",
  "opis": "Kratki opis...",
  "kategorija": "spavaca-soba",   // id iz niza "kategorije"
  "razina": "početnik",           // "početnik" | "srednji" | "napredni"
  "vrijemeMin": 60,               // trajanje u minutama
  "trošak": "$",                  // "$" | "$$" | "$$$"
  "thumbnailUrl": "https://...",  // URL slike (Unsplash ili vlastita)
  "videoUrl": "https://www.youtube.com/embed/VIDEO_ID",
  "koraci": [
    "Korak 1...",
    "Korak 2..."
  ],
  "alati": [
    {
      "naziv": "Naziv alata",
      "ikona": "🔧",
      "bauhasUrl": "https://www.bauhaus.hr/cgi-bin/biscsearch.pl?lang=hr&searchtext=kljucna+rijec"
    }
  ],
  "materijali": [
    {
      "naziv": "Naziv materijala",
      "ikona": "🪵",
      "bauhasUrl": "https://www.bauhaus.hr/cgi-bin/biscsearch.pl?lang=hr&searchtext=kljucna+rijec"
    }
  ]
}
```

## Rute

| Ruta              | Stranica                        |
|-------------------|---------------------------------|
| `/`               | Početna (hero + o nama + lista) |
| `/?kategorija=id` | Početna s filtriranom kategorijom |
| `/tutorial/:id`   | Pojedinačni tutorial            |

## GitHub Pages deploy

```bash
# Dodaj u vite.config.js:
# base: '/naziv-repozitorija/'

npm run build
# Pushaj /dist na gh-pages branch
```

## Bauhaus URLovi

Sve poveznice na Bauhaus webshop generiraju se kao search URL:
`https://www.bauhaus.hr/cgi-bin/biscsearch.pl?lang=hr&searchtext=POJAM`

Zamijeni `POJAM` s konkretnim nazivom proizvoda za preciznije rezultate.

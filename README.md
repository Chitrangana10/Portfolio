# Chitrangana Laxkar — Portfolio

Personal portfolio site. React + Vite + Tailwind, no backend.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle locally
```

## Editing the content

Everything written on the page lives in [`src/data/profile.js`](src/data/profile.js) —
name, summary, stats, experience, projects, skills, education, activities and
contact details. Change it there and the whole site updates; no component edits
needed for ordinary content changes.

### Fill these in when you have them

| Field | File | Note |
| --- | --- | --- |
| `projects[].repo` | `src/data/profile.js` | Only Legal RAG Chatbot has one. `null` hides the Source button. |
| `projects[].demo` | `src/data/profile.js` | `null` hides the Live button. |

## Structure

```
src/
  data/profile.js        all site copy, one file
  components/
    Dock.jsx             bottom section nav + scroll progress
    Hero.jsx             name lockup, decode effect, stat row
    TracePlate.jsx       looping request-trace widget
    Projects.jsx         sticky-stacking project cards
    ProjectDiagram.jsx   hand-drawn SVG system diagram per project
    Capabilities.jsx     ruled skill matrix
    Education.jsx        degree plate + CGPA gauge + coursework grid
    Beyond.jsx           activities bento with animated widgets
    Contact.jsx          channel list + validated mail-composer form
```

The contact form does not post anywhere. It validates, then opens a pre-filled
draft in the visitor's own mail client via `mailto:`.

## Design notes

- Palette: bone paper `#eeeeea`, graphite text, a single pine accent `#1f6b57`.
  All body and metadata colours clear WCAG AA (4.5:1) against both the page and
  the raised plates.
- Type: Bricolage Grotesque (display), Outfit (body), JetBrains Mono (labels and
  numbers), loaded from Google Fonts.
- Motion respects `prefers-reduced-motion`: the decode effect, the request trace
  and the CSS animations all stand down when the visitor asks for less motion.
- Project artwork is generated SVG, not screenshots, so nothing goes stale.

## Deploying

Static output — `npm run build`, then serve `dist/`. Works as-is on Vercel,
Netlify, Cloudflare Pages or GitHub Pages (set `base` in `vite.config.js` if you
deploy to a repo subpath).

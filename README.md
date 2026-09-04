# yashraut.me

Source for my personal portfolio, live at [www.yashraut.me](https://www.yashraut.me).
Built with Astro and Tailwind CSS, deployed on Vercel. The whole site is
data-driven: updating it means editing `src/data/info.ts`, not components.

## Stack

- [Astro](https://astro.build) 6 (static output) + TypeScript
- Tailwind CSS via `@astrojs/tailwind`
- `@astrojs/sitemap` and `astro-robots-txt` (generated at build time)
- Bun for installs and scripts (`bun.lock` is committed); npm works too
- Node **24.x** — pinned in `package.json` `engines`. Astro 6 refuses to run on
  anything below 22.12, so this pin is also what tells Vercel which Node to build with

## Getting started

```bash
bun install
bun run dev       # http://localhost:4321
bun run build     # static site in dist/
bun run preview   # serve dist/ locally
```

## Pages

| Route       | Content                                                                                             |
| :---------- | :-------------------------------------------------------------------------------------------------- |
| `/`         | Hero + bio, experience timeline with tech-stack icons, skills grid, education, "Let's connect" CTA |
| `/work`     | Professional projects, featured personal projects, then "More Web Apps" and "Mobile Apps" grids     |
| `/projects` | Flat grid of all personal projects (legacy; not linked from the nav)                                |

## Editing content — `src/data/info.ts`

Everything on the site comes from the exported `info` object:

| Key                      | Rendered by                          | Notes                                                                                                                            |
| :----------------------- | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `name`, `about`          | Hero; home page `<meta description>` | Years of experience in `about` are computed from 2021                                                                            |
| `experience`             | Experience timeline                  | `techStack` names are matched case-insensitively against `skills` and shown as icons; names without a matching skill are skipped |
| `education`              | Education timeline                   | Same component as `experience`                                                                                                   |
| `skills`                 | Skills grid, experience icons        | `icon` is an SVG under `public/svg/`                                                                                             |
| `works`                  | Professional Projects on `/work`     | Full-width cards: `title`, `desc`, `role`, `link`, plus `thumbnail` and/or `video`. An empty `link` renders "Restricted access internal tool" |
| `personalWorks`          | Featured personal projects on `/work` | Same card and fields as `works`                                                                                                  |
| `projects`               | "More Web Apps" / "Mobile Apps" grids | `category` (`"web"` or `"mobile"`) picks the grid; `githubUrl` and `liveUrl` become the corner icons                             |
| `socialMedia`, `connect` | Footer; Connect section              | GitHub, LinkedIn, email; Calendly link and email for the CTA                                                                     |
| `baseUrl`                | Canonical and Open Graph URLs        |                                                                                                                                  |

### Video demos on work cards

Set `video` on a `works` or `personalWorks` item to show a demo instead of an image
(GitHub `user-attachments` URLs work). The card paints the frame at one second as a
backdrop behind a play button; nothing more is downloaded until someone presses play,
at which point native controls appear. `thumbnail` is optional — it becomes the poster
when present. With neither a video nor a thumbnail the card shows a placeholder panel.

### Images

Static images live in `public/assets/images/` (`work/`, `web/`, `mobile/`, `os/`) and are
referenced by absolute path, e.g. `/assets/images/work/truco.webp`.

## Project structure

```
public/               favicons, fonts, images, svg/ skill icons, scroll-animate.js
src/
├── components/
│   ├── general/      Navbar, Footer, MetaHead, Skills, Connect,
│   │                 WorkCard + WorkWrapper, ProjectCard + ProjectsWrapper
│   └── home/         Hero, Experience
├── data/info.ts      all site content
├── layouts/          Layout.astro
├── pages/            index.astro, work.astro, projects.astro
├── styles/           style.css (Tailwind layers + scroll-reveal), fonts.css, custom-styles.css
├── types/index.ts    IWork, IProject, IExperience, ...
└── utils/
```

Path aliases from `tsconfig.json`: `@components/*`, `@layouts/*`, `@data`, `@utils`, `@types`.

## Theming and motion

- Dark/light toggle in the navbar. Tailwind runs class-based dark mode keyed on the
  `data-theme` attribute (`darkMode: ["class", '[data-theme="dark"]']`).
- The accent colour is named `blue` in `tailwind.config.cjs` but is amber (`#FBB034`) —
  use `bg-blue` / `text-blue` for the accent.
- Scroll reveal: elements with `data-animate` (`fade-up`, `fade-right`, ...) start hidden
  and receive `.reveal-visible` from `public/scroll-animate.js` via an
  IntersectionObserver. `data-animate-delay` (ms) staggers siblings.

## Deployment

Vercel builds every push to `main`. It reads the Node version from `engines.node`,
installs with Bun (frozen lockfile, since `bun.lock` is present) and runs `astro build`.
The sitemap and `robots.txt` are produced during the build.

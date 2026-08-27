# Tabi Khan — Portfolio

Built with React + Vite + Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The output goes to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages, or an S3 + Nginx setup (fitting, given the theme).

## Where to edit content

- **Projects** — `src/data/projects.js`. Add a new project by pushing another object into the `projects` array. Each project supports `github`, `demo`, `category`, `featured`, and a `detail` object (problem/solution/features/architecture) used by the project modal.
- **Skills** — `src/data/skills.js`. Edit `skillGroups` to add/remove technologies, and toggle `strong: true` to visually emphasize one.
- **Stats** — same file, `stats` array (About section).
- **Deployment pipeline steps** — same file, `pipeline` array (Cloud & DevOps section).
- **Learning journey** — same file, `timeline` array. Add a new milestone as another object; set `current: true` on whichever one is in progress.
- **Contact / social links** — email, GitHub and LinkedIn URLs are set directly in `src/components/Hero.jsx`, `src/components/Contact.jsx`, and `src/components/Footer.jsx`. Update the placeholder email and LinkedIn `href="#"` with your real links.
- **Contact form** — `src/components/Contact.jsx` currently just shows a message on submit. Wire the `handleSubmit` function to Formspree, EmailJS, or your own backend to actually receive messages.

## Structure

```
src/
  data/           project, skill, pipeline & timeline data (edit here, not the components)
  components/     Navbar, Hero, About, Skills, Projects, ProjectCard, ProjectModal,
                  DevOpsSection, Timeline, GithubSection, Contact, Footer, Reveal
  App.jsx         composes all sections
  index.css       Tailwind v4 theme tokens (colors, fonts) + global styles
```

Colors and fonts are defined once as CSS variables in `src/index.css` under `@theme` — change them there to re-theme the whole site.

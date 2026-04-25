# ~/anarv vasavada

> *"A system you cannot trace is a system you do not own."*

Personal portfolio of **Anarv Vasavada** — Intelligence Architect, Founder, Researcher.  
Built with a Mac terminal aesthetic. Powered by React, Vite, and Z.E.R.O. (Zoned Execution & Resource Orchestrator).

**Live:** [anarv.dev](https://anarvvasavada.vercel.app) &nbsp;·&nbsp; **Built with:** React + Vite + MDX

---

## What this is

Not a template. Not a theme. A ground-up portfolio built to communicate a specific positioning:

> I operate where intelligence meets control. I don't follow it. I redesign it.

The terminal aesthetic is intentional — the portfolio itself is a system, not a brochure.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + Vite 6 |
| Routing | React Router DOM |
| Styling | Inline styles (zero Tailwind, zero CSS-in-JS libs) |
| Blog | MDX via `@mdx-js/rollup` |
| AI | Groq API — `llama-3.3-70b-versatile` |
| Font | JetBrains Mono |
| Deploy | Vercel |

---

## Features

- **Mac terminal UI** — fully interactive terminal on the home page
- **Z.E.R.O.** — embedded AI intelligence system (Zoned Execution & Resource Orchestrator) powered by Groq
- **MDX blog** — write in markdown, renders in terminal aesthetic automatically
- **Hover previews** — project cards with live preview on hover
- **`~/systems`** — projects with clickable redirects to live URLs and GitHub
- **`~/signal`** — writing with category filtering
- **`~/stack`** — actual tools, no affiliate links
- **`~/now`** — what I'm actually doing right now
- **`~/connect`** — contact with "open to" positioning
- **Resume download** — type `download resume` in terminal
- **Route-aware** — `~/home`, `~/systems`, `~/signal`, `~/stack`, `~/now`, `~/connect`

---

## Terminal commands

Type these inside the terminal on the home page:

```
whoami              Identity & positioning
ls                  List filesystem
cat about.md        About me
ls systems/         Systems I've built
cat stack.json      Tech stack
ls writing/         Writing & signal
cat philosophy.md   Operating principles
ssh contact         Reach out
resume              View resume
download resume     Download resume PDF
git log             Career timeline
neofetch            System info
hey zero, <q>       Ask Z.E.R.O. anything
clear               Clear screen
```

Unknown commands route to Z.E.R.O. automatically.

---

## Local setup

```bash
git clone https://github.com/Anarv2104/Anarv-Vasavada.git
cd Anarv-Vasavada
npm install
```

Create `.env` in the project root:

```
VITE_GROQ_API_KEY=your_groq_api_key_here
```

Get a free Groq API key at [console.groq.com](https://console.groq.com).

```bash
npm run dev
```

Open [localhost:5173](http://localhost:5173).

---

## Project structure

```
src/
├── components/
│   ├── Terminal.jsx          # Interactive terminal
│   ├── Nav.jsx               # Navigation
│   ├── Avatar.jsx            # Profile photo
│   ├── PostLayout.jsx        # Blog post wrapper
│   ├── mdxComponents.jsx     # MDX → terminal styled components
│   └── terminal/
│       ├── Line.jsx          # Terminal output renderer
│       ├── Prompt.jsx        # Prompt lines (user + Z.E.R.O.)
│       └── ThinkingDots.jsx  # Z.E.R.O. thinking animation
├── pages/
│   ├── Home.jsx              # ~/home
│   ├── Work.jsx              # ~/systems
│   ├── Writing.jsx           # ~/signal
│   ├── Uses.jsx              # ~/stack
│   ├── Now.jsx               # ~/now
│   ├── Contact.jsx           # ~/connect
│   └── posts/                # Blog post pages
├── content/
│   ├── data.js               # All content — projects, articles, socials
│   └── posts/                # MDX blog posts
└── lib/
    └── theme.js              # Color system
```

---

## Adding a blog post

1. Create `src/content/posts/your-post-slug.mdx`:

```mdx
export const meta = {
  title: "Your post title",
  category: "Systems",
  date: "Apr 2026",
  readTime: "5 min",
  excerpt: "One sentence that makes someone want to read this.",
}

Your content here. Write in markdown.
```

2. Create `src/pages/posts/YourPost.jsx`:

```jsx
import PostLayout from '../../components/PostLayout'
import { mdxComponents } from '../../components/mdxComponents.jsx'
import Content, { meta } from '../../content/posts/your-post-slug.mdx'

export default function YourPost() {
  return (
    <PostLayout meta={meta}>
      <Content components={mdxComponents} />
    </PostLayout>
  )
}
```

3. Add route in `App.jsx`:

```jsx
<Route path="/signal/your-post-slug" element={<YourPost />} />
```

4. Add entry in `data.js` ARTICLES array.

---

## Content updates

All content lives in `src/content/data.js`. Edit that file to update:

- Personal info and socials
- Projects (PROJECTS + MISC_PROJECTS)
- Articles list
- Stack / uses
- Z.E.R.O. AI context

---

## Deploying

```bash
npm install -g vercel
vercel
```

Add `VITE_GROQ_API_KEY` in Vercel dashboard → Project → Settings → Environment Variables.

---

## Built by

**Anarv Vasavada** — Intelligence Architect  
[x.com/AnarvVasavada](https://x.com/AnarvVasavada) &nbsp;·&nbsp;
[linkedin.com/in/anarvvasavada](https://linkedin.com/in/anarvvasavada) &nbsp;·&nbsp;
[github.com/Anarv2104](https://github.com/Anarv2104)

---

*Intelligence without infrastructure is not a product. It is a prototype.*

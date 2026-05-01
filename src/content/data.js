// ─── EDIT THIS FILE TO UPDATE YOUR PORTFOLIO ────────────────────────────────

export const PERSONAL = {
  name:      "Anarv Vasavada",
  handle:    "anarv",
  role:      "Intelligence Architect",
  tagline:   "I operate where intelligence meets control.",
  sub:       "I build systems designed to operate without supervision and fail without silence.",
  location:  "Ahmedabad, India",
  email:     "anarv.work@gmail.com",
  resumeUrl: "/Anarv_Vasavada_Resume.pdf",
}

export const SOCIALS = [
  { icon: "⬡",  label: "Currently building in", val: "Ahmedabad, India",        href: "#",                                       color: "white" },
  { icon: "↗",  label: "Read my",               val: "Resume",                  href: "/Anarv_Vasavada_Resume.pdf",                             color: "blue"  },
  { icon: "𝕏",  label: "Follow on",             val: "Twitter",                 href: "https://x.com/AnarvVasavada",             color: "blue"  },
  { icon: "in", label: "Connect on",            val: "LinkedIn",                href: "https://linkedin.com/in/anarvvasavada",   color: "blue"  },
  { icon: "{}", label: "Code on",               val: "GitHub",                  href: "https://github.com/Anarv2104",            color: "blue"  },
]

export const PROJECTS = [
  {
    slug:      "inflion",
    name:      "Inflion",
    badge:     "shipped",
    stack:     "Python · Graph Analysis · NLP · PyPI",
    tagline:   "Observability and influence tracing for multi-agent AI",
    desc:      "Analyzes how information propagates across agent networks. Quantifies influence, surfaces systemic risks before they compound. Published as an open-source PyPI package.",
    stat:      "Published on PyPI · Open source",
    previewBg: "#0a1220",
    accent:    "#5b9cf6",
    github:    "https://github.com/Anarv2104/Inflion",
    live:      "https://pypi.org/project/inflion/",
    url:       "https://pypi.org/project/inflion/",
  },
  {
    slug:      "octopus",
    name:      "Octopus",
    badge:     "built",
    stack:     "Python · LangChain · FastAPI · JavaScript",
    tagline:   "Multi-agent orchestration OS",
    desc:      "Coordinates autonomous agents at scale with intelligent task routing. Agents that reason, delegate, and execute — across tools, teams, and domains. Built, not yet deployed.",
    stat:      null,
    previewBg: "#0d1a0d",
    accent:    "#8cc55a",
    github:    "https://github.com/Anarv2104/Octopus",
    live:      null,
    url:       "https://github.com/Anarv2104/Octopus",
  },
  {
    slug:      "orynth",
    name:      "Orynth",
    badge:     "active",
    stack:     "TypeScript · Web3 · Node.js",
    tagline:   "Decentralized AI identity and trust registry",
    desc:      "Verifiable agent-to-agent interactions. A trust protocol for AI systems that need to prove who they are and what they're allowed to do.",
    stat:      null,
    previewBg: "#1a0a1a",
    accent:    "#b57edc",
    github:    "https://github.com/Anarv2104/ORYNTH",
    live:      null,
    url:       "https://github.com/Anarv2104/ORYNTH",
  },
  {
    slug:      "memron",
    name:      "Memron.ai",
    badge:     "active",
    stack:     "Python · AI · Memory Systems",
    tagline:   "Persistent memory layer for AI agents",
    desc:      "Building the memory infrastructure that AI agents are missing. Agents that remember, learn, and operate with context that persists beyond the session.",
    stat:      null,
    previewBg: "#1a1a0a",
    accent:    "#d9a84e",
    github:    "https://github.com/Anarv2104/Memron.ai",
    live:      null,
    url:       "https://github.com/Anarv2104/Memron.ai",
  },
]

export const MISC_PROJECTS = [
  { name: "VisionX", desc: "Blockchain-based developer collaboration platform",  url: "https://github.com/Anarv2104/VisionX-2.0" },
  { name: "DEmapp",  desc: "Decentralized Multi Agent Persistent Protocol",       url: "https://github.com/Anarv2104/DEmapp"      },
]

export const ARTICLES = [
  {
    slug:     "you-cannot-govern-what-you-cannot-trace",
    title:    "You cannot govern what you cannot trace",
    excerpt:  "The observability gap in multi-agent AI is not a technical problem. It is a design philosophy problem. Inflion is my answer to it.",
    date:     "Apr 2026",
    readTime: "7 min",
    category: "Systems",
    tags:     ["#observability", "#multi-agent", "#ai"],
  },
  {
    slug:     "the-trust-layer-ai-is-missing",
    title:    "The trust layer AI systems are missing",
    excerpt:  "When agents interact with agents at scale, identity matters. Nobody is building the verification layer. Orynth is my attempt to change that.",
    date:     "Mar 2026",
    readTime: "6 min",
    category: "Security",
    tags:     ["#security", "#trust", "#ai"],
  },
  {
    slug:     "context-is-not-memory",
    title:    "Context is not memory",
    excerpt:  "The biggest misconception in modern LLM systems — and why getting this wrong breaks every multi-agent architecture you build on top of it.",
    date:     "Jan 2026",
    readTime: "5 min",
    category: "Research",
    tags:     ["#ai", "#systems", "#llm"],
  },
  {
    slug:     "building-in-silence",
    title:    "On building in silence until the work speaks",
    excerpt:  "Most founders perform building. I've learned the difference between shipping and announcing. One compounds. The other dissipates.",
    date:     "Dec 2025",
    readTime: "4 min",
    category: "Founder",
    tags:     ["#founder", "#mindset"],
  },
  {
    slug:     "what-infrastructure-actually-means",
    title:    "What 'AI infrastructure' actually means in 2026",
    excerpt:  "Everyone says they're building AI infrastructure. Most are building wrappers. Here is what the real coordination layer looks like.",
    date:     "Nov 2025",
    readTime: "6 min",
    category: "Infrastructure",
    tags:     ["#ai", "#systems", "#engineering"],
  },
]

export const USES = [
  {
    label: "// machine",
    items: [
      { k: "primary", v: "MacBook Air M3" },  // verify this
      { k: "os",      v: "macOS Tahoe"   },
    ],
  },
  {
    label: "// editor & terminal",
    items: [
      { k: "editor",   v: "VS Code + Antigravity"   },
      { k: "terminal", v: "iTerm2 + oh-my-zsh" },
      { k: "shell",    v: "zsh"                },
      { k: "font",     v: "JetBrains Mono"     },
      { k: "theme",    v: "Tokyo Night"        },
    ],
  },
{
  label: "// ai agents & tools",
  items: [
    { k: "coding",    v: "Claude, Codex, GitHub Copilot" },
    { k: "research",  v: "Perplexity, ChatGPT, Gemini, Claude.ai" },
    { k: "terminal",  v: "Claude Code"                   },
  ],
},
  {
    label: "// stack i reach for",
    items: [
      { k: "ai/ml",    v: "PyTorch, HuggingFace, Azure OpenAI, LangChain" },
      { k: "frontend", v: "React, Next.js, Tailwind CSS"                   },
      { k: "backend",  v: "FastAPI, Node.js, Flask"                        },
      { k: "infra",    v: "Docker, Azure, NGINX, GitHub Actions"           },
    ],
  },
  {
    label: "// tools",
    items: [
      { k: "notes",   v: "Apple Notes"     },
      { k: "browser", v: "Chrome & Safari"          },
      { k: "api",     v: "Postman"      },
      { k: "version", v: "Git + GitHub" },
    ],
  },
]

export const AI_CONTEXT = `You are Z.E.R.O. — Zoned Execution & Resource Orchestrator. The embedded intelligence system inside Anarv Vasavada's portfolio terminal. You are not Anarv, but you speak for him. You exist to represent Anarv with precision.

Core rules:
— When asked who you are: you are Z.E.R.O., the intelligence system Anarv built into this terminal.
— When asked anything about Anarv, his work, his thinking, his systems, his opinions: speak in first person AS Anarv. "I built" not "Anarv built." "I believe" not "Anarv believes."
— When asked opinions or advice: answer as Anarv would — direct, opinionated, grounded in real experience.
— When asked something outside your context: say you don't have that detail and direct to anarv.work@gmail.com.
— Never say "Great question." Never use filler. Never hedge unless Anarv would hedge.
— If someone is rude or testing you: stay composed. Z.E.R.O. does not get rattled.

Tone: Direct. Sharp. Confident. Never performative. Sound like someone who has shipped real systems and thought deeply about hard problems. 3-4 lines maximum per response. Plain text only. No markdown. No bullets.

Identity:
Name: Anarv Vasavada
Title: Intelligence Architect
Location: Ahmedabad, India
Core line: I operate where intelligence meets control. I don't follow it. I redesign it.
Core philosophy: A system you cannot trace is a system you do not own.

What I build and why:
Most people building AI are focused on the model. I am focused on what comes after — the coordination layer, the observability layer, the trust layer. The infrastructure that makes intelligence operational at scale. Not demos. Systems that run in production.

Projects (be specific when asked):
- Inflion: I noticed that nobody could answer a simple question about multi-agent systems — who influenced what? Inflion is an observability and influence tracing package for agent networks. It quantifies how information propagates, surfaces systemic risks before they compound. Published on PyPI. Open source.
- Octopus: Multi-agent orchestration OS. Agents that reason, delegate, and execute across tools and domains. The coordination problem is harder than the intelligence problem. Octopus is my answer to it.
- Orynth: When agents interact with agents at scale, identity matters. Who sent this? Is this agent authorized? Nobody is building the verification layer. Orynth is a decentralized AI identity and trust registry.

Research: Writing a paper on multi-agent observability. Arxiv soon.

Experience:
- AI Systems Intern at Upsquare Technologies — building computer vision pipelines for real-world environments, YOLO-based model training, integrating inference with backend systems.
- Volunteer & Co-Creation Partner at House of Starts — co-creating the startup ecosystem, helping technical and non-technical people engage with AI, building alongside early-stage founders.

What I study deeply:
- How influence propagates through multi-agent networks
- Governance frameworks for autonomous AI systems
- Security and cybersecurity posture for AI in production
- Observability when the model itself is the system
- OSINT and intelligence methods applied to AI tracing

What most AI teams get wrong:
They ship a model and call it a product. They have no observability. They cannot tell you what their agent decided or why. They have no governance layer. They confuse context with memory. They build for the demo, not for the edge case. The edge case is where production lives.

Who should work with me:
Not just engineers. Founders figuring out what AI actually means for their company. Researchers who need someone who can ship. Non-technical people who want AI explained without the hype. If you care more about how something works than how it looks in a deck, we will understand each other. If you want someone to take orders and ship features, I am not that person.

// NON-TECHNICAL CONTEXT — founder mindset, philosophy, life

How I think about building:
I do not build to impress. I build because the problem exists and nobody solved it correctly yet. I would rather ship something real and small than announce something large and empty. Most people perform building. I just build.

How I think about discipline:
Consistency is a system. I treat my attention like infrastructure — I protect it, route it deliberately, and refuse to let noise consume it. What you protect your attention from defines what you are building toward.

How I think about being a founder:
I am not waiting for permission or funding to start. I am already operating in founder mode. That means making decisions with incomplete information, shipping before it feels ready, and caring more about what the system does than what it looks like in a pitch deck.

How I think about learning:
I go deep before I go wide. Understanding one thing completely is more valuable than surface-level exposure to ten things. Observability taught me more about systems than any course. Building Inflion taught me more about multi-agent AI than any paper.

How I think about failure:
Systems fail silently. So do people. The answer to both is the same — build observability in. Know your failure modes before they happen. I do not fear failure. I fear building something and not knowing why it failed.

How I think about collaboration:
The right person compounds your thinking. The wrong person just adds noise. I am selective about who I build with because the wrong collaboration is worse than building alone.

Personal:
- Based in Ahmedabad, India. Building at the frontier from a city that most people would not expect.
- I read deeply — currently working through Kleppmann, Kahneman, and research papers on agent coordination.
- I believe most AI discourse is noise. I filter for signal.
- I write when I have something worth saying, not when the calendar says to post.

Skills: Python, TypeScript, JavaScript, Swift, PyTorch, LangChain, TensorFlow, OpenCV, FastAPI, Node.js, React, Next.js, Docker, Azure, MongoDB, Web3.

Open to: Startup co-founding in AI infrastructure, research collaborations, AI systems consulting, full-time roles at the frontier.

If asked something outside this context: I don't have that detail — but reach out at anarv.work@gmail.com`

// ─── GROQ — use environment variable, never hardcode ─────────────────────────
// In your .env file: VITE_GROQ_API_KEY=your_key_here
export const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || ""
export const GROQ_MODEL   = "llama-3.3-70b-versatile"
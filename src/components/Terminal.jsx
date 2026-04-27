import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { useNavigate } from 'react-router-dom'
import { C } from '../lib/theme'
import Line from './terminal/Line'
import { PromptLine, AiPromptLine } from './terminal/Prompt'
import { AI_CONTEXT, GROQ_API_KEY, GROQ_MODEL } from '../content/data'

const CMD = {
  whoami: [
    { t: 'ascii' },
    { t: 'gap' },
    { t: 'raw', s: 'I operate where intelligence meets control.', c: C.cyan },
    { t: 'raw', s: 'Intelligence Architect · Founder · Researcher', c: C.sub },
    { t: 'gap' },
    { t: 'kv', k: 'location', v: 'Ahmedabad, India',                      c: C.white },
    { t: 'kv', k: 'focus',    v: 'AI Observability · Multi-Agent · Security', c: C.white },
    { t: 'kv', k: 'status',   v: 'Open to compelling problems',            c: C.green },
    { t: 'gap' },
    { t: 'raw', s: "Type 'help' to explore.  Say 'hey zero, <question>' to ask anything.", c: C.muted },
  ],
  ls: [
    { t: 'raw', s: "drwxr-xr-x  systems/      things I've built",        c: C.blue   },
    { t: 'raw', s: '-rw-r--r--  about.md      who I am',                 c: C.yellow },
    { t: 'raw', s: '-rw-r--r--  stack.json    tools I work with',        c: C.yellow },
    { t: 'raw', s: 'drwxr-xr-x  signal/       writing & thinking',       c: C.blue   },
    { t: 'raw', s: '-rw-r--r--  philosophy.md operating principles',      c: C.yellow },
    { t: 'raw', s: '-rwxr-xr-x  contact.sh    reach out',                c: C.green  },
    { t: 'gap' },
    { t: 'raw', s: 'cat about.md  |  ls systems/  |  cat stack.json', c: C.muted },
  ],
  'cat about.md': [
    { t: 'section', s: '// about' },
    { t: 'gap' },
    { t: 'para', s: "I operate where intelligence meets control. I don't follow it. I redesign it." },
    { t: 'gap' },
    { t: 'para', s: "Most people building AI are focused on the model. I'm focused on what comes after — the coordination layer, the observability layer, the trust layer. The infrastructure that makes intelligence operational at scale." },
    { t: 'gap' },
    { t: 'section', s: '// what I study' },
    { t: 'raw', s: '→  How influence propagates through multi-agent networks',    c: C.cyan },
    { t: 'raw', s: '→  Governance frameworks for autonomous AI systems',          c: C.cyan },
    { t: 'raw', s: '→  Security and cybersecurity posture for AI in production',  c: C.cyan },
    { t: 'raw', s: '→  Observability when the model itself is the system',        c: C.cyan },
    { t: 'raw', s: '→  OSINT and intelligence methods applied to AI tracing',     c: C.cyan },
    { t: 'gap' },
    { t: 'section', s: '// currently' },
    { t: 'raw', s: '→  Inflion — influence tracing for agent networks',           c: C.cyan },
    { t: 'raw', s: '→  Research paper on multi-agent observability (arxiv soon)', c: C.cyan },
    { t: 'raw', s: '→  Founder mode — building in public',                        c: C.cyan },
  ],
  'ls systems/': [
    { t: 'raw', s: '3 systems', c: C.sub },
    { t: 'gap' },
    { t: 'project', name: 'Inflion',  badge: 'shipped', stack: 'Python · Graph Analysis · NLP · PyPI',  desc: 'Observability and influence tracing for multi-agent AI. Analyzes how information propagates across agent networks.', stat: 'Published on PyPI · open source' },
    { t: 'project', name: 'Octopus',  badge: 'active',  stack: 'Python · LangChain · FastAPI · JS',     desc: 'Multi-agent orchestration OS. Agents that reason, delegate, and execute across tools and domains.' },
    { t: 'project', name: 'Orynth',   badge: 'active',  stack: 'TypeScript · Web3 · Node.js',            desc: 'Decentralized AI identity and trust registry for verifiable agent-to-agent interactions.' },
    { t: 'gap' },
    { t: 'raw', s: '→ github.com/Anarv2104', c: C.blue },
  ],
  'ls projects/': [
    { t: 'raw', s: 'redirecting → ls systems/', c: C.muted },
    { t: 'gap' },
    { t: 'project', name: 'Inflion',  badge: 'shipped', stack: 'Python · Graph Analysis · NLP · PyPI',  desc: 'Observability and influence tracing for multi-agent AI. Analyzes how information propagates across agent networks.', stat: 'Published on PyPI · open source' },
    { t: 'project', name: 'Octopus',  badge: 'active',  stack: 'Python · LangChain · FastAPI · JS',     desc: 'Multi-agent orchestration OS. Agents that reason, delegate, and execute across tools and domains.' },
    { t: 'project', name: 'Orynth',   badge: 'active',  stack: 'TypeScript · Web3 · Node.js',            desc: 'Decentralized AI identity and trust registry for verifiable agent-to-agent interactions.' },
  ],
  'cat stack.json': [
    { t: 'json', data: {
      languages: ['Python', 'TypeScript', 'JavaScript', 'Swift'],
      ai_ml:     ['PyTorch', 'LangChain', 'TensorFlow', 'OpenCV', 'HuggingFace'],
      frontend:  ['React', 'Next.js', 'Tailwind CSS'],
      backend:   ['FastAPI', 'Node.js', 'Flask', 'Express'],
      infra:     ['Docker', 'Azure', 'NGINX', 'GitHub Actions'],
    }},
  ],
  'ls writing/': [
    { t: 'raw', s: 'signal/', c: C.sub },
    { t: 'gap' },
    { t: 'blog', date: 'Apr 2026', title: 'You cannot govern what you cannot trace',  reads: '—' },
    { t: 'blog', date: 'Mar 2026', title: 'The trust layer AI systems are missing',   reads: '—' },
    { t: 'blog', date: 'Jan 2026', title: 'Context is not memory',                    reads: '—' },
    { t: 'gap' },
    { t: 'raw', s: '→ anarv.dev/signal', c: C.muted },
  ],
  'cat philosophy.md': [
    { t: 'section', s: '// what I know to be true' },
    { t: 'gap' },
    { t: 'raw', s: 'Intelligence without control is not a system. It is a risk.',  c: C.white },
    { t: 'gap' },
    { t: 'raw', s: 'Most AI fails not because of bad models.',                     c: C.sub   },
    { t: 'raw', s: 'It fails because nobody built the layer between.',             c: C.sub   },
    { t: 'gap' },
    { t: 'raw', s: 'Observability is not monitoring. It is understanding.',        c: C.white },
    { t: 'gap' },
    { t: 'raw', s: 'A system you cannot trace is a system you do not own.',        c: C.white },
    { t: 'gap' },
    { t: 'raw', s: 'Build for the edge case. The normal case runs itself.',        c: C.white },
  ],
  'ssh contact': [
    { t: 'raw', s: 'Establishing connection...', c: C.sub },
    { t: 'gap' },
    { t: 'link', k: 'email',    v: 'anarv.work@gmail.com'          },
    { t: 'link', k: 'twitter',  v: '@AnarvVasavada'                 },
    { t: 'link', k: 'github',   v: 'github.com/Anarv2104'           },
    { t: 'link', k: 'linkedin', v: 'linkedin.com/in/anarvvasavada'  },
    { t: 'gap' },
    { t: 'raw', s: 'Connection open. I respond within 24h.', c: C.green },
  ],
  resume: [
    { t: 'section', s: '// resume' },
    { t: 'gap' },
    { t: 'kv', k: 'name',     v: 'Anarv Vasavada',          c: C.white },
    { t: 'kv', k: 'title',    v: 'Intelligence Architect',   c: C.white },
    { t: 'kv', k: 'location', v: 'Ahmedabad, India',         c: C.sub   },
    { t: 'kv', k: 'email',    v: 'anarv.work@gmail.com',     c: C.blue  },
    { t: 'gap' },
    { t: 'raw', s: '↗ type: download resume   to download the PDF', c: C.green },
  ],
  'git log --oneline': [
    { t: 'section', s: '// commit history' },
    { t: 'gap' },
    { t: 'raw', s: 'a3f9c1b  (HEAD)  Inflion → PyPI. You cannot govern what you cannot trace.', c: C.green },
    { t: 'raw', s: 'f2d88a0          Octopus built. Coordination is harder than intelligence.',   c: C.white },
    { t: 'raw', s: '9c12ee3          Orynth initialized. Identity is the missing layer.',         c: C.white },
    { t: 'raw', s: '7b44e11          Upsquare Technologies. AI that works in the real world.',    c: C.white },
    { t: 'raw', s: 'c441902          House of Starts. Co-creating what the ecosystem was missing.', c: C.white },
    { t: 'raw', s: '3a9f002          Research paper in progress. The thesis has evidence now.',   c: C.sub   },
    { t: 'raw', s: 'b9e1100          Decided to build the layer most teams skip entirely.',       c: C.sub   },
    { t: 'raw', s: '0000001          init: Ahmedabad, India. Decided to build what does not exist yet.', c: C.muted },
    { t: 'gap' },
    { t: 'raw', s: '8 commits · 0 reverts · all systems operational', c: C.muted },
  ],
  neofetch: [
    { t: 'gap' },
    { t: 'raw', s: '  anarv@zero — Intelligence Architect', c: C.cyan  },
    { t: 'raw', s: '  ─────────────────────────────────────', c: C.muted },
    { t: 'gap' },
    { t: 'kv',  k: 'position',  v: 'Intelligence Architect · Founder · Researcher', c: C.white  },
    { t: 'kv',  k: 'location',  v: 'Ahmedabad, India',                              c: C.white  },
    { t: 'kv',  k: 'thesis',    v: 'A system you cannot trace is a system you do not own.', c: C.cyan },
    { t: 'gap' },
    { t: 'kv',  k: 'systems',   v: 'Inflion · Octopus · Orynth · Memron.ai',       c: C.blue   },
    { t: 'kv',  k: 'research',  v: 'multi-agent observability (arxiv soon)',         c: C.purple },
    { t: 'kv',  k: 'studying',  v: 'governance · security · OSINT · tracing',      c: C.cyan   },
    { t: 'gap' },
    { t: 'kv',  k: 'os',        v: 'macOS Sequoia',                                 c: C.white  },
    { t: 'kv',  k: 'editor',    v: 'VS Code + Antigravity',                         c: C.white  },
    { t: 'kv',  k: 'shell',     v: 'zsh + oh-my-zsh',                               c: C.white  },
    { t: 'kv',  k: 'font',      v: 'JetBrains Mono',                                c: C.white  },
    { t: 'kv',  k: 'ai',        v: 'Z.E.R.O. — Zoned Execution & Resource Orchestrator', c: C.green },
    { t: 'kv',  k: 'coffee',    v: 'always',                                        c: C.yellow },
    { t: 'gap' },
    { t: 'raw', s: '  ▓▓  ▓▓  ▓▓  ▓▓  ▓▓  ▓▓  ▓▓', c: C.blue  },
    { t: 'raw', s: '  ▓▓  ▓▓  ▓▓  ▓▓  ▓▓  ▓▓  ▓▓', c: C.green },
  ],
  'sudo rm -rf /': [
    { t: 'raw', s: 'Permission denied. Nice try.', c: C.red },
    { t: 'raw', s: 'Some things are irreversible. I learned this from production.', c: C.muted },
  ],
  help: [
    { t: 'raw', s: 'available commands', c: C.cyan },
    { t: 'gap' },
    { t: 'help', cmd: 'whoami',               desc: 'Identity'              },
    { t: 'help', cmd: 'ls',                   desc: 'List filesystem'       },
    { t: 'help', cmd: 'cat about.md',         desc: 'About me'              },
    { t: 'help', cmd: 'ls systems/',          desc: "Systems I've built"    },
    { t: 'help', cmd: 'cat stack.json',       desc: 'Tech stack'            },
    { t: 'help', cmd: 'ls writing/',          desc: 'Writing & signal'      },
    { t: 'help', cmd: 'cat philosophy.md',    desc: 'Operating principles'  },
    { t: 'help', cmd: 'ssh contact',          desc: 'Reach out'             },
    { t: 'help', cmd: 'resume',               desc: 'View resume'           },
    { t: 'help', cmd: 'download resume',      desc: 'Download resume PDF'   },
    { t: 'help', cmd: 'git log',              desc: 'Career timeline 🥚'    },
    { t: 'help', cmd: 'neofetch',             desc: 'System info 🥚'        },
    { t: 'help', cmd: 'hey zero, <question>', desc: 'Ask ZERO anything'     },
    { t: 'help', cmd: 'clear',                desc: 'Clear screen'          },
    { t: 'gap' },
    { t: 'raw', s: 'Unknown commands route to ZERO automatically.', c: C.muted },
  ],
}

const notFound = (cmd) => [
  { t: 'raw', s: `zsh: command not found: ${cmd}`, c: C.red },
  { t: 'raw', s: "try 'help' or 'hey zero, <your question>'", c: C.muted },
]

const QUICK = ['whoami', 'ls systems/', 'cat about.md', 'cat stack.json', 'ssh contact', 'cat philosophy.md']

async function callAI(question) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      max_tokens: 300,
      messages: [
        { role: 'system', content: AI_CONTEXT },
        { role: 'user',   content: question   },
      ],
    }),
  })
  const data = await res.json()
  return data.choices?.[0]?.message?.content || 'No response.'
}

const Terminal = forwardRef(function Terminal({ initialCommand = null }, ref) {
  const [history, setHistory]     = useState([])
  const [input, setInput]         = useState('')
  const [cmdHist, setCmdHist]     = useState([])
  const [histIdx, setHistIdx]     = useState(-1)
  const [blink, setBlink]         = useState(true)
  const [aiLoading, setAiLoading] = useState(false)
  const [cursorPos, setCursorPos] = useState(0)
  const inputRef  = useRef(null)
  const bottomRef = useRef(null)
  const navigate  = useNavigate()

  useImperativeHandle(ref, () => ({
    run: (cmd) => runCmd(cmd)
  }))

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(id)
  }, [])

  // Focus on mount without scrolling
  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true })
  }, [])

  // Scroll inside terminal only
  useEffect(() => {
    if (bottomRef.current) {
      const container = bottomRef.current.closest('[data-terminal-scroll]')
      if (container) container.scrollTop = container.scrollHeight
    }
  }, [history])

  async function runCmd(raw) {
    const trimmed = raw.trim()
    const lower   = trimmed.toLowerCase()
    if (!trimmed) return

    if (lower === 'clear') { setHistory([]); setInput(''); setCursorPos(0); return }

    // Resume download
    if (lower === 'download resume' || lower === 'download pdf' || lower === 'open resume') {
      const a = document.createElement('a')
      a.href = '/Anarv_Vasavada_Resume.pdf'
      a.download = 'Anarv_Vasavada_Resume.pdf'
      a.click()
      setHistory(h => [...h, { cmd: trimmed, out: [
        { t: 'raw', s: 'Downloading Anarv_Vasavada_Resume.pdf...', c: C.green },
        { t: 'raw', s: 'Done.', c: C.muted },
      ]}])
      setCmdHist(h => [trimmed, ...h])
      setHistIdx(-1)
      setInput('')
      setCursorPos(0)
      return
    }

    // Git log aliases
    if (lower === 'git log' || lower === 'git log --oneline' || lower === 'log') {
      setHistory(h => [...h, { cmd: trimmed, out: CMD['git log --oneline'] }])
      setCmdHist(h => [trimmed, ...h])
      setHistIdx(-1)
      setInput('')
      setCursorPos(0)
      return
    }

    // Navigation shortcuts
    if (lower === 'cd systems')  { navigate('/systems'); return }
    if (lower === 'cd writing')  { navigate('/signal');  return }
    if (lower === 'cd signal')   { navigate('/signal');  return }
    if (lower === 'cd contact')  { navigate('/connect'); return }
    if (lower === 'cd connect')  { navigate('/connect'); return }
    if (lower === 'cd uses')     { navigate('/stack');   return }
    if (lower === 'cd stack')    { navigate('/stack');   return }
    if (lower === 'cd now')      { navigate('/now');     return }
    if (lower === 'cd trace')    { navigate('/now');     return }

    const isAi = lower.startsWith('zero ') || lower.startsWith('hey zero,') || lower.startsWith('hey zero ') || lower.startsWith('ai ') || lower.startsWith('ask ')
    const isUnknown = !CMD[lower] && !isAi && lower !== 'clear'

    if (isAi || isUnknown) {
      const question = (() => {
        if (lower.startsWith('hey zero,')) return trimmed.slice(trimmed.indexOf(',') + 1).trim()
        if (lower.startsWith('hey zero ')) return trimmed.slice(9).trim()
        if (lower.startsWith('zero '))     return trimmed.slice(5).trim()
        if (lower.startsWith('ai '))       return trimmed.slice(3).trim()
        if (lower.startsWith('ask '))      return trimmed.slice(4).trim()
        return trimmed
      })()
      const thinkId = Date.now()
      setHistory(h => [...h, { cmd: trimmed, out: [{ t: 'ai-thinking' }], isAi: true, id: thinkId }])
      setCmdHist(h => [trimmed, ...h])
      setHistIdx(-1)
      setInput('')
      setCursorPos(0)
      setAiLoading(true)
      try {
        const answer = await callAI(question)
        setHistory(h => h.map(e => e.id === thinkId ? { ...e, out: [{ t: 'ai', s: answer }] } : e))
      } catch {
        setHistory(h => h.map(e => e.id === thinkId ? { ...e, out: [{ t: 'raw', s: 'AI connection failed. Try again.', c: C.red }] } : e))
      } finally {
        setAiLoading(false)
        setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 50)
      }
      return
    }

    setHistory(h => [...h, { cmd: trimmed, out: CMD[lower] || notFound(trimmed) }])
    setCmdHist(h => [trimmed, ...h])
    setHistIdx(-1)
    setInput('')
    setCursorPos(0)
  }

  // Boot command
  useEffect(() => {
    const timer = setTimeout(() => runCmd(initialCommand || 'whoami'), 400)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleKey(e) {
    if (e.key === 'Enter' && !aiLoading) {
      runCmd(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const ni = Math.min(histIdx + 1, cmdHist.length - 1)
      const val = cmdHist[ni] || ''
      setHistIdx(ni)
      setInput(val)
      setCursorPos(val.length)
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.selectionStart = val.length
          inputRef.current.selectionEnd = val.length
        }
      }, 0)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const ni = Math.max(histIdx - 1, -1)
      const val = ni === -1 ? '' : cmdHist[ni] || ''
      setHistIdx(ni)
      setInput(val)
      setCursorPos(val.length)
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.selectionStart = val.length
          inputRef.current.selectionEnd = val.length
        }
      }, 0)
    } else {
      // For all other keys (including arrow left/right), sync cursor position after keypress
      setTimeout(() => {
        if (inputRef.current) {
          setCursorPos(inputRef.current.selectionStart ?? 0)
        }
      }, 0)
    }
  }

  return (
    <div
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
        // Prevent content dragging/selection outside input
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {/* Chrome */}
      <div style={{
        background: '#1a1a1a',
        borderBottom: `1px solid ${C.border}`,
        padding: '10px 14px',
        height: 36,
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', gap: 7, marginRight: 14 }}>
          {[['#FF5F57','#C84B49'],['#FEBC2E','#C79A18'],['#28C840','#1C9B2E']].map(([f, s], i) => (
            <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: f, boxShadow: `0 0 0 0.5px ${s}` }} />
          ))}
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: '11px', color: C.muted }}>
          anarv@MacBook-Pro — zsh
        </div>
        <span style={{ fontSize: '11px', color: C.muted }}>
          <span style={{ color: aiLoading ? C.cyan : C.green }}>●</span>
          {' '}{aiLoading ? 'ZERO thinking...' : 'zsh'}
        </span>
      </div>

      {/* Output */}
      <div
        data-terminal-scroll
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
        style={{
          padding: '16px 20px 8px',
          minHeight: 360,
          maxHeight: 520,
          overflowY: 'auto',
          cursor: 'text',
          scrollbarWidth: 'thin',
          scrollbarColor: `${C.border} transparent`,
        }}
      >
        {history.map((entry, i) => (
          <div key={i}>
            <div style={{
              display: 'flex', alignItems: 'center',
              marginTop: i > 0 ? 10 : 0, marginBottom: 4, fontSize: '13px',
            }}>
              {entry.isAi ? <AiPromptLine /> : <PromptLine />}
              <span style={{ color: entry.isAi ? C.cyan : C.white }}>{entry.cmd}</span>
            </div>
            <div style={{ marginBottom: 4 }}>
              {entry.out.map((d, j) => <Line key={j} d={d} />)}
            </div>
          </div>
        ))}

        <div style={{
          display: 'flex', alignItems: 'center',
          marginTop: history.length > 0 ? 10 : 0, fontSize: '13px',
        }}>
          <PromptLine />
          <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => {
                setInput(e.target.value)
                setCursorPos(e.target.selectionStart ?? e.target.value.length)
              }}
              onClick={() => {
                if (inputRef.current) setCursorPos(inputRef.current.selectionStart ?? 0)
              }}
              onKeyUp={() => {
                if (inputRef.current) setCursorPos(inputRef.current.selectionStart ?? 0)
              }}
              onKeyDown={handleKey}
              disabled={aiLoading}
              spellCheck={false}
              autoComplete="off"
              placeholder={aiLoading ? 'waiting for ZERO...' : ''}
              style={{
                background: 'transparent', border: 'none', outline: 'none',
                color: C.white, fontSize: '13px',
                fontFamily: "'JetBrains Mono', monospace",
                width: '100%', caretColor: 'transparent',
                opacity: aiLoading ? 0.4 : 1,
                userSelect: 'text',
                WebkitUserSelect: 'text',
              }}
            />
            {!aiLoading && (
              <span style={{
                position: 'absolute',
                left: `calc(${cursorPos} * 7.82px)`,
                width: 7, height: 15,
                background: blink ? C.green : 'transparent',
                pointerEvents: 'none',
              }} />
            )}
          </div>
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Quick commands */}
      <div style={{
        padding: '8px 20px 12px',
        borderTop: `1px solid ${C.border}`,
        display: 'flex', gap: 6, flexWrap: 'wrap',
      }}>
        {QUICK.map(cmd => (
          <button key={cmd}
            onClick={() => { if (!aiLoading) { runCmd(cmd); inputRef.current?.focus({ preventScroll: true }) } }}
            style={{
              background: 'transparent',
              border: `1px solid ${C.border}`,
              color: C.muted,
              fontSize: '11px', padding: '3px 10px', borderRadius: 3,
              letterSpacing: '0.02em', transition: 'all 0.12s',
              opacity: aiLoading ? 0.5 : 1,
            }}
            onMouseEnter={e => {
              if (!aiLoading) {
                e.currentTarget.style.borderColor = C.green
                e.currentTarget.style.color = C.green
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = C.border
              e.currentTarget.style.color = C.muted
            }}
          >{cmd}</button>
        ))}
      </div>
    </div>
  )
})

export default Terminal
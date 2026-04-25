import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { C } from '../lib/theme'
import { ARTICLES } from '../content/data'

export default function Writing() {
  const [activeTag,  setActiveTag]  = useState('All')
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const navigate = useNavigate()

  const tags = ['All', 'Systems', 'Infrastructure', 'Security', 'Research', 'Founder', 'Perspectives']

  const filtered = activeTag === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeTag)

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 0' }}>

      <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, marginBottom: 6 }}>
          <span style={{ color: C.green }}>➜</span>{'  '}
          <span style={{ color: C.purple }}>~</span>
          <span style={{ color: C.muted }}> $ ls signal/</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 700, color: C.white, marginBottom: 5 }}>
          signal/
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: C.sub }}>
          Signal over noise. I publish when the thinking is done, not when it starts.
        </div>
      </div>

      <div style={{ display: 'flex', gap: 6, marginBottom: 24, flexWrap: 'wrap' }}>
        {tags.map(t => (
          <button
            key={t}
            onClick={() => setActiveTag(t)}
            onMouseEnter={e => {
              if (activeTag !== t) {
                e.currentTarget.style.borderColor = C.green
                e.currentTarget.style.color = C.green
              }
            }}
            onMouseLeave={e => {
              if (activeTag !== t) {
                e.currentTarget.style.borderColor = C.border
                e.currentTarget.style.color = C.muted
              }
            }}
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '11px',
              background:  activeTag === t ? '#1a1a1f'  : 'transparent',
              border:     `1px solid ${activeTag === t ? C.borderHi : C.border}`,
              color:       activeTag === t ? C.white    : C.muted,
              padding: '3px 12px', borderRadius: 4, transition: 'all 0.12s',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: C.muted, padding: '20px 0' }}>
          No articles in this category yet.
        </div>
      )}

      {filtered.map((a, i) => (
        <div
          key={i}
          onClick={() => navigate(`/signal/${a.slug}`)}
          onMouseEnter={() => setHoveredIdx(i)}
          onMouseLeave={() => setHoveredIdx(null)}
          style={{ padding: '20px 0', borderBottom: `1px solid ${C.border}`, cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.purple }}>
              {a.category}
            </span>
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px', fontWeight: 600,
            color: hoveredIdx === i ? C.cyan : C.white,
            transition: 'color 0.12s', marginBottom: 5,
          }}>
            {a.title}
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px', color: C.sub,
            maxWidth: 500, lineHeight: 1.7, marginBottom: 8,
          }}>
            {a.excerpt}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted }}>
            {a.date} · {a.readTime} read
          </div>
        </div>
      ))}

      <Philosophy />
    </div>
  )
}

function Philosophy() {
  return (
    <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${C.border}`, marginBottom: 30 }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
        // on writing
      </div>
      <blockquote style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', color: C.sub, lineHeight: 1.9, maxWidth: 540, margin: 0, fontWeight: 300, borderLeft: `2px solid ${C.green}`, paddingLeft: 20 }}>
        "Clarity is a technical skill.<br />
        If you cannot explain it in one sentence,<br />
        you have not finished{' '}
        <span style={{ color: C.white, fontWeight: 500 }}>understanding it</span>."
      </blockquote>
    </div>
  )
}
import { C } from '../lib/theme'

const NOW = {
  lastUpdated: "April 23, 2026",
  location: "Ahmedabad, India",
  status: "Building",

  building: [
    "Multimodal AI pipeline for real-time document analysis",
    "This portfolio — shipped iteratively, not when perfect",
    "Writing about what I learn in public",
  ],

  thinking: [
    "Why AI systems fail silently in production",
    "The governance layer most AI teams never build",
    "What observability means when the model is the system",
    "Security posture for systems that learn from live data",
  ],

  reading: [
    "Designing Data-Intensive Applications — Kleppmann",
    "The Pragmatic Programmer — Hunt & Thomas",
    "Attention and Effort — Kahneman",
  ],

  not_doing: [
    "Chasing hype cycles",
    "Building demos that never ship",
    "Optimizing for impressive over functional",
  ],
}

export default function Now() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 0' }}>

      {/* Header */}
      <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, marginBottom: 6 }}>
          <span style={{ color: C.green }}>➜</span>{'  '}
          <span style={{ color: C.purple }}>~</span>
          <span style={{ color: C.muted }}> $ cat now.md</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 700, color: C.white, marginBottom: 5 }}>
          now.md
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: C.sub }}>
          What I'm actually doing right now. Updated monthly.
        </div>
      </div>

      {/* Meta */}
      <div style={{ marginBottom: 32, display: 'flex', gap: 24 }}>
        {[
          { k: 'last updated', v: NOW.lastUpdated },
          { k: 'location',     v: NOW.location     },
          { k: 'status',       v: NOW.status,  vc: C.green },
        ].map((item, i) => (
          <div key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>
            <span style={{ color: C.muted }}>{item.k}: </span>
            <span style={{ color: item.vc || C.white }}>{item.v}</span>
          </div>
        ))}
      </div>

      {/* Sections */}
      {[
        { label: '// currently building',     items: NOW.building,   color: C.cyan   },
        { label: '// thinking deeply about',  items: NOW.thinking,   color: C.cyan   },
        { label: '// reading',                items: NOW.reading,    color: C.yellow },
        { label: '// not doing',              items: NOW.not_doing,  color: C.muted  },
      ].map((section, i) => (
        <div key={i} style={{ marginBottom: 32 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px', color: C.cyan,
            fontWeight: 600, letterSpacing: '0.05em',
            marginBottom: 12,
          }}>
            {section.label}
          </div>
          {section.items.map((item, j) => (
            <div key={j} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px', color: C.white,
              lineHeight: 1.9,
              display: 'flex', alignItems: 'baseline', gap: 10,
            }}>
              <span style={{ color: C.green, flexShrink: 0 }}>→</span>
              <span style={{ color: section.color === C.muted ? C.sub : C.white }}>{item}</span>
            </div>
          ))}
        </div>
      ))}

      {/* Inspired by note */}
      <div style={{
        marginTop: 40, paddingTop: 20,
        borderTop: `1px solid ${C.border}`,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '11px', color: C.muted,
      }}>
        Inspired by{' '}
        <a href="https://sive.rs/now" style={{ color: C.blue }}>Derek Sivers' /now movement</a>.
        This page reflects current reality, not aspirations.
      </div>

      <Philosophy />
    </div>
  )
}

function Philosophy() {
  return (
    <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${C.border}`, marginBottom: 30 }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
        // on time
      </div>
      <blockquote style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', color: C.sub, lineHeight: 1.9, maxWidth: 540, margin: 0, fontWeight: 300, borderLeft: `2px solid ${C.green}`, paddingLeft: 20 }}>
        "What you protect your attention from<br />
        defines what you are{' '}
        <span style={{ color: C.white, fontWeight: 500 }}>building toward</span>."
      </blockquote>
    </div>
  )
}
import { C } from '../lib/theme'
import { USES } from '../content/data'

export default function Uses() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 0' }}>

      {/* Header */}
      <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, marginBottom: 6 }}>
          <span style={{ color: C.green }}>➜</span>{'  '}
          <span style={{ color: C.purple }}>~</span>
          <span style={{ color: C.muted }}> $ cat stack.md</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 700, color: C.white, marginBottom: 5 }}
          className="page-title">
          stack.md
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: C.sub }}
          className="page-subtitle">
          The stack behind the systems I build. Chosen for speed, control, and long-term scale.
        </div>
      </div>

      {/* Stack sections */}
      {USES.map((section, i) => (
        <div key={i} style={{ marginBottom: 28 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px', color: C.cyan,
            fontWeight: 600, letterSpacing: '0.05em', marginBottom: 10,
          }}>
            {section.label}
          </div>
          {section.items.map((item, j) => (
            <div key={j} style={{
              display: 'flex',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px', lineHeight: 1.9,
              flexWrap: 'wrap',
              gap: 4,
            }}
              className="stack-row"
            >
              <span style={{ color: C.muted, minWidth: 130, flexShrink: 0 }}
                className="stack-key">
                {item.k}
              </span>
              <span style={{ color: C.white, flex: 1, minWidth: 0 }}>
                {item.v}
              </span>
            </div>
          ))}
        </div>
      ))}

      <Philosophy />
    </div>
  )
}

function Philosophy() {
  return (
    <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${C.border}`, marginBottom: 30 }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '11px', color: C.muted,
        letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12,
      }}>
        // on tools
      </div>
      <blockquote className="philosophy-quote" style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '15px', color: C.sub,
        lineHeight: 1.9, maxWidth: 540,
        margin: 0, fontWeight: 300,
        borderLeft: `2px solid ${C.green}`, paddingLeft: 20,
      }}>
        "The tool should disappear.<br />
        Only the{' '}
        <span style={{ color: C.white, fontWeight: 500 }}>thinking</span>{' '}
        should remain."
      </blockquote>
    </div>
  )
}
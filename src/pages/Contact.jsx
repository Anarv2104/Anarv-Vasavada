import { C } from '../lib/theme'

const LINKS = [
  { k: 'email',    v: 'anarv.work@gmail.com',         href: 'mailto:anarv.work@gmail.com'            },
  { k: 'twitter',  v: '@AnarvVasavada',                href: 'https://x.com/AnarvVasavada'            },
  { k: 'github',   v: 'github.com/Anarv2104',          href: 'https://github.com/Anarv2104'           },
  { k: 'linkedin', v: 'linkedin.com/in/anarvvasavada', href: 'https://linkedin.com/in/anarvvasavada'  },
]

export default function Contact() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 0' }}>

      {/* Header */}
      <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, marginBottom: 6 }}>
          <span style={{ color: C.green }}>➜</span>{'  '}
          <span style={{ color: C.purple }}>~</span>
          <span style={{ color: C.muted }}> $ ssh connect.sh</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 700, color: C.white, marginBottom: 8 }}>
          connect.sh
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: C.sub, maxWidth: 480, lineHeight: 1.9 }}>
          I work with people building systems that matter.<br />
          Not demos. Not hype. Operational intelligence.
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: C.muted, marginTop: 8 }}>
          Response time: within 24h.
        </div>
      </div>

      {/* Links */}
      <div style={{ marginBottom: 44 }}>
        {LINKS.map((l, i) => (
          <div key={i} style={{
            display: 'flex',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px', lineHeight: 2.2,
          }}>
            <span style={{ color: C.muted, minWidth: 100 }}>{l.k}</span>
            <a href={l.href} style={{
              color: C.blue,
              textDecoration: 'none',
              borderBottom: `1px solid ${C.border}`,
              transition: 'color 0.12s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = C.cyan}
              onMouseLeave={e => e.currentTarget.style.color = C.blue}
            >{l.v}</a>
          </div>
        ))}
      </div>

      {/* Open to */}
      <div style={{ marginBottom: 40 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', color: C.cyan,
          fontWeight: 600, letterSpacing: '0.05em', marginBottom: 12,
        }}>// open to</div>
        {[
          'Startup co-founding in AI infrastructure',
          'Research collaborations (multi-agent, observability, security, governance)',
          'AI systems consulting and architecture',
          'Full-time roles at the frontier',
        ].map((item, i) => (
          <div key={i} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px', color: C.white, lineHeight: 1.9,
            display: 'flex', gap: 10,
          }}>
            <span style={{ color: C.green, flexShrink: 0 }}>→</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Schedule call block — repositioned */}
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 8, overflow: 'hidden',
      }}>
        <div style={{
          background: '#1a1a1a',
          borderBottom: `1px solid ${C.border}`,
          padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          {[['#FF5F57','#C84B49'],['#FEBC2E','#C79A18'],['#28C840','#1C9B2E']].map(([f,s],i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: f, boxShadow: `0 0 0 0.5px ${s}` }} />
          ))}
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, marginLeft: 6 }}>
            ~/Book a ZERO Session →
          </span>
        </div>
        <div style={{ padding: '16px 20px 20px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', marginBottom: 8 }}>
            <span style={{ color: C.green }}>anarv</span>
            <span style={{ color: C.muted }}>@zero:~$ </span>
            <span style={{ color: C.white }}>init session --strategic --30min</span>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: C.sub, marginBottom: 16, lineHeight: 1.8 }}>
            {'>'} got something worth building or breaking through?<br />
            {'>'} let's think through it together...
          </div>
          <a href="https://cal.com/anarv" style={{
            display: 'inline-block',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '12px',
            background: C.green, color: '#0c0c0c', fontWeight: 600,
            padding: '9px 22px', borderRadius: 5, textDecoration: 'none',
          }}>
            Request a session →
          </a>
        </div>
      </div>

      <Philosophy />
    </div>
  )
}

function Philosophy() {
  return (
    <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${C.border}`, marginBottom: 30 }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
        // on connection
      </div>
      <blockquote style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '15px', color: C.sub, lineHeight: 1.9,
        maxWidth: 540, margin: 0, fontWeight: 300,
        borderLeft: `2px solid ${C.green}`, paddingLeft: 20,
      }}>
        "The right collaboration<br />
        compounds faster than{' '}
        <span style={{ color: C.white, fontWeight: 500 }}>any system</span>."
      </blockquote>
    </div>
  )
}
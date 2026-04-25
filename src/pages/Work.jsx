import { useState } from 'react'
import { C } from '../lib/theme'
import { PROJECTS, MISC_PROJECTS } from '../content/data'

function HoverPreview({ project, pos }) {
  if (!project) return null
  return (
    <div style={{ position: 'fixed', left: pos.x + 20, top: pos.y - 80, zIndex: 9999, pointerEvents: 'none' }}>
      <div style={{
        width: 260, background: project.previewBg,
        border: `1px solid ${C.borderHi}`, borderRadius: 8,
        boxShadow: '0 24px 60px rgba(0,0,0,0.85)',
        overflow: 'hidden', fontFamily: "'JetBrains Mono', monospace",
      }}>
        <div style={{ background: 'rgba(0,0,0,0.5)', borderBottom: `1px solid ${C.border}`, padding: '7px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
          {[['#FF5F57','#C84B49'],['#FEBC2E','#C79A18'],['#28C840','#1C9B2E']].map(([f,s],i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: f, boxShadow: `0 0 0 0.5px ${s}` }} />
          ))}
          <span style={{ fontSize: '9px', color: C.sub, marginLeft: 4 }}>{project.name}</span>
        </div>
        <div style={{ padding: '12px 14px 14px' }}>
          <div style={{ fontSize: '9px', color: C.muted, marginBottom: 6 }}>
            <span style={{ color: C.green }}>➜</span>{'  '}
            <span style={{ color: C.purple }}>~/{project.slug}</span>
            <span style={{ color: C.muted }}> $ cat README</span>
          </div>
          <div style={{ fontSize: '11px', color: project.accent, fontWeight: 600, marginBottom: 3 }}>{project.name}</div>
          <div style={{ fontSize: '10px', color: C.sub, marginBottom: 8, lineHeight: 1.5 }}>{project.tagline}</div>
          {project.stat && (
            <span style={{ fontSize: '9px', color: project.accent, border: `1px solid ${project.accent}40`, padding: '1px 6px', borderRadius: 2 }}>↗ {project.stat}</span>
          )}
        </div>
      </div>
    </div>
  )
}

const EXPERIENCE = [
  {
    role:   'Artificial Intelligence Intern',
    org:    'Upsquare Technologies India',
    period: 'Jan 2026 — April 2026',
    desc:   'Building and debugging computer vision pipelines for real-world environments. YOLO-based model training, fine-tuning, and evaluation. Integrating AI inference workflows with backend services and web-based pipelines.',
  },
  {
    role:   'Co-creation Partner',
    org:    'House of Starts',
    period: '2026 — present',
    desc:   'Co-creating the startup ecosystem and community. Helping people — technical and non-technical — understand and engage with AI. Building alongside early-stage founders, not above them.',
  },
]

export default function Work() {
  const [hovered, setHovered] = useState(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 0' }}>
      <HoverPreview project={hovered} pos={pos} />

      {/* Page header */}
      <div style={{ marginBottom: 36, paddingBottom: 20, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, marginBottom: 6 }}>
          <span style={{ color: C.green }}>➜</span>{'  '}
          <span style={{ color: C.purple }}>~</span>
          <span style={{ color: C.muted }}> $ ls -la systems/</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', fontWeight: 700, color: C.white, marginBottom: 5 }}>
          systems/
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: C.sub }}>
          Infrastructure I've built. Systems that operate, not demos that impress. Hover to preview.
        </div>
      </div>

      {/* Experience */}
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, letterSpacing: '0.06em', marginBottom: 16 }}>
        // experience
      </div>
      {EXPERIENCE.map((e, i) => (
        <div key={i} style={{ marginBottom: 22, paddingLeft: 12, borderLeft: `1.5px solid ${C.borderHi}` }}>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 3,
            fontFamily: "'JetBrains Mono', monospace", flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: C.white }}>{e.role}</span>
            <span style={{ fontSize: '12px', color: C.cyan }}>@ {e.org}</span>
            <span style={{ fontSize: '10px', color: C.muted, marginLeft: 'auto' }}>{e.period}</span>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: C.sub, lineHeight: 1.7 }}>{e.desc}</div>
        </div>
      ))}

      {/* Shipped systems */}
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, letterSpacing: '0.06em', marginTop: 40, marginBottom: 8 }}>
        // shipped systems
      </div>
      {PROJECTS.map((p) => (
        <div key={p.slug}
          onClick={() => window.open(p.url, '_blank')}
          onMouseEnter={e => { setHovered(p); setPos({ x: e.clientX, y: e.clientY }) }}
          onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}
          onMouseLeave={() => setHovered(null)}
          style={{ padding: '16px 0', borderBottom: `1px solid ${C.border}`, cursor: 'pointer', transition: 'padding-left 0.1s' }}
          onMouseOver={e => e.currentTarget.style.paddingLeft = '8px'}
          onMouseOut={e => e.currentTarget.style.paddingLeft = '0'}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>
            <span style={{ fontSize: '10px', color: C.muted }}>{'{}'}</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: C.white }}>{p.name}</span>
            <span style={{
              fontSize: '9px', padding: '1px 7px', borderRadius: 3,
              border: `1px solid ${p.badge === 'shipped' ? C.green : p.badge === 'built' ? C.blue : C.yellow}`,
              color: p.badge === 'shipped' ? C.green : p.badge === 'built' ? C.blue : C.yellow,
            }}>{p.badge}</span>
            <span style={{ fontSize: '10px', color: C.muted, marginLeft: 'auto' }}>↗</span>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: C.sub, marginBottom: 6 }}>{p.desc}</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {p.stack.split(' · ').map((s, i) => (
              <span key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, border: `1px solid ${C.border}`, padding: '2px 8px', borderRadius: 3 }}>{s}</span>
            ))}
          </div>
          {p.stat && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.green, marginTop: 4 }}>↗ {p.stat}</div>}
        </div>
      ))}

      {/* Experiments */}
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, letterSpacing: '0.06em', marginTop: 40, marginBottom: 12 }}>
        // experiments &amp; tools
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 8 }}>
        {MISC_PROJECTS.map((m, i) => (
          <a key={i} href={m.url} target="_blank" rel="noreferrer" style={{
            border: `1px dashed ${C.border}`, borderRadius: 6, padding: '14px 16px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            transition: 'all 0.12s', textDecoration: 'none',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.borderHi; e.currentTarget.style.background = '#1a1a1f' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = 'transparent' }}
          >
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: C.white, marginBottom: 2, fontSize: '13px' }}>{m.name}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted }}>{m.desc}</div>
            </div>
            <span style={{ color: C.muted, fontSize: '12px' }}>↗</span>
          </a>
        ))}
      </div>

      <Philosophy />
    </div>
  )
}

function Philosophy() {
  return (
    <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${C.border}`, marginBottom: 30 }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
        // on building
      </div>
      <blockquote style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', color: C.sub, lineHeight: 1.9, maxWidth: 540, margin: 0, fontWeight: 300, borderLeft: `2px solid ${C.green}`, paddingLeft: 20 }}>
        "Intelligence without infrastructure<br />
        is not a product. It is a{' '}
        <span style={{ color: C.white, fontWeight: 500 }}>prototype</span>."
      </blockquote>
    </div>
  )
}
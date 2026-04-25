import { C } from '../../lib/theme'
import ThinkingDots from './ThinkingDots'

const ASCII = [
  "    _    _   _    _    ____  __      __",
  "   / \\  | \\ | |  / \\  |  _ \\ \\ \\    / /",
  "  / _ \\ |  \\| | / _ \\ | |_) | \\ \\  / / ",
  " / ___ \\| |\\  |/ ___ \\|  _ <   \\ \\/ /  ",
  "/_/   \\_\\_| \\_/_/   \\_\\_| \\_\\   \\__/   ",
]

const base = { fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', lineHeight: '1.8' }

export default function Line({ d }) {
  if (!d) return null

  if (d.t === 'gap')   return <div style={{ height: 5 }} />

if (d.t === 'ascii') return (
  <div style={{ ...base, fontSize: '11.5px', lineHeight: '1.4', color: C.blue, marginBottom: 8, whiteSpace: 'pre' }}>
    {ASCII.map((l, i) => <div key={i}>{l}</div>)}
  </div>
)

  if (d.t === 'raw') return (
    <div style={{ ...base, color: d.c || C.white, whiteSpace: 'pre-wrap' }}>{d.s}</div>
  )

  if (d.t === 'para') return (
    <div style={{ ...base, color: C.white, maxWidth: 560, lineHeight: 1.9 }}>{d.s}</div>
  )

  if (d.t === 'section') return (
    <div style={{ ...base, color: C.cyan, fontWeight: 600, letterSpacing: '0.05em', marginTop: 8 }}>{d.s}</div>
  )

  if (d.t === 'bullet') return (
    <div style={{ ...base, color: C.white }}>
      <span style={{ color: C.green, marginRight: 10 }}>▸</span>{d.s}
    </div>
  )

  if (d.t === 'kv') return (
    <div style={{ ...base, display: 'flex' }}>
      <span style={{ color: C.muted, minWidth: 90 }}>{d.k}</span>
      <span style={{ color: d.c || C.white }}>{d.v}</span>
    </div>
  )

  if (d.t === 'project') return (
    <div style={{ marginBottom: 16, paddingLeft: 12, borderLeft: `1.5px solid ${C.borderHi}` }}>
      <div style={{ ...base, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ color: C.cyan, fontWeight: 600 }}>{d.name}</span>
        <span style={{
          fontSize: '10px', padding: '1px 7px', borderRadius: 3,
          border: `1px solid ${d.badge === 'shipped' ? C.green : C.yellow}`,
          color: d.badge === 'shipped' ? C.green : C.yellow,
        }}>{d.badge}</span>
      </div>
      <div style={{ ...base, color: C.muted, fontSize: '11px' }}>{d.stack}</div>
      <div style={{ ...base, color: C.white, maxWidth: 520, marginTop: 2 }}>{d.desc}</div>
      {d.stat && <div style={{ ...base, color: C.green, fontSize: '11px', marginTop: 2 }}>↗ {d.stat}</div>}
    </div>
  )

  if (d.t === 'json') {
    const entries = Object.entries(d.data)
    return (
      <div style={{ ...base }}>
        <div style={{ color: C.muted }}>{'{'}</div>
        {entries.map(([k, vs], i) => (
          <div key={i} style={{ paddingLeft: 18 }}>
            <span style={{ color: C.purple }}>"{k}"</span>
            <span style={{ color: C.muted }}>: [</span>
            {vs.map((v, j) => (
              <span key={j}>
                <span style={{ color: C.green }}>"{v}"</span>
                {j < vs.length - 1 && <span style={{ color: C.muted }}>, </span>}
              </span>
            ))}
            <span style={{ color: C.muted }}>]{i < entries.length - 1 ? ',' : ''}</span>
          </div>
        ))}
        <div style={{ color: C.muted }}>{'}'}</div>
      </div>
    )
  }

  if (d.t === 'blog') return (
    <div style={{ ...base, display: 'flex', gap: 16 }}>
      <span style={{ color: C.muted, fontSize: '11px', minWidth: 72 }}>{d.date}</span>
      <span style={{ color: C.blue }}>{d.title}</span>
      <span style={{ color: C.muted, fontSize: '11px' }}>{d.reads} reads</span>
    </div>
  )

  if (d.t === 'help') return (
    <div style={{ ...base, display: 'flex' }}>
      <span style={{ color: C.yellow, minWidth: 160 }}>{d.cmd}</span>
      <span style={{ color: C.muted }}>{d.desc}</span>
    </div>
  )

  if (d.t === 'link') return (
    <div style={{ ...base, display: 'flex' }}>
      <span style={{ color: C.muted, minWidth: 90 }}>{d.k}</span>
      <span style={{ color: C.blue }}>{d.v}</span>
    </div>
  )

  if (d.t === 'ai') return (
    <div style={{ ...base, color: C.white, maxWidth: 560, lineHeight: 1.9, borderLeft: `1.5px solid ${C.cyan}`, paddingLeft: 12 }}>
      {d.s}
    </div>
  )

  if (d.t === 'ai-thinking') return (
    <div style={{ ...base, color: C.muted }}><ThinkingDots /></div>
  )

  return null
}
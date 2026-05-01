import { C } from '../lib/theme'
import { useNavigate } from 'react-router-dom'

export default function PostLayout({ meta, children }) {
  const navigate = useNavigate()

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 0' }}>

      {/* Back button */}
      <button
        onClick={() => navigate('/signal')}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', color: C.muted,
          background: 'transparent', border: 'none',
          cursor: 'pointer', marginBottom: 32,
          display: 'flex', alignItems: 'center', gap: 6,
          padding: 0,
        }}
        onMouseEnter={e => e.currentTarget.style.color = C.green}
        onMouseLeave={e => e.currentTarget.style.color = C.muted}
      >
        ← signal/
      </button>

      {/* Post header */}
      <div style={{ marginBottom: 32, paddingBottom: 24, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.purple, marginBottom: 10 }}>
          {meta?.category}
        </div>
        <h1 className="post-title" style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '24px', fontWeight: 700,
          color: C.white, lineHeight: 1.4,
          marginBottom: 12, letterSpacing: '0.01em',
        }}>
          {meta?.title}
        </h1>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.muted }}>
          {meta?.date} · {meta?.readTime} read
        </div>
      </div>

      {/* Post body */}
      <div className="post-body" style={{ paddingBottom: 60 }}>
        {children}
      </div>

    </div>
  )
}
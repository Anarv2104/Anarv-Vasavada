import { C } from '../lib/theme'

export default function Footer() {
  return (
    <div style={{
      maxWidth: 760,
      margin: '0 auto',
      padding: '0 24px 40px',
    }}>
      <div style={{
        paddingTop: 20,
        borderTop: `1px solid ${C.border}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
        fontSize: '11px',
        color: C.muted,
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        <span>© 2026 Anarv Vasavada</span>
        <span>Ahmedabad, India · UTF-8</span>
      </div>
    </div>
  )
}
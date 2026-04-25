import { useRef } from 'react'
import { C } from '../lib/theme'
import { SOCIALS } from '../content/data'
import Avatar from '../components/Avatar'
import Terminal from '../components/Terminal'

const AI_PROMPTS = [
  'hey zero, what gap does inflion fill?',
  'hey zero, what do most AI teams get wrong?',
  'hey zero, what has anarv actually built?',
  'hey zero, who should work with anarv?',
]

export default function Home() {
  const terminalRef = useRef(null)

  const fireCmd = (cmd) => {
    terminalRef.current?.run(cmd)
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 0' }}>

      {/* Profile card */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 36 }}>
        <Avatar />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', color: C.sub, marginBottom: 5 }}>$whoami</div>
          <div style={{ fontSize: '22px', fontWeight: 700, color: C.white, letterSpacing: '0.01em' }}>
            Anarv Vasavada
          </div>
          <div style={{ fontSize: '13px', color: C.sub, marginTop: 3 }}>
            Intelligence Architect
          </div>
          <div style={{ fontSize: '12px', color: C.muted, marginTop: 8, maxWidth: 440, lineHeight: 1.8 }}>
            I operate where intelligence meets control.<br />
            I don't follow it. I redesign it.
          </div>
        </div>
      </div>

      {/* Socials */}
      <div style={{ marginBottom: 40, display: 'flex', flexDirection: 'column', gap: 7 }}>
        {SOCIALS.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '13px' }}>
            <span style={{ color: C.muted, width: 22, textAlign: 'center', fontSize: '11px' }}>{s.icon}</span>
            <span style={{ color: C.sub }}>{s.label}</span>
            <a href={s.href} style={{
              color: s.color === 'blue' ? C.blue : C.white,
              textDecoration: 'none',
              borderBottom: `1px solid ${C.border}`,
            }}>{s.val}</a>
          </div>
        ))}
      </div>

      {/* ZERO hint bar */}
      <div style={{
        marginBottom: 20,
        padding: '12px 16px',
        background: 'rgba(78,201,212,0.04)',
        border: '1px solid rgba(78,201,212,0.12)',
        borderRadius: 6,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ color: C.cyan, fontSize: '11px' }}>⬡</span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', color: C.cyan,
            letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
          }}>
            ZERO
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', color: C.muted,
            letterSpacing: '0.04em',
          }}>
            — intelligence system. ask anything.
          </span>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {AI_PROMPTS.map((q, i) => (
            <button key={i} onClick={() => fireCmd(q)} style={{
              background: 'transparent',
              border: `1px solid ${C.border}`,
              color: C.muted,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              padding: '4px 10px', borderRadius: 3,
              transition: 'all 0.12s',
              letterSpacing: '0.01em',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.cyan; e.currentTarget.style.color = C.cyan }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted }}
            >{q}</button>
          ))}
        </div>
      </div>

      {/* Terminal */}
      <Terminal ref={terminalRef} />

      {/* Philosophy */}
      <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${C.border}`, marginBottom: 30 }}>
        <div style={{ fontSize: '11px', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
          // operating principle
        </div>
        <blockquote style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '15px', color: C.sub, lineHeight: 1.9,
          maxWidth: 540, margin: 0, fontWeight: 300,
          borderLeft: `2px solid ${C.green}`, paddingLeft: 20,
        }}>
          "A system you cannot trace<br />
          is a system you do not{' '}
          <span style={{ color: C.white, fontWeight: 500 }}>own</span>."
        </blockquote>
      </div>

    </div>
  )
}
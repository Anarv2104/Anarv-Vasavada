import { Link, useLocation } from 'react-router-dom'
import { C } from '../lib/theme'

const LINKS = [
  { label: '~/home',    path: '/'        },
  { label: '~/systems', path: '/systems' },
  { label: '~/signal',  path: '/signal'  },
  { label: '~/stack',   path: '/stack'   },
  { label: '~/now',     path: '/now'     },
  { label: '~/connect', path: '/connect' },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <nav style={{
      borderBottom: `1px solid ${C.border}`,
      padding: '0 32px',
      height: 52,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      background: 'rgba(12,12,12,0.94)',
      backdropFilter: 'blur(12px)',
      zIndex: 100,
    }}>
      <Link to="/" style={{
        fontSize: '14px', fontWeight: 600,
        color: C.white, letterSpacing: '0.04em',
      }}>
        <span style={{ color: C.green }}>~/</span>anarv
      </Link>

      <div style={{ display: 'flex', gap: 4 }}>
        {LINKS.map(({ label, path }) => {
          const active = pathname === path
          return (
            <Link key={path} to={path} style={{
              color: active ? C.white : C.sub,
              fontSize: '12px',
              padding: '6px 12px',
              borderBottom: `1.5px solid ${active ? C.green : 'transparent'}`,
              letterSpacing: '0.02em',
              transition: 'color 0.15s',
              display: 'inline-block',
            }}>
              {label}
            </Link>
          )
        })}
      </div>

      <span style={{ fontSize: '11px', color: C.muted }}>
        <span style={{ color: C.green }}>●</span> zsh
      </span>
    </nav>
  )
}
import { useState, useEffect, useRef } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Close on route change
  

  // Close on scroll
  useEffect(() => {
    if (!menuOpen) return
    const handleScroll = () => setMenuOpen(false)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen])

  // Close on outside tap
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [menuOpen])

  return (
    <>
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
        {/* Logo */}
        <Link to="/" style={{
          fontSize: '14px', fontWeight: 600,
          color: C.white, letterSpacing: '0.04em',
          flexShrink: 0,
        }}>
          <span style={{ color: C.green }}>~/</span>anarv
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 4 }} className="desktop-nav">
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

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: '11px', color: C.muted }} className="desktop-only">
            <span style={{ color: C.green }}>●</span> zsh
          </span>
          <button
            className="mobile-only"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'transparent',
              border: `1px solid ${menuOpen ? C.green : C.border}`,
              color: menuOpen ? C.green : C.muted,
              padding: '4px 8px',
              borderRadius: 4,
              fontSize: '14px',
              lineHeight: 1,
              display: 'none',
              transition: 'all 0.12s',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          style={{
            position: 'fixed',
            top: 52,
            left: 0,
            right: 0,
            background: 'rgba(12,12,12,0.98)',
            backdropFilter: 'blur(12px)',
            borderBottom: `1px solid ${C.border}`,
            zIndex: 99,
            padding: '12px 0',
          }}
        >
          {LINKS.map(({ label, path }) => {
            const active = pathname === path
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '10px 24px',
                  fontSize: '13px',
                  color: active ? C.white : C.sub,
                  borderLeft: `2px solid ${active ? C.green : 'transparent'}`,
                  letterSpacing: '0.02em',
                  transition: 'all 0.12s',
                }}
              >
                {label}
              </Link>
            )
          })}
          <div style={{
            padding: '10px 24px',
            fontSize: '11px',
            color: C.muted,
            borderTop: `1px solid ${C.border}`,
            marginTop: 8,
          }}>
            <span style={{ color: C.green }}>●</span> zsh — Z.E.R.O. online
          </div>
        </div>
      )}
    </>
  )
}
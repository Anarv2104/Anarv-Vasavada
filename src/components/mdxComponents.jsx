import { C } from '../lib/theme'

export const mdxComponents = {
  h1: (props) => (
    <h1 style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '22px', fontWeight: 700,
      color: C.white, marginBottom: 8, marginTop: 32,
      letterSpacing: '0.01em',
    }} {...props} />
  ),
  h2: (props) => (
    <h2 style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '16px', fontWeight: 600,
      color: C.cyan, marginBottom: 8, marginTop: 28,
      letterSpacing: '0.05em',
    }} {...props} />
  ),
  h3: (props) => (
    <h3 style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '14px', fontWeight: 600,
      color: C.white, marginBottom: 6, marginTop: 20,
    }} {...props} />
  ),
  p: (props) => (
    <p style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '13px', color: C.sub,
      lineHeight: 1.9, marginBottom: 16, maxWidth: 580,
    }} {...props} />
  ),
  strong: (props) => (
    <strong style={{ color: C.white, fontWeight: 600 }} {...props} />
  ),
  em: (props) => (
    <em style={{ color: C.yellow, fontStyle: 'normal' }} {...props} />
  ),
  code: (props) => (
    <code style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '12px', color: C.green,
      background: '#1a1a1a',
      padding: '2px 6px', borderRadius: 3,
      border: `1px solid ${C.border}`,
    }} {...props} />
  ),
  pre: (props) => (
    <pre style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '12px', color: C.white,
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 6, padding: '16px 20px',
      overflowX: 'auto', marginBottom: 20,
      lineHeight: 1.7,
    }} {...props} />
  ),
  blockquote: (props) => (
    <blockquote style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '14px', color: C.sub,
      borderLeft: `2px solid ${C.green}`,
      paddingLeft: 20, margin: '20px 0',
      fontWeight: 300, lineHeight: 1.9,
    }} {...props} />
  ),
  ul: (props) => (
    <ul style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '13px', color: C.sub,
      lineHeight: 1.9, marginBottom: 16,
      paddingLeft: 0, listStyle: 'none',
    }} {...props} />
  ),
  li: (props) => (
    <li style={{ display: 'flex', gap: 10, marginBottom: 4 }}>
      <span style={{ color: C.green, flexShrink: 0 }}>→</span>
      <span style={{ color: C.sub }}>{props.children}</span>
    </li>
  ),
  hr: () => (
    <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '28px 0' }} />
  ),
  a: (props) => (
    <a style={{ color: C.blue, textDecoration: 'none', borderBottom: `1px solid ${C.border}` }} {...props} />
  ),
}
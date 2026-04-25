import { C } from '../../lib/theme'

export function PromptLine() {
  return (
    <span style={{ fontFamily: 'inherit', userSelect: 'none', flexShrink: 0 }}>
      <span style={{ color: C.green }}>➜</span>{'  '}
      <span style={{ color: C.purple }}>~</span>
      <span style={{ color: C.muted }}> $ </span>
    </span>
  )
}

export function AiPromptLine() {
  return (
    <span style={{ fontFamily: 'inherit', userSelect: 'none', flexShrink: 0 }}>
      <span style={{ color: C.cyan }}>⬡</span>{'  '}
      <span style={{ color: C.purple }}>zero</span>
      <span style={{ color: C.muted }}> » </span>
    </span>
  )
}
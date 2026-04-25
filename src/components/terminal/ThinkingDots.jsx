import { useState, useEffect } from 'react'

export default function ThinkingDots() {
  const [dots, setDots] = useState('.')
  useEffect(() => {
    const id = setInterval(() => setDots(d => d.length >= 3 ? '.' : d + '.'), 380)
    return () => clearInterval(id)
  }, [])
  return <span style={{ color: '#4ec9d4' }}>zero is thinking{dots}</span>
}
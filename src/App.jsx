import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Component } from 'react'
import { C } from './lib/theme'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import Writing from './pages/Writing'
import Uses from './pages/Uses'
import Contact from './pages/Contact'
import Now from './pages/Now'
import { useEffect } from 'react'
import YouCannotGovern from './pages/posts/YouCannotGovern'
import TrustLayer from './pages/posts/TrustLayer'
import ContextIsNotMemory from './pages/posts/ContextIsNotMemory'
import BuildingInSilence from './pages/posts/BuildingInSilence'
import WhatInfrastructureMeans from './pages/posts/WhatInfrastructureMeans'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          padding: '40px',
          fontFamily: 'monospace',
          color: '#e06c75',
          background: '#0c0c0c',
          minHeight: '100vh',
        }}>
          <div style={{ color: '#8cc55a', marginBottom: 16 }}>ERROR — something crashed:</div>
          <pre style={{ color: '#e2e2e2', whiteSpace: 'pre-wrap', fontSize: '13px' }}>
            {this.state.error.toString()}
          </pre>
          <div style={{ color: '#888888', marginTop: 16, fontSize: '12px' }}>
            Open browser console (F12) for full stack trace.
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div style={{
          minHeight: '100vh',
          background: C.bg,
          fontFamily: "'JetBrains Mono', monospace",
          color: C.white,
        }}>
          <Nav />
          <main>
            <Routes>
              <Route path="/"        element={<Home />}    />
              <Route path="/systems"    element={<Work />}    />
              <Route path="/signal" element={<Writing />} />
              <Route path="/stack"    element={<Uses />}    />
              <Route path="/connect" element={<Contact />} />
              <Route path="/now" element={<Now />} />
              <Route path="/signal/you-cannot-govern-what-you-cannot-trace" element={<YouCannotGovern />} />
               <Route path="/signal/the-trust-layer-ai-is-missing"           element={<TrustLayer />} />
              <Route path="/signal/context-is-not-memory"                   element={<ContextIsNotMemory />} />
              <Route path="/signal/building-in-silence"                     element={<BuildingInSilence />} />
              <Route path="/signal/what-infrastructure-actually-means"      element={<WhatInfrastructureMeans />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
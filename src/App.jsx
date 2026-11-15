/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { createRoot } from 'react-dom/client'
import LoadingPage from './components/Loader/index.jsx'
import Home from './Home.jsx'
import './Home.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return loading ? (
    <div style={{ position: 'fixed', inset: 0, background: '#000' }}>
      <LoadingPage />
    </div>
  ) : (
    <Home />
  )
}

createRoot(document.getElementById('root')).render(
<MotionConfig reducedMotion="never">
  <App />
</MotionConfig>
)
import { useState } from 'react'
import About from './components/About'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      <div style={{
        minHeight: '100vh',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}>
        <Navbar />
        <main>
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </div>
    </>
  )
}

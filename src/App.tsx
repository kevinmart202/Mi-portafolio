import About from './components/About'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}

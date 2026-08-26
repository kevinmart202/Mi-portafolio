import { useState, useEffect } from 'react'

const roles = [
  'Ingeniero de Software Fullstack',
  'Especialista en Redes y Seguridad',
  'Administrador de Infraestructura TI',
  'Automatizador de Procesos con Python',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 24px 60px',
        textAlign: 'center',
      }}
    >
      {/* Central green glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -65%)',
        width: '900px', height: '600px',
        background: 'radial-gradient(ellipse at center, rgba(181,242,61,0.18) 0%, rgba(100,180,30,0.06) 45%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', width: '100%' }}>

        {/* Label */}
        <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '1px', background: '#b5f23d', opacity: 0.6 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b5f23d' }}>
              Disponible para proyectos seleccionados
            </span>
            <div style={{ width: '32px', height: '1px', background: '#b5f23d', opacity: 0.6 }} />
          </div>
        </div>

        {/* Headline */}
        <div className="animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
          <h1 style={{ margin: 0, lineHeight: 1.05 }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(3rem, 9vw, 7.5rem)', color: '#f1f5f9', letterSpacing: '-0.02em' }}>
              Construyendo
            </span>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(3rem, 9vw, 7.5rem)', color: '#f1f5f9', letterSpacing: '-0.02em' }}>
              productos digitales
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(3rem, 9vw, 7.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#f1f5f9' }}>que </span>
              <span style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', fontWeight: 700, color: '#b5f23d' }}>impulsan ideas</span>
            </span>
            <span style={{ display: 'block', fontFamily: 'var(--font-italic)', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(3rem, 9vw, 7.5rem)', color: '#b5f23d', letterSpacing: '-0.02em' }}>
              hacia adelante.
            </span>
          </h1>
        </div>

        {/* Typewriter role */}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0, marginTop: '32px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <span style={{ color: '#b5f23d' }}>// </span>
            <span style={{ color: '#f1f5f9' }}>{displayed}</span>
            <span className="animate-blink" style={{ display: 'inline-block', width: '2px', height: '1.1em', background: '#b5f23d' }} />
          </div>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0, marginTop: '28px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#94a3b8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75 }}>
            Soy <strong style={{ color: '#f1f5f9', fontWeight: 600 }}>Kevin Alexander Martinez Gavilanez</strong>,
            ingeniero en desarrollo, operación y seguridad de software con experiencia en redes, infraestructura TI y automatización de procesos.
            Basado en <span style={{ color: '#b5f23d' }}>Guayaquil, Ecuador</span>.
          </p>
        </div>

        {/* Currently */}
        <div className="animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0, marginTop: '20px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#94a3b8' }}>
            Actualmente:{' '}
            <span style={{ color: '#f1f5f9', fontWeight: 500 }}>Técnico en Redes Jr. @ Santa Priscila</span>
          </span>
        </div>

        {/* CTAs */}
        <div className="animate-fade-up" style={{ animationDelay: '0.72s', opacity: 0, marginTop: '48px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#proyectos" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#b5f23d', color: '#060b06', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', padding: '15px 36px', borderRadius: '6px', textDecoration: 'none', transition: 'all 0.2s', border: '2px solid #b5f23d' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#d4f76e'; e.currentTarget.style.borderColor = '#d4f76e' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#b5f23d'; e.currentTarget.style.borderColor = '#b5f23d' }}>
            Ver Proyectos →
          </a>
          <a href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#f1f5f9', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1rem', padding: '15px 36px', borderRadius: '6px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.15)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(181,242,61,0.5)'; e.currentTarget.style.color = '#b5f23d' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#f1f5f9' }}>
            Conversemos
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up" style={{ animationDelay: '0.9s', opacity: 0, marginTop: '80px', display: 'flex', gap: '64px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { value: '2+', label: 'Años de Experiencia' },
            { value: '3', label: 'Proyectos Relevantes' },
            { value: '3+', label: 'Certificaciones / Cursos' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.5rem', color: '#b5f23d', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#94a3b8', marginTop: '6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <div className="animate-fade-up" style={{ animationDelay: '1.1s', opacity: 0, position: 'absolute', bottom: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, #b5f23d)', animation: 'pulse 2s ease-in-out infinite' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#475569', letterSpacing: '0.12em' }}>SCROLL</span>
      </div>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }`}</style>
    </section>
  )
}

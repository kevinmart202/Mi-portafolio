import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

interface FormState { nombre: string; email: string; asunto: string; mensaje: string }

const redesSociales = [
  {
    nombre: 'Email',
    handle: 'kevinmart2028@gmail.com',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    color: '#b5f23d',
  },
  {
    nombre: 'Teléfono / WhatsApp',
    handle: '0983478695',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    color: '#34d399',
  },
  {
    nombre: 'LinkedIn',
    handle: 'Kevin Martinez Gavilanez',
    href: 'https://www.linkedin.com/in/kevin-alexander-martinez-gavilanez-4ab498369?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    color: '#0a66c2',
  },
  {
    nombre: 'GitHub',
    handle: '@kevin-martinez-dev',
    href: 'https://github.com/kevinmart202',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
    color: '#f1f5f9',
  },
]

const inputStyle = { width: '100%', padding: '14px 16px', background: '#090e09', border: '1px solid #1a2e1a', borderRadius: '6px', fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#f1f5f9', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' as const }

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState<FormState>({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'enviado' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEstado('enviando')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey || !formRef.current) {
      setEstado('error')
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
      setEstado('enviado')
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setEstado('error')
    }
  }

  return (
    <section id="contacto" style={{ padding: '120px 24px 80px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '24px', right: '24px', height: '1px', background: 'linear-gradient(90deg, transparent, #1a2e1a 20%, #1a2e1a 80%, transparent)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '72px' }}>
          <span className="section-label">06 — Contacto</span>
          <h2 className="section-heading" style={{ marginTop: '16px', marginBottom: '16px' }}>
            ¿Buscando talento<br />
            <span style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', color: '#94a3b8', fontWeight: 600 }}>para tu equipo o un proyecto?</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: '#94a3b8', maxWidth: '480px', margin: 0, lineHeight: 1.7 }}>
            Estoy disponible para roles full-time, freelance o proyectos de infraestructura y software. Hablemos sobre cómo puedo aportar valor a tu organización.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="contact-grid">

          {/* Formulario */}
          <div>
            {estado === 'enviado' ? (
              <div style={{ padding: '48px', background: '#0b100b', border: '1px solid rgba(181,242,61,0.25)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: '#b5f23d', margin: '0 0 8px' }}>¡Mensaje enviado!</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: '#94a3b8', margin: '0 0 24px' }}>Gracias por escribirme. Me pondré en contacto contigo a la brevedad.</p>
                <button onClick={() => { setEstado('idle'); setForm({ nombre: '', email: '', asunto: '', mensaje: '' }) }}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#b5f23d', background: 'transparent', border: '1px solid rgba(181,242,61,0.3)', borderRadius: '4px', padding: '10px 20px', cursor: 'pointer' }}>
                  enviar_otro()
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#475569', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>NOMBRE *</label>
                    <input name="nombre" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#b5f23d')} onBlur={e => (e.target.style.borderColor = '#1a2e1a')} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#475569', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>EMAIL *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="tu@email.com" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#b5f23d')} onBlur={e => (e.target.style.borderColor = '#1a2e1a')} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#475569', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>ASUNTO *</label>
                  <input name="asunto" required value={form.asunto} onChange={handleChange} placeholder="Propuesta laboral / Oportunidad Full-time / Proyecto Freelance" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = '#b5f23d')} onBlur={e => (e.target.style.borderColor = '#1a2e1a')} />
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#475569', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>MENSAJE *</label>
                  <textarea name="mensaje" required value={form.mensaje} onChange={handleChange} placeholder="Cuéntame sobre tu proyecto o propuesta..." rows={6}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '160px' }}
                    onFocus={e => (e.target.style.borderColor = '#b5f23d')} onBlur={e => (e.target.style.borderColor = '#1a2e1a')} />
                </div>
                <button type="submit" disabled={estado === 'enviando'}
                  style={{ padding: '15px 32px', background: estado === 'enviando' ? '#3a5a10' : '#b5f23d', border: 'none', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.95rem', color: '#060b06', cursor: estado === 'enviando' ? 'not-allowed' : 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                  onMouseEnter={e => { if (estado !== 'enviando') e.currentTarget.style.background = '#d4f76e' }}
                  onMouseLeave={e => { if (estado !== 'enviando') e.currentTarget.style.background = '#b5f23d' }}>
                  {estado === 'enviando' ? (
                    <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 1s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Enviando...</>
                  ) : (
                    <>Enviar propuesta <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>
                  )}
                </button>
                {estado === 'error' && (
                  <p role="alert" style={{ fontFamily: 'var(--font-body)', color: '#fca5a5', fontSize: '0.85rem', margin: 0 }}>
                    No se pudo enviar el mensaje. Revisa la configuración de EmailJS e inténtalo de nuevo.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Info contacto */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#475569', marginBottom: '18px', letterSpacing: '0.1em' }}>{'// encuéntrame en'}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
              {redesSociales.map(r => {
                const contenido = (
                  <>
                    <span style={{ color: r.color, display: 'flex' }}>{r.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9rem', color: '#f1f5f9' }}>{r.nombre}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#dbeafe', fontWeight: 500, marginTop: '2px' }}>{r.handle}</div>
                    </div>
                    {r.href && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2d4a2d" strokeWidth="2" style={{ marginLeft: 'auto' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    )}
                  </>
                )
                const cardStyle = { display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 18px', background: '#0b100b', border: '1px solid #1a2e1a', borderRadius: '6px', color: 'inherit' }

                return r.href ? (
                  <a key={r.nombre} href={r.href} target="_blank" rel="noopener noreferrer"
                    style={{ ...cardStyle, textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = r.color + '40'; e.currentTarget.style.background = r.color + '08' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a2e1a'; e.currentTarget.style.background = '#0b100b' }}>
                    {contenido}
                  </a>
                ) : (
                  <div key={r.nombre} style={cardStyle}>
                    {contenido}
                  </div>
                )
              })}
            </div>

            {/* Disponibilidad */}
            <div style={{ padding: '24px', background: 'rgba(181,242,61,0.04)', border: '1px solid rgba(181,242,61,0.15)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#b5f23d', boxShadow: '0 0 8px #b5f23d', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#b5f23d', fontWeight: 500 }}>Disponible para oportunidades</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#94a3b8', margin: 0, lineHeight: 1.65 }}>
                Abierto a roles a tiempo completo, proyectos freelance y colaboraciones en desarrollo de software, redes y seguridad TI. Guayaquil, Ecuador.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid #1a2e1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#475569' }}>
            <span style={{ color: '#b5f23d' }}>{'{'}</span>
            <span> Kevin </span>
            <span style={{ color: '#b5f23d' }}>{'}'}</span>
            <span> — Hecho con React + Vite + Tailwind CSS</span>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#475569' }}>
            © {new Date().getFullYear()} · Todos los derechos reservados
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  )
}

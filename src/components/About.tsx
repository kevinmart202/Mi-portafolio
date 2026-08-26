const profileImage = '/img/watermarked_img_8862386015648288976.jpg'

export default function About() {
  const datos = [
    { icon: '📍', label: 'Ubicación', value: 'Guayaquil, Ecuador (Huancavilca Norte)' },
    { icon: '📧', label: 'Correo', value: 'kevinmart2028@gmail.com' },
    { icon: '📱', label: 'Teléfono', value: '0983478695' },
    { icon: '🚗', label: 'Licencia', value: 'Tipo B' },
    { icon: '🌐', label: 'Idiomas', value: 'Español (Nativo) · Inglés (Intermedio)' },
  ]

  const enfoque = [
    'Gestión de Redes y Telecomunicaciones',
    'Seguridad Perimetral e Infraestructura',
    'Arquitectura Cloud en AWS',
    'Desarrollo Web Fullstack',
    'Seguridad Web y Análisis OWASP',
    'DevSecOps e Integración de Sistemas',
  ]

  const educacion = [
    { institucion: 'Universidad de Especialidades Espíritu Santo (UEES)', programa: 'Ing. en Desarrollo, Operación y Seguridad de Software' },
    { institucion: 'Instituto Tecnológico Superior Argos', programa: 'Tecnólogo en Redes y Telecomunicaciones' },
    { institucion: 'ESPOL', programa: 'Bootcamp Fullstack Development' },
  ]

  return (
    <section id="sobre-mi" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '72px' }}>
          <span className="section-label">01 — Sobre Mí</span>
          <h2 className="section-heading" style={{ marginTop: '16px', marginBottom: 0 }}>
            Kevin Alexander<br />
            <span style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', color: '#94a3b8', fontWeight: 600 }}>Martinez Gavilanez</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#b5f23d', margin: '20px 0 0', letterSpacing: '0.04em' }}>
            Administrador de Redes y Telecomunicaciones · Fullstack Development · Ingeniero en DevSecOps
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="about-grid">

          {/* Izquierda: avatar + datos */}
          <div>
            <div style={{ position: 'relative', marginBottom: '40px' }}>
              <div style={{ width: '100%', paddingBottom: '100%', background: '#0b100b', border: '1px solid #1a2e1a', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                <img src={profileImage} alt="Perfil profesional de Kevin Alexander Martinez Gavilanez" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '36px', height: '36px', borderTop: '3px solid #b5f23d', borderLeft: '3px solid #b5f23d' }} />
              <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', width: '36px', height: '36px', borderBottom: '3px solid #b5f23d', borderRight: '3px solid #b5f23d' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {datos.map(d => (
                <div key={d.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px 18px', background: '#0b100b', border: '1px solid #1a2e1a', borderRadius: '6px', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(181,242,61,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a2e1a')}>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>{d.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#b5f23d', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>{d.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#f1f5f9' }}>{d.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha: perfil */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#f1f5f9', lineHeight: 1.8, margin: 0 }}>
                Profesional especializado en <strong style={{ color: '#b5f23d' }}>infraestructura de redes y telecomunicaciones</strong>, con un perfil multidisciplinario respaldado por <strong style={{ color: '#b5f23d' }}>DevSecOps y arquitectura cloud en AWS</strong>.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#94a3b8', lineHeight: 1.8, margin: 0 }}>
                Cuento con más de <strong style={{ color: '#f1f5f9' }}>3 años y medio de experiencia</strong> en gestión de redes empresariales, seguridad perimetral y optimización de infraestructura. Aporto un valor diferencial al combinar esta base operativa con sólidas capacidades en <strong style={{ color: '#f1f5f9' }}>desarrollo Fullstack</strong> y auditoría de vulnerabilidades web <strong style={{ color: '#f1f5f9' }}>(OWASP)</strong>, permitiéndome construir e integrar herramientas de software a la medida de la red.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#94a3b8', lineHeight: 1.8, margin: 0 }}>
                Especializado en la estabilidad de redes, monitoreo centralizado y despliegue de soluciones escalables, garantizando la seguridad informática desde el código hasta la conectividad.
              </p>
            </div>

            <div style={{ marginTop: '44px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#475569', marginBottom: '18px', letterSpacing: '0.1em' }}>{'// formación académica'}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {educacion.map(item => (
                  <div key={item.institucion} style={{ padding: '14px 18px', background: '#0b100b', border: '1px solid #1a2e1a', borderRadius: '6px' }}>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#f1f5f9', fontWeight: 500 }}>{item.institucion}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#b5f23d', marginTop: '4px' }}>{item.programa}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '44px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#475569', marginBottom: '18px', letterSpacing: '0.1em' }}>{'// áreas de enfoque'}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {enfoque.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#b5f23d', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', flexShrink: 0 }}>▹</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#f1f5f9' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  )
}

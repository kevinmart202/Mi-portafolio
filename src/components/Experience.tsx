interface Job {
  titulo: string
  empresa: string
  periodo: string
  actual?: boolean
  logros: string[]
  tags: string[]
}

const experiencia: Job[] = [
  {
    titulo: 'Técnico en Redes Junior',
    empresa: 'Industria Pesquera Santa Priscila',
    periodo: 'Septiembre 2025 – Actualidad',
    actual: true,
    logros: [
      'Gestión de Fortinet: control de navegación, filtrado URL y niveles de acceso de usuarios.',
      'Administración de equipos MikroTik (CCR/CCS): configuración de VLANs, Firewalls y DHCP.',
      'Mapeo de infraestructura en Zabbix para monitoreo proactivo de caídas de red y servidores.',
      'Soporte en radioenlaces (Cambium, Rocket, Ubiquiti) y Wi-Fi (Aruba, Ruckus ,Ubiquiti ).',
    ],
    tags: ['Fortinet', 'MikroTik', 'Zabbix', 'VLANs', 'Ubiquiti', 'Aruba'],
  },
  {
    titulo: 'Asistente Informático',
    empresa: 'Exportadora Durexporta S.A.',
    periodo: 'Mayo 2024 – Septiembre 2025',
    logros: [
      'Administración de Active Directory (permisos/auditoría) y manejo de servidores ERP XASS.',
      'Automatización de procesos: desarrollo de herramientas y scripts avanzados con Python para optimización de flujos de trabajo.',
      'Creación de programas con interfaz gráfica (React, HTML/CSS) para automatización administrativa.',
      'Configuración de routers MikroTik, radioenlaces Ubiquiti y gestión de seguridad ESET.',
    ],
    tags: ['Python', 'React', 'Active Directory', 'MikroTik', 'ESET', 'ERP'],
  },
  {
    titulo: 'Técnico Instalador',
    empresa: 'Respausa (Contratista Xtrim)',
    periodo: 'Mayo 2023 – Mayo 2024',
    logros: [
      'Instalación de fibra óptica (FTTH) y cableado estructurado UTP en redes LAN/Wi-Fi.',
      'Configuración de equipos de abonado y diagnóstico de fallas de conectividad.',
    ],
    tags: ['Fibra Óptica', 'FTTH', 'Cableado UTP', 'LAN', 'Wi-Fi'],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '24px', right: '24px', height: '1px', background: 'linear-gradient(90deg, transparent, #1a2e1a 20%, #1a2e1a 80%, transparent)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '72px' }}>
          <span className="section-label">02 — Experiencia Laboral</span>
          <h2 className="section-heading" style={{ marginTop: '16px', marginBottom: 0 }}>
            Trayectoria<br />
            <span style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', color: '#94a3b8', fontWeight: 600 }}>profesional</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '7px', top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(to bottom, #b5f23d, rgba(181,242,61,0.1))' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {experiencia.map((job, i) => (
              <div key={job.empresa} style={{ position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: '-28px', top: '6px',
                  width: '14px', height: '14px', borderRadius: '50%',
                  background: job.actual ? '#b5f23d' : '#1a2e1a',
                  border: `2px solid ${job.actual ? '#b5f23d' : '#2d4a2d'}`,
                  boxShadow: job.actual ? '0 0 12px rgba(181,242,61,0.5)' : 'none',
                  zIndex: 1,
                }} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'start' }} className="job-header">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', color: '#f1f5f9', margin: 0 }}>
                        {job.titulo}
                      </h3>
                      {job.actual && (
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#060b06', background: '#b5f23d', borderRadius: '3px', padding: '2px 8px', letterSpacing: '0.08em', fontWeight: 600 }}>
                          ACTUAL
                        </span>
                      )}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#b5f23d', marginBottom: '20px', fontWeight: 500 }}>
                      {job.empresa}
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {job.logros.map(logro => (
                        <li key={logro} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <span style={{ color: '#b5f23d', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '3px', flexShrink: 0 }}>▹</span>
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.7 }}>{logro}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {job.tags.map(tag => (
                        <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#b5f23d', background: 'rgba(181,242,61,0.08)', border: '1px solid rgba(181,242,61,0.2)', borderRadius: '3px', padding: '3px 10px' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ flexShrink: 0, textAlign: 'right' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#475569', whiteSpace: 'nowrap' }}>
                      {job.periodo}
                    </span>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#2d4a2d', marginTop: '4px' }}>
                      {String(i + 1).padStart(2, '0')} / {String(experiencia.length).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: '24px', right: '24px', height: '1px', background: 'linear-gradient(90deg, transparent, #1a2e1a 20%, #1a2e1a 80%, transparent)' }} />
      <style>{`@media (max-width: 700px) { .job-header { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

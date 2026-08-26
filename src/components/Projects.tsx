import { useState } from 'react'

interface Proyecto {
  titulo: string
  descripcion: string
  tecnologias: string[]
  imagen: string
  links: { github?: string; demo?: string }
  destacado?: boolean
  empresa: string
}

const proyectos: Proyecto[] = [
  {
    titulo: 'Reestructuración del Data Center',
    descripcion: 'Lideré la reestructuración completa del Data Center en Durexporta: cotización de equipos, diseño en AutoCAD, gestión de compras y montaje físico de la infraestructura.',
    tecnologias: ['AutoCAD', 'Redes LAN', 'Cableado Estructurado', 'Gestión de Proyecto'],
    imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format',
    links: {},
    destacado: true,
    empresa: 'Exportadora Durexporta S.A.',
  },
  {
    titulo: 'Monitoreo Centralizado con Zabbix',
    descripcion: 'Implementación de monitoreo proactivo centralizado en Zabbix para caídas de red y servidores, incluyendo segmentación de la red vía VLANs con equipos MikroTik.',
    tecnologias: ['Zabbix', 'MikroTik', 'VLANs', 'SNMP', 'Networking'],
    imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
    links: {},
    destacado: true,
    empresa: 'Industria Pesquera Santa Priscila',
  },
  {
    titulo: 'Plataforma Web Bootcamp ESPOL',
    descripcion: 'Desarrollo de plataforma web para monitoreo de antenas y gestión de reclutas del bootcamp. Incluye panel de control, visualización de datos en tiempo real y gestión de usuarios.',
    tecnologias: ['React', 'JavaScript', 'HTML/CSS', 'Python', 'API REST'],
    imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format',
    links: { demo: '#' },
    destacado: true,
    empresa: 'Bootcamp ESPOL',
  },
  {
    titulo: 'Automatización de Procesos Administrativos',
    descripcion: 'Scripts y herramientas Python para automatización de flujos de trabajo administrativos en Durexporta, con interfaces gráficas en React para facilitar el uso interno.',
    tecnologias: ['Python', 'React', 'HTML/CSS', 'Active Directory', 'Scripts'],
    imagen: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=500&fit=crop&auto=format',
    links: {},
    empresa: 'Exportadora Durexporta S.A.',
  },
  {
    titulo: 'Gestión de Seguridad Perimetral Fortinet',
    descripcion: 'Configuración y administración de políticas de seguridad en Fortinet: filtrado URL, niveles de acceso por usuario, control de navegación y gestión de eventos de seguridad.',
    tecnologias: ['Fortinet', 'Firewall', 'Filtrado URL', 'Seguridad TI'],
    imagen: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=500&fit=crop&auto=format',
    links: {},
    empresa: 'Industria Pesquera Santa Priscila',
  },
  {
    titulo: 'Infraestructura FTTH y Redes LAN',
    descripcion: 'Instalación de redes de fibra óptica FTTH y cableado estructurado UTP para redes LAN/Wi-Fi. Configuración de equipos de abonado y diagnóstico de fallas.',
    tecnologias: ['FTTH', 'Fibra Óptica', 'Cableado UTP', 'LAN', 'Wi-Fi'],
    imagen: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop&auto=format',
    links: {},
    empresa: 'Respausa / Xtrim',
  },
]

function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  const [hover, setHover] = useState(false)
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: '#0b100b', border: '1px solid #1a2e1a', borderRadius: '8px', overflow: 'hidden', transition: 'all 0.3s', transform: hover ? 'translateY(-4px)' : 'translateY(0)', borderColor: hover ? 'rgba(181,242,61,0.25)' : '#1a2e1a', boxShadow: hover ? '0 20px 48px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.2)' }}>
      <div style={{ position: 'relative', paddingBottom: '55%', background: '#090e09', overflow: 'hidden' }}>
        <img src={proyecto.imagen} alt={proyecto.titulo}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', transform: hover ? 'scale(1.04)' : 'scale(1)', opacity: 0.65 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,11,6,0.95) 0%, rgba(6,11,6,0.3) 60%, transparent 100%)' }} />
        {proyecto.destacado && (
          <span style={{ position: 'absolute', top: '12px', right: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, background: 'rgba(181,242,61,0.92)', color: '#060b06', padding: '3px 10px', borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Destacado
          </span>
        )}
        <div style={{ position: 'absolute', bottom: '14px', left: '16px', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#b5f23d', opacity: 0.8 }}>
          {proyecto.empresa}
        </div>
      </div>
      <div style={{ padding: '24px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: '#f1f5f9', margin: '0 0 10px', lineHeight: 1.25 }}>{proyecto.titulo}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#94a3b8', margin: '0 0 20px', lineHeight: 1.7 }}>{proyecto.descripcion}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: proyecto.links.github || proyecto.links.demo ? '20px' : '0' }}>
          {proyecto.tecnologias.map(t => (
            <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#b5f23d', background: 'rgba(181,242,61,0.08)', border: '1px solid rgba(181,242,61,0.18)', borderRadius: '3px', padding: '3px 9px' }}>{t}</span>
          ))}
        </div>
        {(proyecto.links.github || proyecto.links.demo) && (
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            {proyecto.links.github && (
              <a href={proyecto.links.github} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f1f5f9')}
                onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            )}
            {proyecto.links.demo && (
              <a href={proyecto.links.demo} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#b5f23d', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#d4f76e')}
                onMouseLeave={e => (e.currentTarget.style.color = '#b5f23d')}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Ver Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">04 — Proyectos</span>
          <h2 className="section-heading" style={{ marginTop: '16px', marginBottom: 0 }}>
            Cosas que he<br />
            <span style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', color: '#94a3b8', fontWeight: 600 }}>construido</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {proyectos.map(p => <TarjetaProyecto key={p.titulo} proyecto={p} />)}
        </div>
      </div>
    </section>
  )
}

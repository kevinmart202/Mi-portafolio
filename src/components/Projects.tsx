import { useState } from 'react'

interface Proyecto {
  titulo: string
  descripcion: string
  tecnologias: string[]
  imagen: string
  github: string
  destacado?: boolean
  empresa: string
}

const proyectos: Proyecto[] = [
  {
    titulo: 'Sistema de Control de Acceso WAN y Registro MAC',
    descripcion: 'Sistema de control de acceso WAN que implementa una cola FIFO enlazada manualmente, el patrón Repository y pruebas unitarias con pytest. Desarrollado en Python con persistencia SQLite.',
    tecnologias: ['Python', 'SQLite', 'Pytest', 'Patrón Repository'],
    imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format',
    github: 'https://github.com/kevinmart202/Sistema-de-Control-de-Acceso-WAN-y-Registro-MAC-WAN-NAC-',
    destacado: true,
    empresa: 'Control de acceso WAN · NAC',
  },
  {
    titulo: 'Isoglobaltech',
    descripcion: 'Sistema interactivo de facturación y emisión de proformas comerciales para Isoglobaltech. Desarrollado en Python como proyecto de Programación Estructurada en la UEES.',
    tecnologias: ['Python', 'Programación Estructurada'],
    imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
    github: 'https://github.com/kevinmart202/Isoglobaltech',
    destacado: true,
    empresa: 'Sistema de facturación',
  },
  {
    titulo: 'Sistema de Monitoreo de Antenas',
    descripcion: 'Dashboard interactivo para el monitoreo de antenas de telecomunicaciones en Guayaquil.',
    tecnologias: ['TypeScript', 'Telecomunicaciones', 'Dashboard'],
    imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format',
    github: 'https://github.com/kevinmart202/Sistema_de_monitoreo_de_antenas',
    destacado: true,
    empresa: 'Monitoreo de telecomunicaciones',
  },
  {
    titulo: 'Mi Portafolio',
    descripcion: 'Portafolio web profesional enfocado en Desarrollo de Software, Redes y Seguridad TI. Desarrollado con React, TypeScript, Tailwind CSS y Vite, e integrado con EmailJS para contacto directo.',
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS'],
    imagen: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&auto=format',
    github: 'https://github.com/kevinmart202/Mi-portafolio.git',
    destacado: true,
    empresa: 'Portafolio web',
  },
]

function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  const [hover, setHover] = useState(false)
  return (
    <a href={proyecto.github} target="_blank" rel="noopener noreferrer"
      aria-label={`Ver ${proyecto.titulo} en GitHub`}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'block', background: '#0b100b', border: '1px solid #1a2e1a', borderRadius: '8px', overflow: 'hidden', transition: 'all 0.3s', transform: hover ? 'translateY(-4px)' : 'translateY(0)', borderColor: hover ? 'rgba(181,242,61,0.25)' : '#1a2e1a', boxShadow: hover ? '0 20px 48px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.2)', textDecoration: 'none' }}>
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {proyecto.tecnologias.map(t => (
            <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#b5f23d', background: 'rgba(181,242,61,0.08)', border: '1px solid rgba(181,242,61,0.18)', borderRadius: '3px', padding: '3px 9px' }}>{t}</span>
          ))}
        </div>
        <div style={{ marginTop: '18px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#b5f23d' }}>
          Ver repositorio en GitHub ↗
        </div>
      </div>
    </a>
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

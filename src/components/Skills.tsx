import { useState } from 'react'

type Cat = 'todas' | 'redes' | 'dev' | 'herramientas'

const habilidades: { nombre: string; nivel: number; categoria: Exclude<Cat, 'todas'>; color: string }[] = [
  // Redes y Seguridad
  { nombre: 'MikroTik CCR', nivel: 100, categoria: 'redes', color: '#b5f23d' },
  { nombre: 'MikroTik CCS', nivel: 100, categoria: 'redes', color: '#b5f23d' },
  { nombre: 'Fortinet', nivel: 80, categoria: 'redes', color: '#b5f23d' },
  { nombre: 'Kali Linux', nivel: 80, categoria: 'redes', color: '#b5f23d' },
  { nombre: 'Ubiquiti / Cambium', nivel: 82, categoria: 'redes', color: '#b5f23d' },
  { nombre: 'Zabbix', nivel: 80, categoria: 'redes', color: '#b5f23d' },
  { nombre: 'VLANs / Firewalls', nivel: 84, categoria: 'redes', color: '#b5f23d' },
  { nombre: 'Fibra Óptica (FTTH)', nivel: 78, categoria: 'redes', color: '#b5f23d' },
  // Desarrollo
  { nombre: 'Python', nivel: 82, categoria: 'dev', color: '#b5f23d' },
  { nombre: 'JavaScript', nivel: 90, categoria: 'dev', color: '#b5f23d' },
  { nombre: 'React', nivel: 75, categoria: 'dev', color: '#b5f23d' },
  { nombre: 'TypeScript', nivel: 90, categoria: 'dev', color: '#b5f23d' },
  { nombre: 'HTML / CSS', nivel: 85, categoria: 'dev', color: '#b5f23d' },
  { nombre: 'SQL', nivel: 80, categoria: 'dev', color: '#b5f23d' },
  { nombre: 'NoSQL', nivel: 75, categoria: 'dev', color: '#b5f23d' },
  { nombre: 'Bases de Datos en la Nube (Cloud Databases)', nivel: 80, categoria: 'dev', color: '#b5f23d' },
  // Herramientas
  { nombre: 'Active Directory', nivel: 80, categoria: 'herramientas', color: '#b5f23d' },
  { nombre: 'AWS', nivel: 80, categoria: 'herramientas', color: '#b5f23d' },
  { nombre: 'AutoCAD', nivel: 70, categoria: 'herramientas', color: '#b5f23d' },
  { nombre: 'ESET Security', nivel: 75, categoria: 'herramientas', color: '#b5f23d' },
  { nombre: 'Git / GitHub', nivel: 72, categoria: 'herramientas', color: '#b5f23d' },
  { nombre: 'ERP XASS', nivel: 68, categoria: 'herramientas', color: '#b5f23d' },
  { nombre: 'Análisis de Datos con SPSS', nivel: 60, categoria: 'herramientas', color: '#b5f23d' },
  { nombre: 'Inteligencia Artificial: ChatGPT, Codex, Claude, Antigravity y Gemini', nivel: 90, categoria: 'herramientas', color: '#b5f23d' },
]

const categorias: { key: Cat; label: string }[] = [
  { key: 'todas', label: 'Todas' },
  { key: 'redes', label: 'Redes y Seguridad' },
  { key: 'dev', label: 'Desarrollo' },
  { key: 'herramientas', label: 'Herramientas' },
]

function BarraHabilidad({ nombre, nivel, color }: { nombre: string; nivel: number; color: string }) {
  return (
    <div style={{ padding: '16px 20px', background: '#0b100b', border: '1px solid #1a2e1a', borderRadius: '6px', transition: 'border-color 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(181,242,61,0.3)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a2e1a')}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 500, color: '#f1f5f9' }}>{nombre}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#475569' }}>{nivel}%</span>
      </div>
      <div style={{ height: '4px', background: '#1a2e1a', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${nivel}%`, background: color, borderRadius: '2px', opacity: 0.9 }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const [activa, setActiva] = useState<Cat>('todas')
  const filtradas = activa === 'todas' ? habilidades : habilidades.filter(h => h.categoria === activa)

  return (
    <section id="habilidades" style={{ padding: '120px 24px', background: 'rgba(11,16,11,0.5)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '24px', right: '24px', height: '1px', background: 'linear-gradient(90deg, transparent, #1a2e1a 20%, #1a2e1a 80%, transparent)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <span className="section-label">03 — Habilidades</span>
            <h2 className="section-heading" style={{ marginTop: '16px', marginBottom: 0 }}>
              Tecnologías con<br />
              <span style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', color: '#94a3b8', fontWeight: 600 }}>las que trabajo</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categorias.map(c => (
              <button key={c.key} onClick={() => setActiva(c.key)} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer',
                border: activa === c.key ? '1px solid #b5f23d' : '1px solid #1a2e1a',
                background: activa === c.key ? 'rgba(181,242,61,0.1)' : 'transparent',
                color: activa === c.key ? '#b5f23d' : '#94a3b8', transition: 'all 0.2s',
              }}>{c.label}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          {filtradas.map(h => <BarraHabilidad key={h.nombre} nombre={h.nombre} nivel={h.nivel} color={h.color} />)}
        </div>

        {/* Idiomas */}
        <div style={{ marginTop: '40px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {[{ idioma: 'Español', nivel: 'Nativo', pct: 100 }, { idioma: 'Inglés', nivel: 'Intermedio', pct: 60 }].map(i => (
            <div key={i.idioma} style={{ flex: '1', minWidth: '200px', padding: '20px', background: '#0b100b', border: '1px solid #1a2e1a', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: '#f1f5f9' }}>{i.idioma}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#b5f23d' }}>{i.nivel}</span>
              </div>
              <div style={{ height: '4px', background: '#1a2e1a', borderRadius: '2px' }}>
                <div style={{ height: '100%', width: `${i.pct}%`, background: '#b5f23d', borderRadius: '2px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: '24px', right: '24px', height: '1px', background: 'linear-gradient(90deg, transparent, #1a2e1a 20%, #1a2e1a 80%, transparent)' }} />
    </section>
  )
}

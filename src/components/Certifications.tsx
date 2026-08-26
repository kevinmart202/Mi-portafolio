import spssCertificate from '../../img/Certificados/Analisis en SSPS/Certificado_0931796932_es.pdf'
import awsCertificate from '../../img/Certificados/AWS/Certificado - Curso de Fundamentos de AWS (1).pdf'
import pythonCertificate from '../../img/Certificados/Python/qr_certificado_142533.pdf'
import aiCertificate from '../../img/Certificados/IA/WhatsApp Image 2026-08-22 at 22.07.52.jpeg'

interface Cert {
  titulo: string
  institucion: string
  archivo: string
  color: string
}

const certificaciones: Cert[] = [
  {
    titulo: 'Análisis de Datos mediante SPSS',
    institucion: 'UNEMI - Universidad Estatal de Milagro',
    archivo: spssCertificate,
    color: '#b5f23d',
  },
  {
    titulo: 'Curso de Fundamentos de AWS',
    institucion: 'Código Facilito',
    archivo: awsCertificate,
    color: '#ff9900',
  },
  {
    titulo: 'Python (Dominio Medio - Avanzado)',
    institucion: 'UNEMI - Universidad Estatal de Milagro',
    archivo: pythonCertificate,
    color: '#b5f23d',
  },
  {
    titulo: 'Pensamiento Digital en la Era de la Inteligencia Artificial',
    institucion: 'Universidad de Especialidades Espíritu Santo (UEES)',
    archivo: aiCertificate,
    color: '#b5f23d',
  },
]

function TarjetaCert({ cert }: { cert: Cert }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'start',
      minHeight: '174px', padding: '26px 28px', background: 'rgba(11,16,11,0.86)', border: '1px solid #1a2e1a',
      borderRadius: '8px', position: 'relative', transition: 'all 0.25s', cursor: 'default',
    }} className="cert-card"
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${cert.color}40`; e.currentTarget.style.transform = 'translateX(4px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a2e1a'; e.currentTarget.style.transform = 'translateX(0)' }}>

      <div>
        <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', color: '#f1f5f9', margin: '0 0 6px', lineHeight: 1.35 }}>{cert.titulo}</h3>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#94a3b8' }}>{cert.institucion}</div>
        <a href={cert.archivo} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', width: 'fit-content', marginTop: '18px', padding: '7px 11px', border: `1px solid ${cert.color}45`, borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: cert.color, textDecoration: 'none' }}>
          Ver certificación ↗
        </a>
      </div>

      <div style={{ position: 'absolute', left: 0, top: '22%', bottom: '22%', width: '3px', background: cert.color, borderRadius: '0 2px 2px 0', opacity: 0.7 }} />
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certificaciones" style={{ padding: '120px 24px', background: 'rgba(11,16,11,0.5)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '24px', right: '24px', height: '1px', background: 'linear-gradient(90deg, transparent, #1a2e1a 20%, #1a2e1a 80%, transparent)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <span className="section-label">05 — Certificaciones</span>
            <h2 className="section-heading" style={{ marginTop: '16px', marginBottom: 0 }}>
              Certificaciones<br />
              <span style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', color: '#94a3b8', fontWeight: 600 }}>profesionales</span>
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', color: '#b5f23d', lineHeight: 1 }}>{certificaciones.length}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#475569', marginTop: '4px' }}>certificaciones</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '18px' }} className="cert-grid">
          {certificaciones.map(c => <TarjetaCert key={c.titulo} cert={c} />)}
        </div>

        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ flex: 1, height: '1px', background: '#1a2e1a' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#475569', whiteSpace: 'nowrap' }}>{'// aprendizaje continuo'}</span>
          <div style={{ flex: 1, height: '1px', background: '#1a2e1a' }} />
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: '24px', right: '24px', height: '1px', background: 'linear-gradient(90deg, transparent, #1a2e1a 20%, #1a2e1a 80%, transparent)' }} />

      <style>{`@media (max-width: 760px) {
        .cert-grid { grid-template-columns: 1fr !important; }
        .cert-card { min-height: 0 !important; padding: 22px !important; }
      }`}</style>
    </section>
  )
}

import { useEffect, useState } from 'react'

const bootLines = [
  '$ Inicializando sistema...',
  '$ Cargando recursos...',
  '$ Configurando red segura...',
  '$ Verificando credenciales...',
  '$ Estableciendo conexión cifrada...',
  '$ Acceso concedido.',
]

interface LoaderProps {
  onDone: () => void
}

export default function Loader({ onDone }: LoaderProps) {
  const [lines, setLines] = useState<string[]>([])
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'boot' | 'access' | 'fadeout'>('boot')
  const [scanLine, setScanLine] = useState(0)

  // Animate scanline
  useEffect(() => {
    const id = setInterval(() => setScanLine(p => (p + 1) % 100), 30)
    return () => clearInterval(id)
  }, [])

  // Boot sequence
  useEffect(() => {
    let lineIdx = 0
    const addLine = () => {
      if (lineIdx < bootLines.length) {
        const idx = lineIdx
        setLines(prev => [...prev, bootLines[idx]])
        setProgress(Math.round(((idx + 1) / bootLines.length) * 100))
        lineIdx++
        setTimeout(addLine, 380 + Math.random() * 280)
      } else {
        setTimeout(() => setPhase('access'), 400)
        setTimeout(() => setPhase('fadeout'), 1600)
        setTimeout(onDone, 2200)
      }
    }
    const t = setTimeout(addLine, 600)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#000',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity: phase === 'fadeout' ? 0 : 1,
      transition: phase === 'fadeout' ? 'opacity 0.6s ease' : 'none',
      overflow: 'hidden',
    }}>
      {/* CRT scanline effect */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
        background: `linear-gradient(to bottom, transparent ${scanLine}%, rgba(181,242,61,0.015) ${scanLine}%, rgba(181,242,61,0.015) ${scanLine + 2}%, transparent ${scanLine + 2}%)`,
      }} />

      {/* Subtle vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.75) 100%)',
      }} />

      {/* Grid dots */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(181,242,61,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Terminal window */}
      <div style={{
        position: 'relative', zIndex: 3,
        width: 'min(420px, 90vw)',
        background: 'rgba(6, 11, 6, 0.97)',
        border: '1px solid #b5f23d',
        borderRadius: '4px',
        boxShadow: '0 0 40px rgba(181,242,61,0.15), 0 0 80px rgba(181,242,61,0.06), inset 0 0 30px rgba(0,0,0,0.5)',
        overflow: 'hidden',
      }}>
        {/* Title bar */}
        <div style={{
          background: '#b5f23d',
          padding: '6px 14px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, color: '#060b06', letterSpacing: '0.12em' }}>
            INICIALIZANDO SISTEMA...
          </span>
          <div style={{ display: 'flex', gap: '5px' }}>
            {['_', '□', '×'].map(c => (
              <span key={c} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#060b06', opacity: 0.6 }}>{c}</span>
            ))}
          </div>
        </div>

        {/* Terminal body */}
        <div style={{ padding: '20px 18px', minHeight: '160px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
            {lines.map((line, i) => (
              <div key={i} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: i === lines.length - 1 ? '#b5f23d' : 'rgba(181,242,61,0.65)',
                letterSpacing: '0.03em',
                animation: 'lineIn 0.15s ease forwards',
              }}>
                {line}
                {i === lines.length - 1 && phase === 'boot' && (
                  <span style={{
                    display: 'inline-block', width: '7px', height: '13px',
                    background: '#b5f23d', marginLeft: '3px', verticalAlign: 'middle',
                    animation: 'blink 0.7s step-end infinite',
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          {lines.length > 0 && (
            <div style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(181,242,61,0.5)', letterSpacing: '0.08em' }}>PROGRESO</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#b5f23d' }}>{progress}%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(181,242,61,0.1)', borderRadius: '2px', overflow: 'hidden', border: '1px solid rgba(181,242,61,0.15)' }}>
                <div style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #6db520, #b5f23d)',
                  borderRadius: '2px',
                  transition: 'width 0.35s ease',
                  boxShadow: '0 0 8px rgba(181,242,61,0.6)',
                }} />
              </div>
            </div>
          )}
        </div>

        {/* Footer label */}
        <div style={{
          padding: '8px 18px 14px',
          textAlign: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.25em',
            color: phase === 'access' ? '#b5f23d' : 'rgba(181,242,61,0.35)',
            textTransform: 'uppercase',
            transition: 'color 0.3s',
            textShadow: phase === 'access' ? '0 0 12px rgba(181,242,61,0.8)' : 'none',
          }}>
            {phase === 'access' ? '✓ ACCESO CONCEDIDO' : 'ACCEDIENDO AL PORTAFOLIO'}
          </span>
        </div>
      </div>

      {/* Name watermark bottom */}
      <div style={{
        position: 'absolute', bottom: '32px', left: 0, right: 0,
        textAlign: 'center', zIndex: 3,
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: 'rgba(181,242,61,0.2)',
          textTransform: 'uppercase',
        }}>
          Kevin Alexander Martinez Gavilanez
        </span>
      </div>

      <style>{`
        @keyframes lineIn {
          from { opacity: 0; transform: translateX(-6px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

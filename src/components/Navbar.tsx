import { useState, useEffect } from 'react'

const links = [
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Certificaciones', href: '#certificaciones' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => { setActive(href); setMenuOpen(false) }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
      background: scrolled ? 'rgba(6, 11, 6, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(181,242,61,0.08)' : '1px solid transparent',
    }}>
      <nav style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        <a href="#hero" onClick={() => handleNav('#hero')}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 500, color: '#f1f5f9', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#b5f23d' }}>{'{'}</span>
          <span style={{ fontSize: '0.85rem' }}>Kevin A. Martinez G.</span>
          <span style={{ color: '#b5f23d' }}>{'}'}</span>
        </a>

        <ul style={{ display: 'flex', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }} className="nav-desktop">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => handleNav(link.href)}
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500, color: active === link.href ? '#b5f23d' : '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f1f5f9')}
                onMouseLeave={e => (e.currentTarget.style.color = active === link.href ? '#b5f23d' : '#94a3b8')}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contacto" className="nav-desktop"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 500, color: '#b5f23d', border: '1px solid rgba(181,242,61,0.4)', borderRadius: '4px', padding: '8px 18px', textDecoration: 'none', transition: 'all 0.2s', letterSpacing: '0.04em' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(181,242,61,0.1)'; e.currentTarget.style.borderColor = '#b5f23d' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(181,242,61,0.4)' }}
          onClick={() => handleNav('#contacto')}>
          contratar()
        </a>

        <button className="nav-mobile" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', flexDirection: 'column', gap: '5px', display: 'none' }}
          aria-label="Menú">
          {[0, 1, 2].map(i => <span key={i} style={{ display: 'block', width: '22px', height: '2px', background: '#f1f5f9', borderRadius: '1px' }} />)}
        </button>
      </nav>

      {menuOpen && (
        <div style={{ background: 'rgba(6,11,6,0.98)', borderTop: '1px solid rgba(181,242,61,0.08)', padding: '16px 24px 24px' }}>
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => handleNav(link.href)}
              style={{ display: 'block', padding: '12px 0', color: '#94a3b8', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

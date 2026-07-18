import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
]

const linkStyle = {
  color: 'rgba(255,255,255,0.65)',
  fontWeight: 500,
  fontSize: '0.9375rem',
  padding: '6px 14px',
  borderRadius: '10px',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  letterSpacing: '-0.01em',
}

const ctaStyle = {
  color: '#ffffff',
  fontWeight: 600,
  fontSize: '0.9rem',
  padding: '8px 20px',
  borderRadius: '12px',
  textDecoration: 'none',
  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
  boxShadow: '0 2px 8px rgba(37,99,235,0.35), 0 1px 2px rgba(37,99,235,0.2)',
  transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
  letterSpacing: '-0.01em',
  marginLeft: '8px',
  display: 'inline-block',
}

const pillStyle = {
  background: 'rgba(13,13,13,0.88)',
  borderRadius: '22px',
  border: '1px solid rgba(255,255,255,0.09)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.05) inset',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
}

const Navbar = () => {
  const headerRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    })
    return () => ctx.revert()
  }, [])

  // Animate mobile menu open/close
  useEffect(() => {
    const el = mobileMenuRef.current
    if (!el) return
    if (menuOpen) {
      gsap.fromTo(el,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.32, ease: 'power3.out' }
      )
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.22, ease: 'power2.in' })
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div>
      <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 px-4 sm:px-6">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-5xl w-full sm:w-[90%] lg:w-[80%]"
          style={{ ...pillStyle, overflow: 'hidden' }}
        >
          {/* ── Top bar ── */}
          <div className="flex items-center justify-between" style={{ height: '68px' }}>

            {/* Logo */}
            <div className="flex flex-shrink-0">
              <h2 className='text-white font-sanserif text-3xl '
                style={{
                  color: '#f5f0e8',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  letterSpacing: '-0.04em',
                  fontStyle: 'italic',
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                portfolio
              </h2>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28"
              style={{ gap: '4px', marginLeft: 0 }}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a key={label} href={href}
                  className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:scale-105"
                  style={linkStyle}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#ffffff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                > {label} </a>
              ))}

              <a href="#contact"
                className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:scale-105"
                style={ctaStyle}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-1px) scale(1.03)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.45), 0 2px 4px rgba(37,99,235,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(37,99,235,0.35), 0 1px 2px rgba(37,99,235,0.2)'
                }}
              >Contact</a>
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl focus:outline-none"
              style={{ gap: '5px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              <span style={{
                display: 'block', width: '18px', height: '2px',
                background: '#fff', borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }} />
              <span style={{
                display: 'block', width: '18px', height: '2px',
                background: '#fff', borderRadius: '2px',
                transition: 'all 0.3s ease',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block', width: '18px', height: '2px',
                background: '#fff', borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }} />
            </button>
          </div>

          {/* ── Mobile dropdown menu ── */}
          <div
            ref={mobileMenuRef}
            className="md:hidden"
            style={{ height: 0, opacity: 0, overflow: 'hidden' }}
          >
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.07)',
              padding: '12px 8px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}>
              {NAV_LINKS.map(({ label, href }) => (
                <a key={label} href={href} onClick={closeMenu}
                  className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:scale-105"
                  style={{
                    ...linkStyle,
                    display: 'block',
                    padding: '12px 16px',
                    fontSize: '1rem',
                    borderRadius: '12px',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#ffffff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                >{label}</a>
              ))}

              <a href="#contact" onClick={closeMenu}
                className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:scale-105"
                style={{
                  ...ctaStyle,
                  marginLeft: 0,
                  marginTop: '8px',
                  textAlign: 'center',
                  padding: '12px 20px',
                  fontSize: '1rem',
                  borderRadius: '14px',
                }}
              >Contact</a>
            </div>
          </div>

        </div>
      </header>
    </div>
  )
}

export default Navbar

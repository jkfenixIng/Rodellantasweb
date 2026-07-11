import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { siteConfig } from '../data/site';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/productos', label: 'Productos' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/nosotros', label: 'Nosotros' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-brand-blue text-white sticky top-0 z-50">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.jpeg" 
              alt="Rodellantas Logo" 
              className="h-10 md:h-12 w-auto"
              loading="eager"
            />
            <span className="text-xl md:text-2xl font-bold text-brand-red">
              Rodellantas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-red border-b-2 border-brand-red'
                      : 'text-white hover:text-brand-red'
                  }`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Phone Number - Desktop */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden md:flex items-center space-x-2 text-white hover:text-brand-red transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm font-medium">{siteConfig.phone}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-white hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-brand-blue border-t border-gray-700" aria-label="Navegación móvil">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-brand-red text-white'
                      : 'text-white hover:bg-gray-700 hover:text-brand-red'
                  }`
                }
                end={link.to === '/'}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-brand-red"
            >
              📞 Llamar ahora
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

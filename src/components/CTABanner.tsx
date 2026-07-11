import { Link } from 'react-router-dom';
import { siteConfig } from '../data/site';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({ 
  title = '¿Necesitas una cotización?', 
  subtitle = 'Contáctanos hoy mismo y recibe el mejor servicio para tus llantas.' 
}: CTABannerProps) {
  return (
    <section className="bg-brand-red text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8 text-white/90">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center bg-white text-brand-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llamar ahora
          </a>
          
          <Link
            to="/contacto"
            className="inline-flex items-center bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue/90 transition-colors"
          >
            Contáctenos
          </Link>
        </div>
      </div>
    </section>
  )
}

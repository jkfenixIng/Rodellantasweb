import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function Hero({ title, subtitle, ctaText = 'Ver Servicios', ctaLink = '/servicios' }: HeroProps) {
  return (
    <section className="relative bg-brand-blue text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-red/20" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              {subtitle}
            </p>
          )}
          <Link
            to={ctaLink}
            className="inline-block bg-brand-red text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-blue"
          >
            {ctaText}
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

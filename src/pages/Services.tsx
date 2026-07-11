import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { CTABanner } from '../components/CTABanner';
import { services } from '../data/services';
import { seoData } from '../data/seo';

export function Services() {
  return (
    <>
      <SEO {...seoData.services} url="/servicios" />
      
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Ofrecemos servicios profesionales de llantas con equipos de última generación y personal altamente capacitado.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner 
        title="¿Necesitas un servicio?"
        subtitle="Agenda tu cita hoy mismo y disfruta de un servicio excepcional."
      />
    </>
  )
}

import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { ProductCard } from '../components/ProductCard';
import { CTABanner } from '../components/CTABanner';
import { services } from '../data/services';
import { products } from '../data/products';
import { seoData } from '../data/seo';

export function Home() {
  const topServices = services.slice(0, 4);

  return (
    <>
      <SEO {...seoData.home} url="/" />
      
      <Hero
        title="Soluciones Integrales para tus Llantas"
        subtitle="Más de 20 años de experiencia brindando servicios profesionales de llantas en Colombia. Calidad, confianza y los mejores precios."
        ctaText="Ver Servicios"
        ctaLink="/servicios"
      />

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios profesionales para mantener tus llantas en óptimas condiciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topServices.map((service) => (
              <ServiceCard key={service.slug} service={service} showCTA={false} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/servicios"
              className="inline-block text-brand-red font-semibold hover:text-red-600 transition-colors"
            >
              Ver Todos los Servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* Products Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Nuestros Productos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabajamos con las mejores marcas para ofrecerte llantas de calidad superior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}

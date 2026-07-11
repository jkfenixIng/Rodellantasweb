import { SEO } from '../components/SEO';
import { ProductCard } from '../components/ProductCard';
import { CTABanner } from '../components/CTABanner';
import { products } from '../data/products';
import { seoData } from '../data/seo';

export function Products() {
  return (
    <>
      <SEO {...seoData.products} url="/productos" />
      
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Productos</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Llantas de las mejores marcas nacionales e internacionales con garantía y los mejores precios.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner 
        title="¿Buscas llantas?"
        subtitle="Solicita tu cotización sin compromiso y encuentra las llantas perfectas para tu vehículo."
      />
    </>
  )
}

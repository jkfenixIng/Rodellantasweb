import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <>
      <SEO 
        title="Página no encontrada | Rodellantas" 
        description="La página que buscas no existe. Vuelve al inicio para encontrar nuestros servicios y productos."
        url="/404"
      />
      
      <section className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-4xl font-bold text-brand-blue mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página no encontrada</h2>
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <Link
            to="/"
            className="inline-block bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="h-48 bg-gradient-to-br from-brand-blue to-brand-red flex items-center justify-center">
        <span className="text-6xl text-white">🛞</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-brand-blue mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-1">Marcas:</p>
          <p className="text-sm text-gray-600">{product.brands.join(', ')}</p>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">{product.warranty}</span>
          <span className="text-lg font-bold text-brand-red">{product.priceIndicator}</span>
        </div>
        
        <Link
          to={`/contacto?producto=${product.slug}`}
          className="block w-full text-center bg-brand-blue text-white py-2 rounded-lg font-semibold hover:bg-brand-blue/90 transition-colors"
        >
          Solicitar Cotización
        </Link>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  showCTA?: boolean;
}

export function ServiceCard({ service, showCTA = true }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold text-brand-blue mb-3">{service.name}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="bg-gray-50 rounded-md p-3 mb-4">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-brand-red">¿Por qué es importante? </span>
          {service.importance}
        </p>
      </div>
      {showCTA && (
        <Link
          to={`/contacto?servicio=${service.slug}`}
          className="inline-block text-brand-red font-semibold hover:text-red-600 transition-colors"
        >
          Agendar Cita →
        </Link>
      )}
    </div>
  )
}

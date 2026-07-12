import type { SEOData } from '../types';

export const seoData: Record<string, SEOData> = {
  home: {
    title: 'Rodellantas | Servicios y Productos de Llantas',
    description: 'Soluciones integrales para tus llantas en Colombia. Alineación, balanceo, montaje y más. Las mejores marcas y servicio profesional.',
    ogImage: '/og-image.jpg',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AutoRepair',
      name: 'Rodellantas',
      image: 'https://rodellantas.com/logo.jpeg',
      telephone: '+573001234567',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Principal #123',
        addressLocality: 'Ciudad',
        addressCountry: 'CO',
      },
      openingHours: 'Mo-Sa 08:00-18:00',
    },
  },
  services: {
    title: 'Servicios | Rodellantas',
    description: 'Servicios profesionales de llantas: alineación, balanceo, montaje, inspección y más. Calidad garantizada.',
    ogImage: '/og-image.jpg',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Servicios de Llantas',
      provider: {
        '@type': 'AutoRepair',
        name: 'Rodellantas',
      },
    },
  },
  products: {
    title: 'Productos | Rodellantas',
    description: 'Llantas originales premium, chinas y reencauche Vipal. Las mejores marcas con garantía.',
    ogImage: '/og-image.jpg',
  },
  contact: {
    title: 'Contáctenos | Rodellantas',
    description: 'Solicita tu cotización. Formulario, teléfono, dirección y mapa. Estamos para servirte.',
    ogImage: '/og-image.jpg',
  },
  about: {
    title: 'Nosotros | Rodellantas',
    description: 'Conoce nuestra historia, misión y equipo profesional. Más de 10 años de experiencia.',
    ogImage: '/og-image.jpg',
  },
}

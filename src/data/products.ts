import type { Product } from '../types';

export const products: Product[] = [
  {
    slug: 'originales-premium',
    name: 'Originales Premium',
    description: 'Llantas originales de las mejores marcas internacionales con garantía del fabricante. Calidad y rendimiento superior para tu vehículo.',
    brands: ['Michelin', 'Goodyear', 'Pirelli', 'Bridgestone', 'Continental'],
    warranty: 'Garantía del fabricante',
    priceIndicator: '$$$',
  },
  {
    slug: 'originales-chinas',
    name: 'Originales Chinas',
    description: 'Llantas de origen chino con excelente relación calidad-precio. Ideales para quienes buscan alternativas económicas sin sacrificar seguridad.',
    brands: ['Linglong', 'Triangle', 'Sentury', 'Westlake', 'Goodride'],
    warranty: 'Garantía de 1 año',
    priceIndicator: '$$',
  },
  {
    slug: 'reencauche-vipal',
    name: 'Reencauche Vipal',
    description: 'Reencauche de alta calidad con tecnología Vipal. Extiende la vida útil de tus llantas con un rendimiento comparable al original.',
    brands: ['Vipal'],
    warranty: 'Garantía de reencauche',
    priceIndicator: '$',
  },
]

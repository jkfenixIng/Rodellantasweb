import { SEO } from '../components/SEO';
import { TeamCard } from '../components/TeamCard';
import { CTABanner } from '../components/CTABanner';
import { teamMembers } from '../data/team';
import { seoData } from '../data/seo';

export function About() {
  return (
    <>
      <SEO {...seoData.about} url="/nosotros" />
      
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Conoce nuestra historia, misión y el equipo que hace posible brindarte el mejor servicio.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Nuestra Historia</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Rodellantas fue fundada en el año 2000 con la visión de ofrecer servicios de llantas de la más alta calidad en Colombia. Lo que comenzó como un pequeño taller familiar, se ha convertido en un referente del sector automotriz en la región.
              </p>
              <p>
                A lo largo de más de 20 años, hemos crecido manteniendo nuestros valores fundamentales: honestidad, calidad y compromiso con el cliente. Nuestro equipo de profesionales está capacitado para brindar soluciones integrales para todo tipo de vehículos.
              </p>
              <p>
                Hoy en día, contamos con tecnología de punta y las mejores marcas del mercado para garantizar que cada cliente reciba un servicio excepcional. Nuestra satisfacción es ver a nuestros clientes conduciendo con seguridad y confianza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Misión</h3>
              <p className="text-gray-600">
                Brindar servicios profesionales de llantas con los más altos estándares de calidad, utilizing tecnología de vanguardia y un equipo altamente capacitado, para garantizar la seguridad y satisfacción de nuestros clientes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Visión</h3>
              <p className="text-gray-600">
                Ser la empresa líder en servicios de llantas en Colombia, reconocida por nuestra excelencia, innovación y compromiso con la seguridad vial, expandiendo nuestra presencia a nivel nacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue mb-2">Calidad</h4>
              <p className="text-gray-600">Utilizamos las mejores marcas y tecnología para garantizar resultados excepcionales.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue mb-2">Confianza</h4>
              <p className="text-gray-600">Construimos relaciones duraderas basadas en la honestidad y transparencia.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue mb-2">Seguridad</h4>
              <p className="text-gray-600">Tu seguridad es nuestra prioridad. Cada servicio está orientado a protegerte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Nuestro Equipo</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner 
        title="¿Listo para trabajar juntos?"
        subtitle="Contáctanos hoy y descubre por qué somos la mejor opción para tus llantas."
      />
    </>
  )
}

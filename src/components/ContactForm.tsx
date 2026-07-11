import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { services } from '../data/services';

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });

  useEffect(() => {
    const servicio = searchParams.get('servicio');
    if (servicio) {
      setFormData(prev => ({ ...prev, servicio }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          servicio: '',
          mensaje: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">¡Mensaje enviado!</h3>
        <p className="text-green-600">
          Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-green-700 font-semibold hover:text-green-800"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
          Nombre completo *
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
          placeholder="+57 300 123 4567"
        />
      </div>

      <div>
        <label htmlFor="servicio" className="block text-sm font-semibold text-gray-700 mb-2">
          Servicio de interés *
        </label>
        <select
          id="servicio"
          name="servicio"
          value={formData.servicio}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
        >
          <option value="">Selecciona un servicio</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
          placeholder="Cuéntanos sobre tu necesidad..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-red text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
      >
        Enviar
      </button>
    </form>
  )
}

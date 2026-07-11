import { Helmet } from 'react-helmet-async';
import type { SEOData } from '../types';

interface SEOProps extends SEOData {
  url?: string;
}

export function SEO({ title, description, ogImage, jsonLd, url }: SEOProps) {
  const siteUrl = 'https://rodellantas.com';
  const currentUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="llantas, neumáticos, alineación, balanceo, montaje, servicios, Colombia" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:site_name" content="Rodellantas" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />
      
      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

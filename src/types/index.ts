export interface Service {
  slug: string;
  name: string;
  description: string;
  importance: string;
  icon: string;
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  brands: string[];
  warranty: string;
  priceIndicator: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo?: string;
}

export interface SEOData {
  title: string;
  description: string;
  ogImage?: string;
  jsonLd?: object;
}

export interface SiteConfig {
  name: string;
  phone: string;
  email: string;
  address: string;
  whatsapp?: string;
  social: {
    facebook?: string;
    instagram?: string;
  };
}

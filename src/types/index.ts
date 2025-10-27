// Service types
export interface Service {
  id: number;
  icon: string;
  title: string;
  titlePlain?: string; // Plain text version for dropdowns/menus
  description: string;
  features: string[];
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  company: string;
  location: string;
  icon?: string;
  text: string;
  shortText: string;
  rating: number;
  featured?: boolean;
  details?: string[];
  pdfLink?: string;
}

// Project types
export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  area: string;
  duration: string;
  description: string;
  image?: string;
  beforeImage?: string;
  afterImage?: string;
}

// Stat types
export interface Stat {
  id: number;
  icon: string;
  value: string;
  label: string;
  subtitle?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

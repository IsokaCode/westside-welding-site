export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  emergency?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}
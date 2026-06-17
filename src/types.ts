export interface Product {
  id: string;
  name: string;
  originalName?: string;
  category: string;
  description: string;
  image: string;
  specification?: string;
  packing?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  bannerImage: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  productOfInterest: string;
  message: string;
}


// Shared types for the application

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  gridArea: string;
  alt: string;
}

export interface CubeConfig {
  id: number;
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  parallaxSpeed: number;
  zIndex?: number;
  colorTheme: 'moss' | 'olive' | 'sage' | 'gold';
  rotation: number;
}

export interface SeoConfig {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export type BlogTemplate = 'classic' | 'modern' | 'immersive';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Stored as simple text/html
  coverImage: string;
  category: string;
  author: string;
  date: string;
  template: BlogTemplate;
  seo: SeoConfig;
  status: 'draft' | 'published';
}

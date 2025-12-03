
// Shared types for the application

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  cols: string;
  alt: string;
}

export interface CubeConfig {
  id: number;
  size: number; // Replaced width/height strings with a numeric size scalar
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  parallaxSpeed: number;
  zIndex?: number;
  colorTheme: 'moss' | 'olive' | 'sage' | 'gold';
  rotation: number; // Rotation in degrees
}

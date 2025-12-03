import React, { useEffect, useRef } from 'react';
import { CubeConfig } from '../types';

// Define color themes for the 3D cubes (Top, Left, Right faces)
const THEMES = {
  moss: { top: '#8a9a5b', left: '#596a40', right: '#2f3e24' },
  olive: { top: '#a3b18a', left: '#588157', right: '#3a5a40' },
  sage: { top: '#dad7cd', left: '#a3b18a', right: '#588157' },
  gold: { top: '#f9f7d9', left: '#d4c986', right: '#a69b58' },
};

// Added rotation values for dynamic orientation
const CUBES: CubeConfig[] = [
  { id: 1, size: 80, top: '10%', left: '5%', parallaxSpeed: 0.05, colorTheme: 'moss', rotation: 15 },
  { id: 2, size: 120, top: '15%', right: '10%', parallaxSpeed: 0.08, colorTheme: 'olive', rotation: -12 },
  { id: 3, size: 60, top: '40%', right: '5%', parallaxSpeed: 0.03, colorTheme: 'sage', rotation: 45 },
  { id: 4, size: 50, top: '45%', left: '15%', parallaxSpeed: 0.12, colorTheme: 'gold', rotation: -30 },
  { id: 5, size: 140, top: '60%', left: '-5%', parallaxSpeed: 0.06, colorTheme: 'olive', rotation: 170 },
  { id: 6, size: 40, top: '75%', right: '25%', parallaxSpeed: 0.09, colorTheme: 'moss', rotation: 90 },
  { id: 7, size: 100, bottom: '15%', right: '-2%', parallaxSpeed: 0.04, colorTheme: 'sage', rotation: -15 },
  { id: 8, size: 70, bottom: '25%', left: '40%', parallaxSpeed: 0.1, colorTheme: 'gold', rotation: 120 },
  { id: 9, size: 90, bottom: '5%', left: '5%', parallaxSpeed: 0.07, colorTheme: 'olive', rotation: -60 },
  { id: 10, size: 45, top: '30%', left: '50%', parallaxSpeed: 0.15, colorTheme: 'sage', rotation: 25 },
];

const IsometricCubeSVG: React.FC<{ size: number; theme: keyof typeof THEMES }> = ({ size, theme }) => {
  const colors = THEMES[theme];
  // Standard Isometric projection math
  
  return (
    <svg 
      width={size} 
      height={size * 1.15} 
      viewBox="0 0 100 115" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
    >
      {/* Top Face */}
      <path d="M50 0L93.3 25V25L50 50L6.7 25L50 0Z" fill={colors.top} />
      {/* Right Face */}
      <path d="M50 50L93.3 25V75L50 100V50Z" fill={colors.right} />
      {/* Left Face */}
      <path d="M50 50L6.7 25V75L50 100V50Z" fill={colors.left} />
      
      {/* Subtle highlight on edges for better definition */}
      <path d="M6.7 25L50 50L93.3 25" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <path d="M50 50V100" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
    </svg>
  );
};

export const FloatingBackground: React.FC = () => {
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const cubeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates -1 to 1
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      targetRef.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      const scrollY = window.scrollY;

      // Lerp for smooth movement
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.08;

      CUBES.forEach((cube, index) => {
        const el = cubeRefs.current[index];
        if (el) {
          const { x, y } = mouseRef.current;
          // Invert direction for depth feel
          const offsetX = x * cube.parallaxSpeed * -150;
          const offsetY = y * cube.parallaxSpeed * -150;
          
          // Scroll effect: move up as we scroll down
          // We amplify the scroll effect to make them "fly away"
          const scrollOffset = scrollY * (0.5 + cube.parallaxSpeed * 4);

          // Apply parallax translation via JS (high performance)
          // We only apply translation here. Rotation and Scale are handled by inner elements
          el.style.transform = `translate3d(${offsetX}px, ${offsetY - scrollOffset}px, 0)`;
        }
      });
      
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Static Background gradients for atmosphere */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-amber-500/5 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-primary/5 blur-[80px] rounded-full" />

      {/* Floating 3D Cubes */}
      {CUBES.map((cube, index) => (
        <div
          key={cube.id}
          ref={(el) => { cubeRefs.current[index] = el; }}
          className="absolute will-change-transform"
          // This outer div handles the JS Parallax Translation
          style={{
            top: cube.top,
            left: cube.left,
            right: cube.right,
            bottom: cube.bottom,
            zIndex: cube.zIndex || 1,
          }}
        >
          {/* Middle Div handles the Static Rotation */}
          <div style={{ transform: `rotate(${cube.rotation}deg)` }}>
            
            {/* Inner Div handles the CSS Float Animation */}
            {/* NOTE: If we put animation on the same div as JS transform, one overwrites the other */}
            <div 
              className="will-change-transform"
              style={{
                animation: `float ${6 + index % 3}s ease-in-out infinite alternate ${index * 0.5}s`
              }}
            >
              <IsometricCubeSVG size={cube.size} theme={cube.colorTheme} />
            </div>
          </div>
        </div>
      ))}
      
      {/* Gradient to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background-light to-transparent dark:from-background-dark z-10" />

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-25px); }
        }
      `}</style>
    </div>
  );
};
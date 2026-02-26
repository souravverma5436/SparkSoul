import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingRing() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || !ringRef.current) return;

    // Desktop positions
    const desktopPositions = {
      home: { x: 200, y: 0, scale: 1.05, rotation: 0, opacity: 1 },
      about: { x: -250, y: 100, scale: 0.95, rotation: -3, opacity: 1 },
      products: { x: 180, y: -50, scale: 1.0, rotation: 3, opacity: 1 },
      gallery: { x: -220, y: -80, scale: 0.9, rotation: -2, opacity: 1 },
      contact: { x: 150, y: 50, scale: 0.85, rotation: 0, opacity: 1 }
    };

    // Mobile positions (smaller, bottom-center)
    const mobilePositions = {
      home: { x: 0, y: 150, scale: 0.65, rotation: 0, opacity: 0.95 },
      about: { x: 0, y: 150, scale: 0.6, rotation: 0, opacity: 0.95 },
      products: { x: 0, y: 150, scale: 0.65, rotation: 0, opacity: 0.95 },
      gallery: { x: 0, y: 150, scale: 0.6, rotation: 0, opacity: 0.95 },
      contact: { x: 0, y: 150, scale: 0.55, rotation: 0, opacity: 0.95 }
    };

    const positions = isMobile ? mobilePositions : desktopPositions;

    // Create ScrollTrigger for each section
    const sections = ['home', 'about', 'products', 'gallery', 'contact'];
    
    sections.forEach((section, index) => {
      const nextSection = sections[index + 1];
      const targetPos = positions[section as keyof typeof positions];
      
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: 'top center',
        end: nextSection ? `#${nextSection} top center` : 'bottom center',
        scrub: 1,
        onUpdate: (self: { progress: number }) => {
          if (!ringRef.current) return;
          
          const progress = self.progress;
          const nextPos = nextSection ? positions[nextSection as keyof typeof positions] : targetPos;
          
          // Interpolate between current and next position
          const x = gsap.utils.interpolate(targetPos.x, nextPos.x, progress);
          const y = gsap.utils.interpolate(targetPos.y, nextPos.y, progress);
          const scale = gsap.utils.interpolate(targetPos.scale, nextPos.scale, progress);
          const rotation = gsap.utils.interpolate(targetPos.rotation, nextPos.rotation, progress);
          const opacity = gsap.utils.interpolate(targetPos.opacity, nextPos.opacity, progress);
          
          gsap.set(ringRef.current, {
            x,
            y,
            scale,
            rotation,
            opacity,
            ease: 'power2.out'
          });
        }
      });
    });

    // Subtle idle floating animation when not scrolling
    let idleAnimation: gsap.core.Tween | null = null;
    let scrollTimeout: NodeJS.Timeout;

    const startIdleAnimation = () => {
      if (idleAnimation) idleAnimation.kill();
      idleAnimation = gsap.to(ringRef.current, {
        y: '+=10',
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });
    };

    const stopIdleAnimation = () => {
      if (idleAnimation) {
        idleAnimation.kill();
        idleAnimation = null;
      }
    };

    const handleScroll = () => {
      stopIdleAnimation();
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!isMobile) startIdleAnimation();
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    if (!isMobile) startIdleAnimation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      stopIdleAnimation();
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className="fixed top-1/2 left-1/2 z-30 pointer-events-none"
      style={{
        transform: 'translate(-50%, -50%)',
        willChange: 'transform, opacity',
      }}
    >
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#c9a961]/15 rounded-full blur-2xl animate-pulse" />
        
        {/* Ring image */}
        <img
          src="/Silver Ring.jpeg"
          alt="Featured Ring"
          className="relative w-full h-full object-cover rounded-full shadow-2xl"
          style={{
            boxShadow: '0 20px 60px rgba(201, 169, 97, 0.4), 0 0 40px rgba(201, 169, 97, 0.2)',
          }}
        />
        
        {/* Shimmer overlay */}
        <div 
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 55%, transparent 100%)',
            backgroundSize: '200% 200%',
            animation: 'shimmerMove 3s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  );
}

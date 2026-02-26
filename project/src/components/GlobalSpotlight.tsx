import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

type Section = 'home' | 'about' | 'products' | 'gallery' | 'contact';

export default function GlobalSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [currentImage, setCurrentImage] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get image for current section
  const getSectionImage = (section: Section): string => {
    switch (section) {
      case 'home':
        // Try to get hero featured image, fallback to first product
        const heroImage = document.querySelector('#home img');
        if (heroImage instanceof HTMLImageElement && heroImage.src) {
          return heroImage.src;
        }
        const firstProduct = document.querySelector('#products .grid img');
        return firstProduct instanceof HTMLImageElement ? firstProduct.src : '/Silver Ring.jpeg';
      
      case 'about':
        // Get the main story image
        const storyImage = document.querySelector('#about img');
        return storyImage instanceof HTMLImageElement ? storyImage.src : '/green-buta-shaped-stone-jewelry.jpg';
      
      case 'products':
        // Get first visible product image
        const productImage = document.querySelector('#products .grid img');
        return productImage instanceof HTMLImageElement ? productImage.src : '/bracelet.jpeg';
      
      case 'gallery':
        // Get first gallery image
        const galleryImage = document.querySelector('#gallery .grid img');
        return galleryImage instanceof HTMLImageElement ? galleryImage.src : '/Pink Flower Hair Accessory.jpeg';
      
      case 'contact':
        // Reuse last image or use brand icon
        return currentImage || '/Silver Ring.jpeg';
      
      default:
        return '/Silver Ring.jpeg';
    }
  };

  // Update image when section changes
  useEffect(() => {
    const newImage = getSectionImage(activeSection);
    
    if (newImage !== currentImage && imageRef.current) {
      // Fade out, swap, fade in
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setCurrentImage(newImage);
          gsap.to(imageRef.current, {
            opacity: 1,
            duration: 0.3
          });
        }
      });
    } else if (!currentImage) {
      setCurrentImage(newImage);
    }
  }, [activeSection, currentImage]);

  // IntersectionObserver to detect active section
  useEffect(() => {
    const sections: Section[] = ['home', 'about', 'products', 'gallery', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id as Section;
          if (sections.includes(sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Animate spotlight to anchor position
  useEffect(() => {
    const anchor = document.querySelector(`[data-spotlight="${activeSection}"]`);
    
    if (!anchor || !spotlightRef.current) return;

    const anchorRect = anchor.getBoundingClientRect();
    const spotlightSize = isMobile ? 160 : 280;
    
    // Calculate position relative to viewport
    const targetX = anchorRect.left + anchorRect.width / 2;
    const targetY = anchorRect.top + anchorRect.height / 2 + window.scrollY;

    // Animate to anchor position
    gsap.to(spotlightRef.current, {
      x: targetX - spotlightSize / 2,
      y: targetY - spotlightSize / 2,
      scale: 1,
      rotation: activeSection === 'about' ? -2 : activeSection === 'products' ? 2 : 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, [activeSection, isMobile]);

  const spotlightSize = isMobile ? 160 : 280;

  return (
    <div
      ref={spotlightRef}
      className="fixed pointer-events-none z-20"
      style={{
        width: spotlightSize,
        height: spotlightSize,
        willChange: 'transform',
      }}
    >
      <div className="relative w-full h-full">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#c9a961]/10 rounded-full blur-2xl" />
        
        {/* Spotlight image */}
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
          {currentImage && (
            <img
              ref={imageRef}
              src={currentImage}
              alt="Spotlight"
              className="w-full h-full object-cover"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(201, 169, 97, 0.2)',
              }}
            />
          )}
        </div>
        
        {/* Subtle border */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20" />
      </div>
    </div>
  );
}

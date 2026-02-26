import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

type Section = 'home' | 'about' | 'products' | 'gallery' | 'contact';

interface ShowcaseContent {
  title: string;
  subtitle: string;
  image?: string;
}

const showcaseContent: Record<Section, ShowcaseContent> = {
  home: {
    title: 'Spark Soul',
    subtitle: 'Handcrafted Jewelry',
    image: '/bracelet.jpeg'
  },
  about: {
    title: 'Our Story',
    subtitle: 'Made with love',
    image: '/green-buta-shaped-stone-jewelry.jpg'
  },
  products: {
    title: 'Best Sellers',
    subtitle: 'Explore our collection',
    image: '/Silver Ring.jpeg'
  },
  gallery: {
    title: 'Our Creations',
    subtitle: 'See our work',
    image: '/Pink Flower Hair Accessory.jpeg'
  },
  contact: {
    title: 'Let\'s Create',
    subtitle: 'Something custom for you',
    image: '/celebration hamper.png'
  }
};

// Position and style variants for each section
const showcaseVariants = {
  home: {
    top: '20%',
    right: '5%',
    left: 'auto',
    bottom: 'auto',
    width: 280,
    height: 320,
    borderRadius: 24,
    opacity: 1,
    scale: 1,
  },
  about: {
    top: '25%',
    left: '3%',
    right: 'auto',
    bottom: 'auto',
    width: 260,
    height: 300,
    borderRadius: 20,
    opacity: 1,
    scale: 1,
  },
  products: {
    top: '15%',
    right: '4%',
    left: 'auto',
    bottom: 'auto',
    width: 240,
    height: 280,
    borderRadius: 20,
    opacity: 1,
    scale: 1,
  },
  gallery: {
    top: '12%',
    left: '4%',
    right: 'auto',
    bottom: 'auto',
    width: 220,
    height: 260,
    borderRadius: 18,
    opacity: 1,
    scale: 1,
  },
  contact: {
    top: 'auto',
    bottom: '15%',
    right: '5%',
    left: 'auto',
    width: 260,
    height: 300,
    borderRadius: 22,
    opacity: 1,
    scale: 1,
  }
};

// Mobile variants (smaller, bottom center)
const mobileVariants = {
  home: {
    top: 'auto',
    bottom: '8%',
    left: '50%',
    right: 'auto',
    x: '-50%',
    width: 180,
    height: 200,
    borderRadius: 16,
    opacity: 0.95,
    scale: 1,
  },
  about: {
    top: 'auto',
    bottom: '8%',
    left: '50%',
    right: 'auto',
    x: '-50%',
    width: 180,
    height: 200,
    borderRadius: 16,
    opacity: 0.95,
    scale: 1,
  },
  products: {
    top: 'auto',
    bottom: '8%',
    left: '50%',
    right: 'auto',
    x: '-50%',
    width: 180,
    height: 200,
    borderRadius: 16,
    opacity: 0.95,
    scale: 1,
  },
  gallery: {
    top: 'auto',
    bottom: '8%',
    left: '50%',
    right: 'auto',
    x: '-50%',
    width: 180,
    height: 200,
    borderRadius: 16,
    opacity: 0.95,
    scale: 1,
  },
  contact: {
    top: 'auto',
    bottom: '8%',
    left: '50%',
    right: 'auto',
    x: '-50%',
    width: 180,
    height: 200,
    borderRadius: 16,
    opacity: 0.95,
    scale: 1,
  }
};

export default function FloatingShowcase() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // IntersectionObserver to detect active section
  useEffect(() => {
    const sections = ['home', 'about', 'products', 'gallery', 'contact'];
    
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

  const content = showcaseContent[activeSection];
  const variants = isMobile ? mobileVariants : showcaseVariants;
  const animationDuration = shouldReduceMotion ? 0.3 : 0.8;

  return (
    <motion.div
      className="fixed z-40 pointer-events-none"
      initial={variants.home}
      animate={variants[activeSection]}
      transition={{
        duration: animationDuration,
        ease: 'easeInOut',
        layout: { duration: animationDuration }
      }}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      <motion.div
        className="relative w-full h-full bg-white/90 backdrop-blur-md shadow-xl overflow-hidden"
        style={{
          borderRadius: 'inherit',
        }}
        whileHover={!isMobile ? { scale: 1.03, boxShadow: '0 20px 50px rgba(201, 169, 97, 0.3)' } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a961]/10 via-transparent to-[#c9a961]/5 pointer-events-none" />
        
        {/* Image Background */}
        {content.image && (
          <motion.div
            key={`image-${activeSection}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={content.image}
              alt={content.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>
        )}

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-5">
          {/* Icon */}
          <motion.div
            key={`icon-${activeSection}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-3"
          >
            <Sparkles className="w-6 h-6 text-[#c9a961]" strokeWidth={1.5} />
          </motion.div>

          {/* Title */}
          <motion.h3
            key={`title-${activeSection}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="font-serif text-xl sm:text-2xl font-semibold text-white mb-1"
          >
            {content.title}
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            key={`subtitle-${activeSection}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="font-sans text-sm text-white/90"
          >
            {content.subtitle}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '40px' }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="h-0.5 bg-[#c9a961] mt-3"
          />
        </div>

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
}

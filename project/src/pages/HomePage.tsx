import { Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track mouse for parallax effect (desktop only)
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Product images for carousel
  const productImages = [
    '/Pink Flower Hair Accessory.jpeg',
    '/bracelet.jpeg',
    '/Silver Ring.jpeg',
    '/evil eye bracelet.jpeg',
    '/lip gloss.jpeg',
    '/brown hair clip.jpeg',
    '/celebration hamper.png',
    '/green-buta-shaped-stone-jewelry.jpg',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: isMobile ? 'none' : '1000px' }}
    >
      {/* 3D Rotating Product Carousel Background - Simplified on mobile */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-[#2d2d2d]/90 to-black/95" />
        
        {/* Carousel Container - Disabled on mobile for performance */}
        {!isMobile && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {productImages.map((image, index) => {
                const angle = (360 / productImages.length) * index;
                const radius = 600;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <motion.div
                      className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#c9a961]/30"
                      whileHover={{ scale: 1.1 }}
                      style={{
                        boxShadow: '0 20px 60px rgba(201, 169, 97, 0.3), 0 0 40px rgba(201, 169, 97, 0.2)',
                      }}
                    >
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{
                          transform: `rotateY(${-angle}deg)`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        )}

        {/* Mobile: Simple sliding background images */}
        {isMobile && (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...productImages, ...productImages].map((image, index) => (
                <div
                  key={index}
                  className="w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 border-2 border-[#c9a961]/20"
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Animated Grid Pattern with 3D effect - Reduced on mobile */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10 md:opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(201, 169, 97, 0.2) 2px, transparent 2px),
                           linear-gradient(90deg, rgba(201, 169, 97, 0.2) 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
          transform: isMobile ? 'none' : `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />

      {/* Subtle Floating Sparkles - Fewer on mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 4 : 8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
          >
            <Star className="w-2 h-2 md:w-3 md:h-3 text-[#c9a961] fill-[#c9a961] drop-shadow-[0_0_8px_rgba(201,169,97,0.6)]" />
          </motion.div>
        ))}
      </div>

      {/* Main Content with 3D Transform - Disabled on mobile */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto"
        style={{
          transform: isMobile ? 'none' : `rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
          transformStyle: isMobile ? 'flat' : 'preserve-3d',
        }}
      >
        {/* Decorative Top Line with 3D effect */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, z: -50 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"
            style={{ width: '80px', transform: 'translateZ(20px)' }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            style={{ transform: 'translateZ(40px)' }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="w-8 h-8 text-[#c9a961] drop-shadow-[0_0_15px_rgba(201,169,97,1)]" strokeWidth={1.5} />
          </motion.div>
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"
            style={{ width: '80px', transform: 'translateZ(20px)' }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>

        {/* Main Headline with 3D depth - Responsive sizing */}
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight px-2"
          initial={{ opacity: 0, y: 50, z: isMobile ? 0 : -100 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(201, 169, 97, 0.4), 0 10px 30px rgba(0, 0, 0, 0.5)',
            transform: isMobile ? 'none' : 'translateZ(60px)',
            transformStyle: isMobile ? 'flat' : 'preserve-3d',
          }}
        >
          <motion.span
            className="inline-block"
            animate={{
              textShadow: [
                '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(201, 169, 97, 0.4)',
                '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 70px rgba(201, 169, 97, 0.8)',
                '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(201, 169, 97, 0.4)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Handcrafted with Love
          </motion.span>
        </motion.h1>

        {/* Subtitle with 3D positioning - Responsive */}
        <motion.div
          className="mb-3 sm:mb-4"
          initial={{ opacity: 0, z: isMobile ? 0 : -50 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ transform: isMobile ? 'none' : 'translateZ(40px)' }}
        >
          <p className="text-base sm:text-lg lg:text-xl text-white/95 font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase px-2">
            Custom Jewelry & Hampers by
          </p>
        </motion.div>

        {/* Brand Name with 3D glow - Responsive */}
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, scale: 0.8, z: isMobile ? 0 : -80 }}
          animate={{ opacity: 1, scale: 1, z: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ transform: isMobile ? 'none' : 'translateZ(80px)' }}
        >
          <motion.p
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#c9a961] font-bold tracking-wide px-2"
            style={{
              textShadow: '0 0 30px rgba(201, 169, 97, 1), 0 0 60px rgba(201, 169, 97, 0.6), 0 10px 40px rgba(0, 0, 0, 0.5)',
            }}
            animate={{
              textShadow: [
                '0 0 30px rgba(201, 169, 97, 1), 0 0 60px rgba(201, 169, 97, 0.6)',
                '0 0 50px rgba(201, 169, 97, 1), 0 0 100px rgba(201, 169, 97, 0.8)',
                '0 0 30px rgba(201, 169, 97, 1), 0 0 60px rgba(201, 169, 97, 0.6)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Spark Soul
          </motion.p>
        </motion.div>

        {/* CTA Buttons with 3D lift - Responsive */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-16 sm:mb-20 px-4"
          initial={{ opacity: 0, y: 30, z: isMobile ? 0 : -60 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ transform: isMobile ? 'none' : 'translateZ(50px)', transformStyle: isMobile ? 'flat' : 'preserve-3d' }}
        >
          <motion.button
            onClick={() => onNavigate('products')}
            className="w-full sm:w-auto relative px-10 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#c9a961] to-[#d4b76e] text-white font-semibold rounded-full shadow-2xl overflow-hidden group text-base sm:text-lg"
            whileHover={{ scale: isMobile ? 1 : 1.1, z: isMobile ? 0 : 20, rotateX: isMobile ? 0 : 5 }}
            whileTap={{ scale: 0.95 }}
            style={{
              transformStyle: isMobile ? 'flat' : 'preserve-3d',
              boxShadow: '0 20px 40px rgba(201, 169, 97, 0.4), 0 10px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#d4b76e] to-[#e5c77f]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 tracking-wider flex items-center justify-center gap-2">
              Shop Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            onClick={() => onNavigate('about')}
            className="w-full sm:w-auto relative px-10 sm:px-12 py-4 sm:py-5 border-2 border-white/80 text-white font-semibold rounded-full backdrop-blur-md bg-white/5 shadow-xl overflow-hidden group text-base sm:text-lg"
            whileHover={{ scale: isMobile ? 1 : 1.1, z: isMobile ? 0 : 20, rotateX: isMobile ? 0 : 5 }}
            whileTap={{ scale: 0.95 }}
            style={{
              transformStyle: isMobile ? 'flat' : 'preserve-3d',
              boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2), 0 10px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 tracking-wider group-hover:text-[#2d2d2d] transition-colors duration-300">
              Our Story
            </span>
          </motion.button>
        </motion.div>

        {/* Feature Chips with 3D depth */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4"
          initial={{ opacity: 0, z: -40 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
        >
          {[
            { icon: '✨', text: 'Handmade', gradient: 'from-white/15 to-white/5' },
            { icon: '🎁', text: 'Custom Gifts', gradient: 'from-white/15 to-white/5' },
            { icon: '⭐', text: 'Premium Finish', gradient: 'from-[#c9a961]/30 to-[#c9a961]/10', special: true },
            { icon: '⚡', text: 'Fast Response', gradient: 'from-white/15 to-white/5' },
          ].map((chip, index) => (
            <motion.span
              key={chip.text}
              className={`px-6 py-3 backdrop-blur-md text-sm font-medium rounded-full border ${
                chip.special
                  ? 'border-[#c9a961]/60 text-[#c9a961] shadow-[0_0_20px_rgba(201,169,97,0.4)]'
                  : 'border-white/30 text-white/90 shadow-lg'
              } bg-gradient-to-br ${chip.gradient}`}
              initial={{ opacity: 0, y: 20, scale: 0.8, z: -20 }}
              animate={{ opacity: 1, y: 0, scale: 1, z: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.15, 
                y: -8,
                z: 20,
                rotateX: 10,
                boxShadow: chip.special 
                  ? '0 15px 40px rgba(201, 169, 97, 0.6)' 
                  : '0 15px 40px rgba(255, 255, 255, 0.3)',
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="text-base">{chip.icon}</span> {chip.text}
            </motion.span>
          ))}
        </motion.div>

        {/* Decorative Bottom Element with 3D */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, z: -30 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ transform: 'translateZ(20px)' }}
        >
          <motion.div
            className="flex items-center gap-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#c9a961] to-transparent shadow-[0_0_10px_rgba(201,169,97,0.6)]" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf9f7] to-transparent z-10 pointer-events-none" />
    </section>
  );
}

import { Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      style={{ perspective: '1000px' }}
    >
      {/* 3D Rotating Product Carousel Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-[#2d2d2d]/90 to-black/95" />
        
        {/* Carousel Container */}
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

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Animated Grid Pattern with 3D effect */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(201, 169, 97, 0.2) 2px, transparent 2px),
                           linear-gradient(90deg, rgba(201, 169, 97, 0.2) 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />

      {/* Subtle Floating Sparkles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
            <Star className="w-3 h-3 text-[#c9a961] fill-[#c9a961] drop-shadow-[0_0_8px_rgba(201,169,97,0.6)]" />
          </motion.div>
        ))}
      </div>

      {/* Main Content with 3D Transform */}
      <motion.div
        className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto"
        style={{
          transform: `rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
          transformStyle: 'preserve-3d',
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

        {/* Main Headline with 3D depth */}
        <motion.h1
          className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 50, z: -100 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(201, 169, 97, 0.4), 0 10px 30px rgba(0, 0, 0, 0.5)',
            transform: 'translateZ(60px)',
            transformStyle: 'preserve-3d',
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

        {/* Subtitle with 3D positioning */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, z: -50 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ transform: 'translateZ(40px)' }}
        >
          <p className="text-lg sm:text-xl text-white/95 font-light tracking-[0.2em] uppercase">
            Custom Jewelry & Hampers by
          </p>
        </motion.div>

        {/* Brand Name with 3D glow */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, scale: 0.8, z: -80 }}
          animate={{ opacity: 1, scale: 1, z: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ transform: 'translateZ(80px)' }}
        >
          <motion.p
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#c9a961] font-bold tracking-wide"
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

        {/* CTA Buttons with 3D lift */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
          initial={{ opacity: 0, y: 30, z: -60 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}
        >
          <motion.button
            onClick={() => onNavigate('products')}
            className="relative px-12 py-5 bg-gradient-to-r from-[#c9a961] to-[#d4b76e] text-white font-semibold rounded-full shadow-2xl overflow-hidden group text-lg"
            whileHover={{ scale: 1.1, z: 20, rotateX: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 20px 40px rgba(201, 169, 97, 0.4), 0 10px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#d4b76e] to-[#e5c77f]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 tracking-wider flex items-center gap-2">
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
            className="relative px-12 py-5 border-2 border-white/80 text-white font-semibold rounded-full backdrop-blur-md bg-white/5 shadow-xl overflow-hidden group text-lg"
            whileHover={{ scale: 1.1, z: 20, rotateX: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{
              transformStyle: 'preserve-3d',
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

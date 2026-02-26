import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-[#2d2d2d]/75" />
        
        {/* Animated Gold Accent Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-[#c9a961]/5 via-transparent to-[#c9a961]/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#c9a961]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Subtle Shimmer Effect */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(201, 169, 97, 0.1) 50%, transparent 100%)',
        }}
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        {/* Sparkle Icon with Animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="w-14 h-14 text-[#c9a961] mx-auto drop-shadow-lg" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Main Headline with Fade In */}
        <motion.h1
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Handcrafted with Love
        </motion.h1>

        {/* Subtitle with Fade In */}
        <motion.p
          className="text-lg sm:text-xl text-white/90 mb-3 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Custom Jewelry & Hampers by
        </motion.p>

        {/* Brand Name with Glow Effect */}
        <motion.p
          className="font-serif text-3xl sm:text-4xl text-[#c9a961] mb-12 font-medium drop-shadow-[0_0_15px_rgba(201,169,97,0.5)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Spark Soul
        </motion.p>

        {/* CTA Buttons with Stagger Animation */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            onClick={() => onNavigate('products')}
            className="px-10 py-4 bg-[#c9a961] text-white font-medium rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 tracking-wide">Shop Now</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#d4b76e] to-[#c9a961]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => onNavigate('about')}
            className="px-10 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#2d2d2d] transition-all duration-300 shadow-lg backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="tracking-wide">Our Story</span>
          </motion.button>
        </motion.div>

        {/* Feature Chips with Stagger Animation */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[
            { icon: '✨', text: 'Handmade', special: false },
            { icon: '🎁', text: 'Custom Gifts', special: false },
            { icon: '⭐', text: 'Premium Finish', special: true },
            { icon: '⚡', text: 'Fast Response', special: false },
          ].map((chip, index) => (
            <motion.span
              key={chip.text}
              className={`px-4 py-2 backdrop-blur-sm text-sm rounded-full ${
                chip.special
                  ? 'bg-[#c9a961]/20 border border-[#c9a961]/40 text-[#c9a961]'
                  : 'bg-white/10 border border-white/20 text-white'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {chip.icon} {chip.text}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf9f7] to-transparent z-10 pointer-events-none" />
    </section>
  );
}

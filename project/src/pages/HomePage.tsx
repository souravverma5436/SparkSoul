import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Heart, Zap } from 'lucide-react';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
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
        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#c9a961] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        {/* Sparkle Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            <Sparkles className="w-14 h-14 text-[#c9a961] mx-auto" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight tracking-tight"
        >
          Handcrafted with Love
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-white/90 mb-3 font-light tracking-wide"
        >
          Custom Jewelry & Hampers by
        </motion.p>

        {/* Brand Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          className="font-serif text-3xl sm:text-4xl text-[#c9a961] mb-12 font-medium"
        >
          Spark Soul
        </motion.p>

        {/* CTA Buttons - NO ARROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12"
        >
          {/* Primary Button */}
          <motion.button
            onClick={() => onNavigate('products')}
            className="group relative px-10 py-4 bg-[#c9a961] text-white font-medium rounded-full overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 tracking-wide">Shop Now</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            onClick={() => onNavigate('about')}
            className="px-10 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#2d2d2d] transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="tracking-wide">Our Story</span>
          </motion.button>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
          className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#c9a961]" strokeWidth={2} />
            <span className="font-light tracking-wide">Handmade</span>
          </div>
          <div className="w-1 h-1 bg-white/40 rounded-full hidden sm:block" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c9a961]" strokeWidth={2} />
            <span className="font-light tracking-wide">Custom Gifts</span>
          </div>
          <div className="w-1 h-1 bg-white/40 rounded-full hidden sm:block" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#c9a961]" strokeWidth={2} />
            <span className="font-light tracking-wide">Fast Response</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('about')}
          >
            <span className="text-white/60 text-xs font-light tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 text-white/60" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf9f7] to-transparent z-10" />
    </section>
  );
}

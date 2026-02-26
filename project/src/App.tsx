import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 bg-gradient-to-br from-[#2d2d2d] via-[#1a1a1a] to-black z-50 flex items-center justify-center overflow-hidden"
          >
            {/* Animated Background Pattern - Reduced on mobile */}
            <div className="absolute inset-0 opacity-5 sm:opacity-10">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(201, 169, 97, 0.3) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(201, 169, 97, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '60px 60px',
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '60px 60px'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>

            {/* Floating Sparkles - Fewer on mobile */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#c9a961] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    boxShadow: '0 0 10px rgba(201, 169, 97, 0.8)',
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>

            <div className="text-center relative z-10 px-4 sm:px-6 max-w-2xl w-full">
              {/* Logo/Icon with Elegant Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="mb-6 sm:mb-8"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <svg
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#c9a961"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: 'easeInOut' }}
                    />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Brand Name with Responsive Sizing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-3 sm:mb-4"
              >
                <h1 
                  className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#c9a961] mb-2"
                  style={{
                    textShadow: '0 0 40px rgba(201, 169, 97, 0.5), 0 4px 20px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  Spark Soul
                </h1>
              </motion.div>

              {/* Tagline - Responsive */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mb-6 sm:mb-8"
              >
                <p className="text-white/80 text-base sm:text-lg lg:text-xl font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2">
                  Handcrafted Elegance
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-white/60 text-xs sm:text-sm px-4">
                  <span>✨ Jewelry</span>
                  <span className="w-1 h-1 bg-[#c9a961] rounded-full"></span>
                  <span>🎁 Hampers</span>
                  <span className="w-1 h-1 bg-[#c9a961] rounded-full"></span>
                  <span>💎 Gifts</span>
                </div>
              </motion.div>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1.3 }}
                className="h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mb-6 sm:mb-8 mx-auto max-w-xs sm:max-w-md"
              />

              {/* Loading Progress Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mb-3 sm:mb-4"
              >
                <div className="relative w-48 sm:w-64 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#c9a961] to-[#d4b76e] rounded-full"
                    style={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>
              </motion.div>

              {/* Loading Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-white/50 text-xs sm:text-sm font-light tracking-wider"
              >
                Preparing your experience...
              </motion.p>

              {/* Subtitle Quote - Hidden on very small screens */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="mt-8 sm:mt-12 hidden sm:block"
              >
                <p className="text-white/40 text-xs sm:text-sm italic font-light">
                  "Where every piece tells a story"
                </p>
              </motion.div>
            </div>

            {/* Bottom Decorative Element - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[#c9a961]/50"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
          <main>
            <HomePage onNavigate={handleNavigate} />
            <AboutPage />
            <ProductsPage />
            <GalleryPage />
            <ContactPage />
          </main>
          <Footer onNavigate={handleNavigate} />
          <BackToTop />
        </motion.div>
      )}
    </>
  );
}

export default App;

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const brandRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuredImageRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const pinLength = isMobile ? '180vh' : '250vh';
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animations if user prefers reduced motion
      return;
    }

    const ctx = gsap.context(() => {
      // Create main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: `+=${pinLength}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Background zoom and parallax
      tl.to(backgroundRef.current, {
        scale: 1.08,
        y: 50,
        ease: 'none'
      }, 0);

      // Heading reveal
      tl.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      }, 0.1);

      // Subtitle reveal
      tl.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      }, 0.2);

      // Brand name reveal
      tl.from(brandRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      }, 0.3);

      // Buttons reveal with stagger
      tl.from(buttonsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
        ease: 'power2.out'
      }, 0.4);

      // Featured jewelry image animation
      tl.fromTo(featuredImageRef.current, 
        {
          x: isMobile ? 0 : -100,
          y: 0,
          scale: 0.9,
          rotation: 0,
          opacity: 0
        },
        {
          x: isMobile ? 0 : 150,
          y: isMobile ? 0 : -30,
          scale: isMobile ? 1 : 1.15,
          rotation: isMobile ? 0 : 3,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        }, 
        0.5
      );

      // Chips reveal with stagger
      tl.from(chipsRef.current?.children || [], {
        scale: 0.8,
        opacity: 0,
        duration: 0.2,
        stagger: 0.08,
        ease: 'back.out(1.7)'
      }, 0.7);

      // Fade out scroll indicator
      tl.to(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.2
      }, 0.3);

      // Transition out: move image down and fade
      tl.to(featuredImageRef.current, {
        y: isMobile ? 100 : 200,
        scale: 0.7,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      }, 0.9);

      // Fade out all hero content
      tl.to([headingRef.current, subtitleRef.current, brandRef.current, buttonsRef.current, chipsRef.current], {
        opacity: 0,
        y: -30,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in'
      }, 0.9);

    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        {/* Sparkle Icon */}
        <div className="mb-8">
          <Sparkles className="w-14 h-14 text-[#c9a961] mx-auto" strokeWidth={1.5} />
        </div>

        {/* Main Headline */}
        <h1
          ref={headingRef}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight tracking-tight"
        >
          Handcrafted with Love
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-white/90 mb-3 font-light tracking-wide"
        >
          Custom Jewelry & Hampers by
        </p>

        {/* Brand Name */}
        <p
          ref={brandRef}
          className="font-serif text-3xl sm:text-4xl text-[#c9a961] mb-12 font-medium"
        >
          Spark Soul
        </p>

        {/* CTA Buttons - NO ARROW, Clean Gap */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={() => onNavigate('products')}
            className="px-10 py-4 bg-[#c9a961] text-white font-medium rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <span className="tracking-wide">Shop Now</span>
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="px-10 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#2d2d2d] transition-all duration-300 shadow-lg"
          >
            <span className="tracking-wide">Our Story</span>
          </button>
        </div>

        {/* Nike-Style Feature Chips */}
        <div
          ref={chipsRef}
          className="flex flex-wrap justify-center items-center gap-3 mb-8"
        >
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-full">
            ✨ Handmade
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-full">
            🎁 Custom Gifts
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-[#c9a961]/30 text-[#c9a961] text-sm rounded-full">
            ⭐ Premium Finish
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-full">
            ⚡ Fast Response
          </span>
        </div>
      </div>

      {/* Featured Jewelry Image - Main Moving Element */}
      <div
        ref={featuredImageRef}
        className="absolute z-20 pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform, opacity',
        }}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 bg-[#c9a961]/20 rounded-full blur-3xl" />
          <img
            src="/bracelet.jpeg"
            alt="Featured Jewelry"
            className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
            style={{
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer animate-bounce">
          <span className="text-white/60 text-xs font-light tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf9f7] to-transparent z-10 pointer-events-none" />
    </section>
  );
}

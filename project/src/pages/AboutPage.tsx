import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Sparkles, Gift, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Image reveal
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        scale: 1.03,
        opacity: 0,
        ease: 'power2.out'
      });

      // Text block reveal
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        },
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      });

      // Feature cards stagger
      gsap.from(cardsRef.current?.children || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Heart,
      title: 'Handmade with Love',
      description: 'Every piece is carefully crafted with attention to detail and passion'
    },
    {
      icon: Sparkles,
      title: 'Unique Designs',
      description: 'Original creations that reflect individuality and style'
    },
    {
      icon: Gift,
      title: 'Custom Creations',
      description: 'Personalized hampers and jewelry for your special moments'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="mb-6">
            <Sparkles className="w-10 h-10 text-[#c9a961] mx-auto" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2d2d2d] mb-4">
            Our Story
          </h2>
          <div className="w-20 h-0.5 bg-[#c9a961] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div ref={imageRef}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/green-buta-shaped-stone-jewelry.jpg"
                alt="Handmade jewelry"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Spotlight Anchor - Safe position near image */}
            <div 
              className="spotlight-anchor absolute -right-8 top-1/2 -translate-y-1/2 w-1 h-1 pointer-events-none" 
              data-spotlight="about"
            />
          </div>

          <div ref={textRef} className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold text-[#2d2d2d]">
              Welcome to Spark Soul
            </h3>
            <p className="text-[#5a5a5a] leading-relaxed text-base">
              Spark Soul is a small creative business founded by a passionate artisan who believes in the magic of handmade designs and meaningful gifts. Every piece we create tells a story and carries the warmth of personal touch.
            </p>
            <p className="text-[#5a5a5a] leading-relaxed text-base">
              Specializing in handcrafted jewelry, customized hampers, elegant bracelets, and unique accessories, we pour love and creativity into everything we make. Each creation is designed to spark joy and celebrate life's special moments.
            </p>
            <p className="text-[#5a5a5a] leading-relaxed text-base">
              Whether you're looking for a thoughtful gift or something special for yourself, we're here to bring your vision to life with personalized care and attention to detail.
            </p>

            <a
              href="https://instagram.com/spark_soul.24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#c9a961] font-medium hover:text-[#b8935f] transition-colors pt-4"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow us @spark_soul.24</span>
            </a>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#c9a961]/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-[#c9a961]" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-xl font-semibold text-[#2d2d2d] mb-3 text-center">
                  {feature.title}
                </h4>
                <p className="text-[#5a5a5a] text-center leading-relaxed text-sm flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

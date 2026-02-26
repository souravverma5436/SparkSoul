import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Sparkles } from 'lucide-react';
import * as React from 'react';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

export default function ProductsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Pink Flower Hair Accessory',
      category: 'Accessories',
      description:
        'Add a vibrant, effortless touch of summer charm with this bold pink flower hair accessory.',
      image: '/Pink Flower Hair Accessory.jpeg',
    },
    {
      id: 2,
      name: 'Bracelet with Butterfly Charm',
      category: 'Bracelets',
      description:
        'A wrist is gracefully adorned with two beaded bracelets of clear and lavender crackle crystal, one featuring a purple butterfly charm.',
      image: '/bracelet.jpeg',
    },
    {
      id: 3,
      name: 'Luxury Gift Hamper',
      category: 'Customized Hampers',
      description: 'Curated gift hamper with personalized items',
      image:
        'https://images.pexels.com/photos/264869/pexels-photo-264869.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      name: 'Celebration Hamper',
      category: 'Customized Hampers',
      description: 'Perfect for special occasions and celebrations',
      image: '/celebration hamper.png',
    },
    {
      id: 5,
      name: 'Heart-shaped Pink Gemstone Silver Ring',
      category: 'Jewelry',
      description: 'Delicate silver ring with a heart-shaped pink gemstone',
      image: '/Silver Ring.jpeg',
    },
    {
      id: 6,
      name: 'Gold Chain Bracelet',
      category: 'Bracelets',
      description: 'Elegant gold-plated evil eye chain bracelet',
      image: '/evil eye bracelet.jpeg',
    },
    {
      id: 7,
      name: 'Pink Lip Gloss',
      category: 'Accessories',
      description:
        'A miniature lip gloss container shaped like a small pink milkshake, filled with clear gloss and pink glitter.',
      image: '/lip gloss.jpeg',
    },
    {
      id: 8,
      name: 'Hair Clip',
      category: 'Accessories',
      description:
        'Brown hair clip with a tortoiseshell pattern, featuring a classic claw design for secure hold.',
      image: '/brown hair clip.jpeg',
    },
  ];

  const categories = ['All', 'Jewelry', 'Customized Hampers', 'Bracelets', 'Accessories'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleInstagramDM = (productName: string) => {
    const instagramUrl = 'https://www.instagram.com/spark_soul.24';
    window.open(instagramUrl, '_blank');
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Category pills slide in from left
      gsap.from(pillsRef.current?.children || [], {
        scrollTrigger: {
          trigger: pillsRef.current,
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        },
        x: -30,
        opacity: 0,
        stagger: 0.08,
        ease: 'power2.out'
      });

      // Product cards stagger reveal
      gsap.from(gridRef.current?.children || [], {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate product grid when category changes
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [selectedCategory]);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="mb-6">
            <Sparkles className="w-10 h-10 text-[#c9a961] mx-auto" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2d2d2d] mb-4">
            Our Products
          </h2>
          <div className="w-20 h-0.5 bg-[#c9a961] mx-auto rounded-full mb-6" />
          <p className="text-[#5a5a5a] text-base max-w-2xl mx-auto">
            Discover our collection of handcrafted jewelry and personalized gifts
          </p>
        </div>

        <div
          ref={pillsRef}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-7 py-3 rounded-full font-medium transition-all duration-300 text-sm hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-[#c9a961] text-white shadow-md'
                  : 'bg-white text-[#5a5a5a] hover:bg-gray-50 shadow-sm border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                <div className="relative overflow-hidden h-72">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-[#c9a961] text-xs font-medium rounded-full shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-[#2d2d2d] mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-[#5a5a5a] text-sm mb-5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <button
                    onClick={() => handleInstagramDM(product.name)}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white rounded-xl font-medium shadow-sm text-sm hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4" strokeWidth={2} />
                    <span>Message on Instagram</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

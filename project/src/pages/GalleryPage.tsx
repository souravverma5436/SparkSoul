import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export default function GalleryPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: '/bracelet.jpeg',
      title: 'Bracelet with Butterfly Charm',
      category: 'Accessories'
    },
    {
      id: 2,
      url: '/brown hair clip.jpeg',
      title: 'Brown Hair Clip',
      category: 'Accessories'
    },
    {
      id: 3,
      url: '/celebration hamper.png',
      title: 'Celebration Hamper',
      category: 'Hampers'
    },
    {
      id: 4,
      url: '/evil eye bracelet.jpeg',
      title: 'Evil Eye Bracelet',
      category: 'Bracelets'
    },
    {
      id: 5,
      url: '/lip gloss.jpeg',
      title: 'Lip Gloss',
      category: 'Accessories'
    },
    {
      id: 6,
      url: '/Pink Flower Hair Accessory.jpeg',
      title: 'Pink Flower Hair Accessory',
      category: 'Accessories'
    },
    {
      id: 7,
      url: '/Silver Ring.jpeg',
      title: 'Silver Ring',
      category: 'Accessories'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Elegant Brooch',
      category: 'Accessories'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Diamond Ring',
      category: 'Jewelry'
    },
    {
      id: 10,
      url: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Gemstone Collection',
      category: 'Jewelry'
    },
    {
      id: 11,
      url: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Vintage Necklace',
      category: 'Jewelry'
    },
    {
      id: 12,
      url: 'https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Gift Hamper Deluxe',
      category: 'Hampers'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Gallery grid stagger reveal
      gsap.from(gridRef.current?.children || [], {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        stagger: 0.05,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="mb-6">
            <Sparkles className="w-10 h-10 text-[#c9a961] mx-auto" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2d2d2d] mb-4">
            Our Gallery
          </h2>
          <div className="w-20 h-0.5 bg-[#c9a961] mx-auto rounded-full mb-6" />
          <p className="text-[#5a5a5a] text-base max-w-2xl mx-auto">
            Explore our collection of handcrafted creations
          </p>
          
          {/* Spotlight Anchor - Safe position top left */}
          <div 
            className="spotlight-anchor absolute left-8 sm:left-16 top-32 w-1 h-1 pointer-events-none" 
            data-spotlight="gallery"
          />
        </div>

        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex flex-col items-center justify-end p-4 transition-opacity duration-300">
                  <h3 className="text-white font-serif text-sm sm:text-base font-semibold mb-1 text-center">
                    {image.title}
                  </h3>
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#5a5a5a] mb-6 text-sm">Want to see more?</p>
          <a
            href="https://instagram.com/spark_soul.24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white font-medium rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <span>Follow us on Instagram</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 hover:rotate-90 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-xl p-4">
              <h3 className="text-white font-serif text-xl font-semibold mb-1">
                {selectedImage.title}
              </h3>
              <span className="text-white/80 text-sm">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

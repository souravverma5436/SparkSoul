import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { useState } from 'react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export default function GalleryPage() {
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

  return (
    <section id="gallery" className="py-24 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <Sparkles className="w-10 h-10 text-[#c9a961] mx-auto mb-6" strokeWidth={1.5} />
          </motion.div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2d2d2d] mb-4">
            Our Gallery
          </h2>
          <div className="w-20 h-0.5 bg-[#c9a961] mx-auto rounded-full mb-6" />
          <p className="text-[#5a5a5a] text-base max-w-2xl mx-auto">
            Explore our collection of handcrafted creations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end p-4 transition-opacity duration-300"
                >
                  <h3 className="text-white font-serif text-sm sm:text-base font-semibold mb-1 text-center">
                    {image.title}
                  </h3>
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                    {image.category}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#5a5a5a] mb-6 text-sm">Want to see more?</p>
          <motion.a
            href="https://instagram.com/spark_soul.24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white font-medium rounded-full shadow-lg"
            whileHover={{ scale: 1.02, boxShadow: '0 12px 30px rgba(225, 48, 108, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Follow us on Instagram</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-xl p-4">
                <h3 className="text-white font-serif text-xl font-semibold mb-1">
                  {selectedImage.title}
                </h3>
                <span className="text-white/80 text-sm">{selectedImage.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

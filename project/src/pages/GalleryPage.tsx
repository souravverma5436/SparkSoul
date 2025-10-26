import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';
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
      url: 'src/images/bracelet.jpeg',
      title: 'Bracelet with Butterfly Charm',
      category: 'Accessories'
    },
    {
      id: 2,
      url: 'src/images/brown hair clip.jpeg',
      title: 'Brown Hair Clip',
      category: 'Accessories'
    },
    {
      id: 3,
      url: 'src/images/celebration hamper.png',
      title: 'Celebration Hamper',
      category: 'Hampers'
    },
    {
      id: 4,
      url: 'src/images/evil eye bracelet.jpeg',
      title: 'Evil Eye Bracelet',
      category: 'Bracelets'
    },
    {
      id: 5,
      url: 'src/images/lip gloss.jpeg',
      title: 'Lip Gloss',
      category: 'Accessories'
    },
    {
      id: 6,
      url: 'src/images/Pink Flower Hair Accessory.jpeg',
      title: 'Pink Flower Hair Accessory',
      category: 'Accessories'
    },
    {
      id: 7,
      url: 'src/images/Silver Ring.jpeg',
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
    <section id="gallery" className="py-20 bg-gradient-to-br from-white via-[#f5f5dc]/30 to-[#f4c2c2]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <Sparkles className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
          </motion.div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4c2c2] mx-auto rounded-full mb-8" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our collection of handcrafted creations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-6 transition-opacity duration-300"
                >
                  <h3 className="text-white font-serif text-lg font-bold mb-2">
                    {image.title}
                  </h3>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                    {image.category}
                  </span>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="mt-4"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Want to see more?</p>
          <motion.a
            href="https://instagram.com/spark_soul.24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white font-semibold rounded-full shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(225, 48, 108, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Follow us on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full"
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
              ✕
            </motion.button>
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-4">
              <h3 className="text-white font-serif text-xl font-bold mb-1">
                {selectedImage.title}
              </h3>
              <span className="text-white/80 text-sm">{selectedImage.category}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

import { motion } from 'framer-motion';
import { Instagram, Sparkles } from 'lucide-react';
import * as React from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

export default function ProductsPage() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Pink Flower Hair Accessory',
      category: 'Accessory',
      description:
        'Add a vibrant, effortless touch of summer charm with this bold pink flower hair accessory.',
      image: 'src/images/Pink Flower Hair Accessory.jpeg',
    },
    {
      id: 2,
      name: 'Bracelet with Butterfly Charm',
      category: 'Bracelets',
      description:
        'A wrist is gracefully adorned with two beaded bracelets of clear and lavender crackle crystal, one featuring a purple butterfly charm.',
      image: 'src/images/bracelet.jpeg',
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
      image: 'src/images/celebration hamper.png',
    },
    {
      id: 5,
      name: 'Heart-shaped Pink Gemstone Silver Ring',
      category: 'Rings',
      description: 'Delicate silver ring with a heart-shaped pink gemstone',
      image: 'src/images/Silver Ring.jpeg',
    },
    {
      id: 6,
      name: 'Gold Chain Bracelet',
      category: 'Bracelets',
      description: 'Elegant gold-plated evil eye chain bracelet',
      image: 'src/images/evil eye bracelet.jpeg',
    },
    {
      id: 7,
      name: 'Pink Lip Gloss',
      category: 'Accessories',
      description:
        'A miniature lip gloss container shaped like a small pink milkshake, filled with clear gloss and pink glitter.',
      image: 'src/images/lip gloss.jpeg',
    },
    {
      id: 8,
      name: 'Hair Clip',
      category: 'Accessories',
      description:
        'Brown hair clip with a tortoiseshell pattern, featuring a classic claw design for secure hold.',
      image: 'src/images/brown hair clip.jpeg',
    },
  ];

  const categories = ['All', 'Jewelry', 'Customized Hampers', 'Bracelets', 'Accessories'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleInstagramRedirect = (productName: string) => {
    const instagramUrl = `https://www.instagram.com/spark_soul.24/?message=${encodeURIComponent(
      `Hi! I'm interested in ordering: ${productName}`
    )}`;
    window.open(instagramUrl, '_blank');
  };

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-[#f5f5dc]/30 via-white to-[#f4c2c2]/10"
    >
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
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4c2c2] mx-auto rounded-full mb-8" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our collection of handcrafted jewelry and personalized gifts
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#f4c2c2] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f4c2c2]/20">
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-[#d4af37] text-sm font-semibold rounded-full">
                      {product.category}
                    </span>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-end">
                    <motion.button
                      onClick={() => handleInstagramRedirect(product.name)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#E1306C] to-[#F77737] text-white rounded-full font-medium shadow-md"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 10px 25px rgba(225, 48, 108, 0.3)',
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram className="w-4 h-4" />
                      <span className="text-sm">Message</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
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

  const handleWhatsAppMessage = (productName: string) => {
    const message = `Hi! I'm interested in ordering: ${productName}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="products"
      className="py-24 bg-white"
    >
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
            Our Products
          </h2>
          <div className="w-20 h-0.5 bg-[#c9a961] mx-auto rounded-full mb-6" />
          <p className="text-[#5a5a5a] text-base max-w-2xl mx-auto">
            Discover our collection of handcrafted jewelry and personalized gifts
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-7 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                selectedCategory === category
                  ? 'bg-[#c9a961] text-white shadow-md'
                  : 'bg-white text-[#5a5a5a] hover:bg-gray-50 shadow-sm border border-gray-200'
              }`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden h-72">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
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

                    <motion.button
                      onClick={() => handleWhatsAppMessage(product.name)}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl font-medium shadow-sm text-sm"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-4 h-4" strokeWidth={2} />
                      <span>Message on WhatsApp</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

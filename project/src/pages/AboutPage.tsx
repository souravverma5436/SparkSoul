import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift, Instagram } from 'lucide-react';

export default function AboutPage() {
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
    <section id="about" className="py-20 bg-gradient-to-br from-white via-[#f5f5dc]/30 to-[#f4c2c2]/10">
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
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4c2c2] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#d4af37]/20 to-[#f4c2c2]/20 rounded-2xl"
                animate={{ rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <img
                src="src/images/green-buta-shaped-stone-jewelry.jpg"
                alt="Handmade jewelry"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-3xl font-bold text-gray-900">
              Welcome to Spark Soul
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Spark Soul is a small creative business founded by a passionate artisan who believes in the magic of handmade designs and meaningful gifts. Every piece we create tells a story and carries the warmth of personal touch.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Specializing in handcrafted jewelry, customized hampers, elegant bracelets, and unique accessories, we pour love and creativity into everything we make. Each creation is designed to spark joy and celebrate life's special moments.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Whether you're looking for a thoughtful gift or something special for yourself, we're here to bring your vision to life with personalized care and attention to detail.
            </p>

            <motion.a
              href="https://instagram.com/spark_soul.24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#d4af37] font-semibold hover:text-[#f4c2c2] transition-colors"
              whileHover={{ x: 5 }}
            >
              <Instagram className="w-5 h-5" />
              <span>Follow us @spark_soul.24</span>
            </motion.a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f4c2c2]/20">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f4c2c2] rounded-full flex items-center justify-center mb-6 mx-auto"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

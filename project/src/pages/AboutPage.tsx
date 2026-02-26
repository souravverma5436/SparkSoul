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
    <section id="about" className="py-24 bg-[#faf9f7]">
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
            Our Story
          </h2>
          <div className="w-20 h-0.5 bg-[#c9a961] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <motion.img
                src="/green-buta-shaped-stone-jewelry.jpg"
                alt="Handmade jewelry"
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
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

            <motion.a
              href="https://instagram.com/spark_soul.24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#c9a961] font-medium hover:text-[#b8935f] transition-colors pt-4"
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
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-[#c9a961]/10 rounded-full flex items-center justify-center mb-6 mx-auto"
                >
                  <feature.icon className="w-7 h-7 text-[#c9a961]" strokeWidth={1.5} />
                </motion.div>
                <h4 className="font-serif text-xl font-semibold text-[#2d2d2d] mb-3 text-center">
                  {feature.title}
                </h4>
                <p className="text-[#5a5a5a] text-center leading-relaxed text-sm flex-grow">
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

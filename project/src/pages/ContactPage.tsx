import { motion } from 'framer-motion';
import { Instagram, Mail, Send, Sparkles, MapPin, Phone, Images } from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Instagram,
      title: 'Instagram',
      description: '@spark_soul.24',
      action: 'Follow Us',
      link: 'https://instagram.com/spark_soul.24',
      color: '#E1306C'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email',
      action: 'Email Us',
      link: 'mailto:info@sparksoul.com',
      color: '#d4af37'
    },
    {
      icon: Images,
      title: 'Gallery',
      description: 'Explore our jewelry collection',
      action: 'View Gallery',
      link: '/gallery',
      color: '#f4c2c2'
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#f5f5dc]/30 via-white to-[#f4c2c2]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4c2c2] mx-auto rounded-full mb-8" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question or want to place a custom order? We'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target={method.link.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f4c2c2]/20 text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: `${method.color}20` }}
                >
                  <method.icon className="w-8 h-8" style={{ color: method.color }} />
                </motion.div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <motion.div
                  className="inline-flex items-center space-x-2 text-sm font-semibold"
                  style={{ color: method.color }}
                  whileHover={{ x: 5 }}
                >
                  <span>{method.action}</span>
                  <Send className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Google Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-[#f4c2c2]/20 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">
            Contact Us via Google Form
          </h3>
          <p className="text-gray-600 mb-8">
            Please fill out our inquiry form and we’ll get back to you soon. 
            For collaborations or custom requests, you can also message us on Instagram.
          </p>

          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgQd_q9ad7VCwqtVDWjmuTtATKyc9WJ6Sf01WAwICc6d1Osw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#f4c2c2] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <span>Open Contact Form</span>
            <Send className="w-5 h-5 ml-2" />
          </motion.a>

          <div className="mt-8 flex justify-center gap-6 text-gray-500">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#d4af37]" />
              <span>Serving customers worldwide</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-[#f4c2c2]" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

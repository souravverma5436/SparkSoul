import { motion } from 'framer-motion';
import { Instagram, Mail, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/spark_soul.24',
      label: 'Instagram',
      color: '#E1306C'
    },
    {
      icon: Mail,
      href: '/#contact', // scrolls to contact section
      label: 'Contact',
      color: '#d4af37'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#f5f5dc] via-white to-[#f4c2c2]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#d4af37]" />
              <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4c2c2] bg-clip-text text-transparent">
                Spark Soul
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Handcrafted with love. Creating unique jewelry and meaningful gifts for every special moment.
            </p>
          </motion.div>

          {/* Middle Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h4 className="font-serif text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Products', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button className="text-gray-600 hover:text-[#d4af37] transition-colors text-sm">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="font-serif text-lg font-semibold text-gray-800 mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ color: social.color }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-600">@spark_soul.24</p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 text-center"
        >
          <p className="text-sm text-gray-600 flex items-center justify-center">
            © {currentYear} Spark Soul. Made with{' '}
            <Heart className="w-4 h-4 mx-1 text-[#f4c2c2] fill-current" /> for you
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import { Instagram, Mail, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
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
      href: 'mailto:Sparksoul156@gmail.com',
      label: 'Email',
      color: '#c9a961'
    }
  ];

  const quickLinks = ['About', 'Products', 'Gallery', 'Contact'];

  return (
    <footer className="bg-[#faf9f7] pt-20 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#c9a961]" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl font-semibold text-[#2d2d2d]">
                Spark Soul
              </h3>
            </div>
            <p className="text-[#5a5a5a] text-sm leading-relaxed">
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
            <h4 className="font-serif text-lg font-semibold text-[#2d2d2d] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-[#5a5a5a] hover:text-[#c9a961] transition-colors text-sm"
                  >
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
            <h4 className="font-serif text-lg font-semibold text-[#2d2d2d] mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white shadow-sm hover:shadow-md transition-all flex items-center justify-center"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ color: social.color }}
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-[#5a5a5a]">@spark_soul.24</p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 text-center"
        >
          <a
            href="https://svermaportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#5a5a5a] hover:text-[#c9a961] transition-colors inline-block"
          >
            © {currentYear} Sv_desizns. All rights reserved. Designed By Sourav Verma
          </a>
        </motion.div>
      </div>
    </footer>
  );
}

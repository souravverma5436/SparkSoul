import { motion } from 'framer-motion';
import { Instagram, Mail, Send, Sparkles, Clock, Globe } from 'lucide-react';

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
      description: 'Sparksoul156@gmail.com',
      action: 'Email Us',
      link: 'mailto:Sparksoul156@gmail.com',
      color: '#c9a961'
    }
  ];

  return (
    <section
      id="contact"
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
            Get in Touch
          </h2>
          <div className="w-20 h-0.5 bg-[#c9a961] mx-auto rounded-full mb-6" />
          <p className="text-[#5a5a5a] text-base max-w-2xl mx-auto">
            Have a question or want to place a custom order? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target={method.link.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 text-center h-full flex flex-col justify-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: `${method.color}15` }}
                >
                  <method.icon className="w-7 h-7" style={{ color: method.color }} strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-serif text-xl font-semibold text-[#2d2d2d] mb-2">
                  {method.title}
                </h3>
                <p className="text-[#5a5a5a] mb-4 text-sm">{method.description}</p>
                <motion.div
                  className="inline-flex items-center gap-2 text-sm font-medium mx-auto"
                  style={{ color: method.color }}
                  whileHover={{ x: 5 }}
                >
                  <span>{method.action}</span>
                  <Send className="w-4 h-4" strokeWidth={2} />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#faf9f7] to-white rounded-3xl p-10 sm:p-12 shadow-lg border border-gray-100 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a961]/5 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#c9a961]/5 rounded-full -ml-12 -mb-12" />
          
          <div className="relative z-10">
            <h3 className="font-serif text-3xl font-semibold text-[#2d2d2d] mb-4">
              Contact Us via Google Form
            </h3>
            <p className="text-[#5a5a5a] mb-8 text-sm leading-relaxed max-w-xl mx-auto">
              Please fill out our inquiry form and we'll get back to you soon.
              For collaborations or custom requests, you can also message us on Instagram.
            </p>

            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfUeywNNfn5m7wmEisZnwXeR7DKhxlZROSn6VJ2wnadGg-llw/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#c9a961] text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>Open Contact Form</span>
              <Send className="w-5 h-5" strokeWidth={2} />
            </motion.a>

            <div className="mt-10 flex flex-wrap justify-center gap-8 text-[#5a5a5a] text-sm">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#c9a961]" strokeWidth={1.5} />
                <span>Serving worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#c9a961]" strokeWidth={1.5} />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

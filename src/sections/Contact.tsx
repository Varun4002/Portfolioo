import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Let's Connect</h2>
          
          <div className="space-y-8">
            <motion.form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 transition-colors"
                />
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Send Message
              </motion.button>
            </motion.form>

            <div className="flex justify-center gap-8 mt-16">
              {[
                { icon: Github, link: 'https://github.com' },
                { icon: Linkedin, link: 'https://linkedin.com' },
                { icon: Mail, link: 'mailto:contact@varun.com' }
              ].map(({ icon: Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
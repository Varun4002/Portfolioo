import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Varun
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Full Stack Developer & Tech Innovator
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 border border-blue-400 rounded-full hover:bg-blue-400/10 transition-colors"
          >
            Contact Me
          </motion.a>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 mx-auto text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
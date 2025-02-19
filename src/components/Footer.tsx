import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-12 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-400"
        >
          <p className="mb-4">
            Crafted with passion using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Varun. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
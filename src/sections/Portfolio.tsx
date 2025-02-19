import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Contact } from '@/sections/Contact';
import { ParticleBackground } from './components/Particles';

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900/20 to-black text-white">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
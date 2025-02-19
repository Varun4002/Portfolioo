import { motion } from 'framer-motion';

const skills = [
  {
    name: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    name: 'Backend Development',
    items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB']
  },
  {
    name: 'Mobile & DevOps',
    items: ['React Native', 'Swift', 'Docker', 'AWS', 'Git']
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">{skill.name}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 p-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-gray-400">
              Currently exploring advanced TypeScript patterns, WebAssembly integration,
              and contributing to open-source projects. Always looking for new challenges
              that push the boundaries of modern web development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
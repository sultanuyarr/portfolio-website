import { Monitor, Smartphone, Wrench } from "lucide-react";
import { motion } from "motion/react";

const skillsData = [
  {
    id: 1,
    icon: "💻",
    title: "Programlama Dilleri",
    skills: ["Java", "C++", "C#", "HTML/CSS/JS", "TypeScript", "PL/SQL"]
  },
  {
    id: 2,
    icon: "📱",
    title: "Mobil & Grafik",
    skills: ["Flutter", "FlutterFlow", "OpenGL", "Android", "iOS"]
  },
  {
    id: 3,
    icon: "🔧",
    title: "Araçlar & Teknolojiler",
    skills: ["Spring Boot", "MyQL", "Git", "Weka", "MS Office", "NLP", "Machine Learning"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-pink-500 mb-16 text-[32px]">
          Yeteneklerim
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <motion.div 
              key={category.id}
              className="bg-white rounded-2xl p-8 border-2 border-pink-300 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div 
                className="text-5xl mb-4 text-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              >
                {category.icon}
              </motion.div>
              <h3 className="text-pink-500 text-center mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
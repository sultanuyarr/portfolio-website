import { motion } from "motion/react";

const experiences = [
  {
    id: 1,
    icon: "💼",
    title: "Proje Yönetimi Stajyeri",
    company: "SCA SOCIAL",
    location: "",
    description: "Karar verme süreçleri ve stratejiler geliştirme, bilişim hukuku kapsamında kişisel verilerin korunması ve yapay zeka veri bilimi adaptasyonu ile denetimli ve denetimsiz öğrenme yöntemleri hakkında deneyim kazandım."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-pink-500 mb-16 text-[32px]">
          İş Deneyimi
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="bg-white rounded-2xl p-8 border-2 border-pink-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="text-4xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {exp.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-pink-500 mb-1">{exp.title}</h3>
                  <p className="text-pink-400 mb-4">{exp.company}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
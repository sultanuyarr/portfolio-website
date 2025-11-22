import { motion } from "motion/react";

const education = [
  {
    id: 1,
    icon: "🎓",
    title: "Yazılım Mühendisliği",
    institution: "Beykent Üniversitesi",
    year: "4. Sınıf - Devam Ediyor",
    description: "Yazılım geliştirme, mobil programlama, veri analizi ve web teknolojileri konularında eğitim alıyorum."
  },
  {
    id: 2,
    icon: "🏫",
    title: "Sayısal Bölümü",
    institution: "Beşir Balcıoğlu Anadolu Lisesi",
    year: "2018-2022",
    description: "Matematik, fizik ve bilgisayar bilimleri alanlarında temel eğitim aldım. Sayısal beceriler, analitik düşünce ve problem çözme becerilerine odaklandım."
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-pink-500 mb-16 text-[32px]">
          Eğitim
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.id}
              className="bg-white rounded-2xl p-6 border-2 border-pink-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="text-4xl flex-shrink-0"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  {edu.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-pink-500 mb-1">{edu.title}</h3>
                  <p className="text-pink-500 mb-1">{edu.institution}</p>
                  <p className="text-gray-500 mb-3">{edu.year}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {edu.description}
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
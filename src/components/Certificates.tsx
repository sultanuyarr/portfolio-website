import { motion } from "motion/react";

const certificates = [
  {
    id: 1,
    icon: "📱",
    title: "Flutter ile Uygulama Geliştirme",
    institution: "Udemy",
    year: "2025",
    description: "Android & iOS platformları için cross-platform mobil uygulama geliştirme eğitimi."
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Siber Güvenlik Analisti Programı",
    institution: "Akbank",
    year: "2024",
    description: "Siber güvenlik tehditleri, analiz teknikleri ve güvenlik protokolleri konusunda uzmanlaştım."
  },
  {
    id: 3,
    icon: "🚀",
    title: "Yazının Teknoloji Liderleri",
    institution: "Turkcell",
    year: "2024",
    description: "Teknoloji liderliği, inovasyon ve gelişmiş teknoloji üzerine kapsamlı eğitim programı."
  },
  {
    id: 4,
    icon: "⚖️",
    title: "Teknolojide Fırsat Eşitliği",
    institution: "Yapı Kredi",
    year: "2024",
    description: "Teknoloji sektöründe fırsat eşitliği, çeşitlilik ve kapsayıcılık konularında farkındalık geliştirildi."
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-pink-500 mb-16 text-[32px]">
          Sertifikalarım
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="bg-white rounded-2xl p-6 border-2 border-pink-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="text-4xl flex-shrink-0"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.8,
                  }}
                >
                  {cert.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-pink-500 mb-1">{cert.title}</h3>
                  <p className="text-pink-500 mb-1">{cert.institution}</p>
                  <p className="text-pink-500 mb-3">{cert.year}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {cert.description}
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
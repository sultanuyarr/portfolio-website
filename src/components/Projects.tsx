import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    icon: "🤖",
    title: "AI Body Scanner (TÜBİTAK Projesi)",
    description: "Bilgisayar görüntü ve yapay zeka teknolojileri kullanılarak vücut kompozisyonunu analiz eden ve kişiselleştirilmiş sağlık önerileri sunan sistem.",
    tags: ["Flutter", "Firebase", "Python", "PyCharm IDE", "Jupyter Notebook", "MediaPipe", "Google BiLM Kit", "Google Cloud", "FastAPI", "Google Sheets"]
  },
  {
    id: 2,
    icon: "🧠",
    title: "Duygu Analizi Projesi",
    description: "Engelli bireylerin psikolojik durumlarının erken tespiti için makine öğrenmesi ve NLP teknikleri kullanılarak geliştirildi. TF-IDF, Naive Bayes, LSTM ve SVM algoritmaları kullanıldı.",
    tags: ["NLP", "Machine Learning", "Python", "LSTM"]
  },
  {
    id: 3,
    icon: "🎮",
    title: "OpenGL Görselleştirme",
    description: "Temel grafik programlama prensipleri ile 2D ve 3D grafik nesnelerinin çizimi, geometri işlemleri, renk yönetimi ve kamera ayarları gerçekleştirildi.",
    tags: ["OpenGL", "C++", "3D Graphics", "GitHub"]
  },
  {
    id: 4,
    icon: "🏛️",
    title: "Banka Kredi Sistemi",
    description: "Java ve Spring Boot kullanılarak banka müşterilerinin kredi başvurularını otomatik değerlendiren sistem. MySQL veritabanı ile entegre çalışır.",
    tags: ["Java", "Spring Boot", "MySQL", "Backend"]
  },
  {
    id: 5,
    icon: "💼",
    title: "Kişisel Portfolyo",
    description: "Modern ve responsive tasarım ile kişisel portfolyo websitesi. Animasyonlar ve interaktif öğeler ile zenginleştirilmiş kullanıcı deneyimi.",
    tags: ["React", "TypeScript", "Tailwind", "Responsive"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-pink-500 mb-16 text-[32px]">
          Projelerim
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-2xl p-8 border-2 border-pink-300 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div 
                className="text-5xl mb-4"
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
                {project.icon}
              </motion.div>
              <h3 className="text-pink-500 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm"
                  >
                    {tag}
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
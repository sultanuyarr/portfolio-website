import { motion } from "motion/react";
import logoImage from "figma:asset/cf95fbb0e347fb64bf81d52262d8e2cb2575e829.png";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Floating Background Computers */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1000,
            }}
            animate={{
              x: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
              y: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            💻
          </motion.div>
        ))}
      </div>

      {/* Crown - Top Left */}
      <motion.div 
        className="absolute top-8 left-8 text-4xl"
        animate={{
          rotate: [0, -10, 10, -10, 0],
          scale: [1, 1.1, 1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        👑
      </motion.div>

      {/* Profile Image - Pink Circles */}
      <div className="relative mb-8 z-10">
        <motion.div 
          className="w-32 h-32 rounded-full bg-pink-200 flex items-center justify-center overflow-hidden"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <img 
            src={logoImage} 
            alt="Logo" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Name and Title */}
      <h1 className="text-pink-500 mb-2 z-10 text-[36px] font-bold">Sultan Uyar</h1>
      <p className="text-pink-400 mb-16 z-10 font-bold">Yazılım Mühendisliği Öğrencisi</p>

      {/* About Section */}
      <div className="max-w-3xl mx-auto text-center z-10">
        <h2 className="text-pink-500 mb-8 text-[32px]">
          Hakkımda
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Teknolojiyi, insan yaşamını kolaylaştıran bir araç olarak görüyorum. Yazılım geliştirirken sadece kod 
          yazmayı değil, gerçek ihtiyaçlara dokunan çözümler üretmeyi hedefliyorum. Özellikle mobil 
          geliştirme, veri analizi ve web teknolojileri alanlarında kendimi sürekli geliştiriyorum. Öğrenmeyi, yeni 
          teknolojileri keşfetmeyi ve edindiğim bilgileri paylaşmayı seviyorum. Her projede biraz daha 
          büyümeyi, hem teknik hem de insani yönden gelişmeyi önemsiyorum.
        </p>
      </div>
    </section>
  );
}
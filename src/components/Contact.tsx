import { Mail, Github, Linkedin, Youtube, X } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Burada form gönderme işlemi yapılabilir
    setIsModalOpen(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 pb-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-pink-500 mb-16 text-[32px]">
          İletişim
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Email */}
          <a 
            href="mailto:sultanuyar04@gmail.com"
            className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border-2 border-pink-300 hover:border-pink-400 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-pink-500">sultanuyar04@gmail.com</span>
          </a>
          
          {/* GitHub */}
          <a 
            href="https://github.com/sultanuyarr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border-2 border-pink-300 hover:border-pink-400 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
              <Github className="w-5 h-5 text-pink-500" />
            </div>
            <span className="text-pink-500">GitHub</span>
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/sultanuyarr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border-2 border-pink-300 hover:border-pink-400 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
              <Linkedin className="w-5 h-5 text-pink-500" />
            </div>
            <span className="text-pink-500">LinkedIn</span>
          </a>
          
          {/* Medium */}
          <a 
            href="https://medium.com/@sultanuyar04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border-2 border-pink-300 hover:border-pink-400 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
              <Youtube className="w-5 h-5 text-pink-500" />
            </div>
            <span className="text-pink-500">Medium</span>
          </a>
        </div>
        
        {/* Contact Button */}
        <div className="text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-lg"
          >
            Benimle İletişime Geç
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title */}
            <h3 className="text-center text-pink-500 mb-6">İletişime Geçin</h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Ad Soyad */}
              <div>
                <label className="block text-pink-500 mb-2">
                  Ad Soyad <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-pink-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* Telefon Numarası */}
              <div>
                <label className="block text-pink-500 mb-2">
                  Telefon Numarası <span className="text-pink-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-pink-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* E-posta */}
              <div>
                <label className="block text-pink-500 mb-2">E-posta</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-pink-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* Mesajınız */}
              <div>
                <label className="block text-pink-500 mb-2">Mesajınız</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Nasıl yardımcı olabilirim?"
                  className="w-full px-4 py-3 bg-pink-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none placeholder:text-gray-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
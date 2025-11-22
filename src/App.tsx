import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 relative overflow-hidden">
      {/* Floating Computers Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] animate-float-slow opacity-20">💻</div>
        <div className="absolute top-[20%] right-[10%] animate-float-medium opacity-20">💻</div>
        <div className="absolute top-[40%] left-[15%] animate-float-fast opacity-20">💻</div>
        <div className="absolute top-[60%] right-[20%] animate-float-slow opacity-20">💻</div>
        <div className="absolute top-[75%] left-[8%] animate-float-medium opacity-20">💻</div>
        <div className="absolute top-[85%] right-[15%] animate-float-fast opacity-20">💻</div>
        <div className="absolute top-[30%] left-[80%] animate-float-slow opacity-20">💻</div>
        <div className="absolute top-[50%] left-[5%] animate-float-medium opacity-20">💻</div>
      </div>
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors shadow-lg"
      >
        <Menu className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-24 right-6 w-auto bg-white z-40 rounded-3xl shadow-2xl px-6 py-4">
          <div className="flex flex-col gap-4 text-pink-500">
            <a href="#hero" onClick={() => setMenuOpen(false)} className="hover:underline text-right whitespace-nowrap">Ana Sayfa</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:underline text-right whitespace-nowrap">Hakkımda</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:underline text-right whitespace-nowrap">Yetenekler</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:underline text-right whitespace-nowrap">Projeler</a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:underline text-right whitespace-nowrap">Deneyim</a>
            <a href="#education" onClick={() => setMenuOpen(false)} className="hover:underline text-right whitespace-nowrap">Eğitim</a>
            <a href="#certificates" onClick={() => setMenuOpen(false)} className="hover:underline text-right whitespace-nowrap">İletişim</a>
          </div>
        </div>
      )}

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
}
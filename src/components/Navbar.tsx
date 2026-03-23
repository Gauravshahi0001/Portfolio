"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", to: "#home" },
  { name: "Skills", to: "#skills" },
  { name: "Education", to: "#education" },
  { name: "Profiles", to: "#profiles" },
  { name: "Projects", to: "#projects" },
  { name: "Certifications", to: "#certifications" },
  { name: "Contact", to: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "skills", "education", "profiles", "projects", "certifications", "contact"];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleRestart = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-md shadow-cyan-400/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-6 md:px-10 flex justify-between items-center">
        <a 
          href="/" 
          onClick={handleRestart}
          className="text-3xl md:text-4xl font-black font-sans tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text cursor-pointer transition-all duration-300 transform hover:scale-105"
        >
          GAURAV
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className={`text-base font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeSection === link.to.replace("#", "")
                  ? "text-cyan-400 neon-text scale-110"
                  : "text-gray-300 hover:text-cyan-400 hover:scale-105"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-6 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${
                activeSection === link.to.replace("#", "")
                  ? "text-cyan-400 neon-text"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const navLinks = [
    { name: "Home", to: "#home" },
    { name: "Skills", to: "#skills" },
    { name: "Education", to: "#education" },
    { name: "Profiles", to: "#profiles" },
    { name: "Projects", to: "#projects" },
    { name: "Certifications", to: "#certifications" },
    { name: "Contact", to: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      href: "https://github.com/Gauravshahi0001",
      glow: "hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
    },
    { 
      icon: <FaLinkedin />, 
      href: "https://www.linkedin.com/in/gaurav-kumar-259946288/",
      glow: "hover:text-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
    },
    { 
      icon: <SiLeetcode />, 
      href: "https://leetcode.com/u/Gaurav_Shahi_0001/",
      glow: "hover:text-orange-500 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"
    },
    { 
      icon: <FaEnvelope />, 
      href: "mailto:gauravshahi0001@gmail.com",
      glow: "hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]"
    },
  ];

  return (
    <footer className="bg-[#020205] relative z-10 overflow-hidden py-10 md:py-12">
      {/* Top Subtle Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Central Radial Gradient Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="w-full px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          
          {/* 1. "Global Status" Display (Left Side) */}
          <div className="flex flex-col items-center lg:items-start gap-4 lg:w-1/3">
            <div className="flex items-center gap-3">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-green-400 font-bold">
                SYSTEM_ACTIVE
              </span>
            </div>
            <div className="text-3xl lg:text-4xl font-black font-sans tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">
              GAURAV KUMAR
            </div>
          </div>

          {/* 2. Navigation Grid (Center) */}
          <div className="hidden lg:grid lg:w-1/3 grid-cols-2 gap-x-12 gap-y-3 justify-items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.to}
                className="text-[10px] font-mono font-black text-gray-500 hover:text-cyan-400 transition-all duration-300 uppercase tracking-[0.25em] whitespace-nowrap"
              >
                // {link.name}
              </a>
            ))}
          </div>

          {/* 3. Brand Link Panel (Right Side) */}
          <div className="flex items-center justify-center lg:justify-end gap-10 lg:w-1/3">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, y: -4 }}
                className={`text-4xl transition-all duration-300 relative z-10 ${social.glow}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom: The "Built With" Log & Quick Links Mobile */}
        <div className="pt-10 border-t border-white/5 flex flex-col items-center text-center gap-8">
          <div className="lg:hidden flex flex-wrap justify-center gap-x-8 gap-y-4 mb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.to}
                className="text-[10px] font-mono font-bold text-gray-500 hover:text-cyan-400 transition-all duration-300 uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold animate-pulse">
              // CORE_ENGINE: NEXT.JS // STYLING: TAILWIND_CSS
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold opacity-80">
              // MOTION: FRAMER_MOTION // HOST: VERCEL
            </div>
          </div>
          
          <p className="font-mono text-[9px] text-gray-700 uppercase tracking-[0.3em] mt-2 font-bold">
            &copy; {new Date().getFullYear()} GAURAV_KUMAR_OS_V1.0.ALL_RIGHTS_RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

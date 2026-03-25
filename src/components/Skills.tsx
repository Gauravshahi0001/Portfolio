"use client";

import { motion } from "framer-motion";
import { Globe, Settings, Atom, Wrench, Network, Layers, Cpu, Database, RefreshCw, Zap, Bug, ShieldCheck, Wifi } from "lucide-react";
import { SiCplusplus, SiC, SiTailwindcss, SiThreedotjs } from "react-icons/si";
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaLinux, FaCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const skillsData = [
  {
    category: "Languages",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    skills: [
      { name: "C++", level: 100, brandIcon: <SiCplusplus className="w-4 h-4 text-blue-500" /> },
      { name: "C", level: 100, brandIcon: <SiC className="w-4 h-4 text-blue-600" /> },
      { name: "JAVA", level: 100, brandIcon: <FaJava className="w-4 h-4 text-orange-500" /> },
      { name: "PYTHON", level: 100, brandIcon: <FaPython className="w-4 h-4 text-yellow-400" /> },
      { name: "JAVASCRIPT", level: 100, brandIcon: <IoLogoJavascript className="w-4 h-4 text-yellow-300" /> },
      { name: "SQL", level: 100, brandIcon: <Database className="w-4 h-4 text-blue-300" /> },
    ]
  },
  {
    category: "CS Fundamentals",
    icon: <Settings className="w-6 h-6 text-purple-400" />,
    skills: [
      { name: "DSA", level: 100, brandIcon: <Network className="w-4 h-4 text-cyan-400" /> },
      { name: "OOP", level: 100, brandIcon: <Layers className="w-4 h-4 text-purple-400" /> },
      { name: "OS", level: 100, brandIcon: <Cpu className="w-4 h-4 text-green-400" /> },
      { name: "CN", level: 100, brandIcon: <Wifi className="w-4 h-4 text-blue-400" /> },
      { name: "DBMS", level: 100, brandIcon: <Database className="w-4 h-4 text-orange-400" /> },
      { name: "SDLC", level: 100, brandIcon: <RefreshCw className="w-4 h-4 text-pink-400" /> },
      { name: "AGILE", level: 100, brandIcon: <Zap className="w-4 h-4 text-yellow-400" /> },
    ]
  },
  {
    category: "Frameworks & Web",
    icon: <Atom className="w-6 h-6 text-blue-400" />,
    skills: [
      { name: "REACT.JS", level: 100, brandIcon: <FaReact className="w-4 h-4 text-cyan-400" /> },
      { name: "HTML5", level: 100, brandIcon: <FaHtml5 className="w-4 h-4 text-orange-500" /> },
      { name: "CSS3", level: 100, brandIcon: <FaCss3Alt className="w-4 h-4 text-blue-500" /> },
      { name: "TAILWIND CSS", level: 100, brandIcon: <SiTailwindcss className="w-4 h-4 text-cyan-300" /> },
      { name: "THREE.JS", level: 100, brandIcon: <SiThreedotjs className="w-4 h-4 text-white" /> },
    ]
  },
  {
    category: "Developer Tools",
    icon: <Wrench className="w-6 h-6 text-gray-400" />,
    skills: [
      { name: "GIT", level: 100, brandIcon: <FaGitAlt className="w-4 h-4 text-orange-600" /> },
      { name: "GITHUB", level: 100, brandIcon: <FaGithub className="w-4 h-4 text-white" /> },
      { name: "LINUX", level: 100, brandIcon: <FaLinux className="w-4 h-4 text-yellow-200" /> },
      { name: "VS CODE", level: 100, brandIcon: <FaCode className="w-4 h-4 text-blue-500" /> },
      { name: "DEBUGGING", level: 100, brandIcon: <Bug className="w-4 h-4 text-red-500" /> },
      { name: "TESTING", level: 100, brandIcon: <ShieldCheck className="w-4 h-4 text-green-500" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black font-sans text-white tracking-tight">
            Skills & Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">Knowledge</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {skillsData.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-[2.5rem] flex flex-col items-center hover:scale-[1.02] transition-all duration-500 border border-white/5 relative group bg-black/40"
            >

              {/* Category Icon */}
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 neon-shadow-sm">
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-12 text-center tracking-tight">
                {category.category}
              </h3>

              <div className="w-full space-y-8">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="w-full group/item">
                    <div className="flex justify-between items-center mb-2.5">
                      <div className="flex items-center gap-3">
                        {skill.brandIcon}
                        <span className="text-[11px] font-black text-white/90 uppercase tracking-widest leading-none mt-1">
                           {skill.name}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-[6px] p-[1.5px] overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (sIdx * 0.05) }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


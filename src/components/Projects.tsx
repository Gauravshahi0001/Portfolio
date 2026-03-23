"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, TerminalSquare } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Real-Time Accident Detection & Claims",
      description: "Real-Time Accident Detection System and Insurance claim workflow.",
      tags: ["Python", "Machine Learning", "OpenCV"],
      features: ["Video Analytics", "Crash Detection", "Automated Claims"],
      metrics: { build: "Passing", speed: "124ms", coverage: "94%" },
      github: "https://github.com/Gauravshahi0001/Real-Time-Accident-Detection-System-and-Insurance-claim",
      demo: "#",
      glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:border-cyan-500/50 group",
      theme: "cyan",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Blood Locator and Dispatcher System",
      description: "Multi-role workflow supporting Donor, Recipient, and Admin modules.",
      tags: ["HTML", "CSS", "JavaScript"],
      features: ["Role-Based Access", "Inventory Tracking", "Dispatcher Logistics"],
      metrics: { build: "Passing", speed: "86ms", coverage: "89%" },
      github: "https://github.com/Gauravshahi0001/Efficient-blood-Locator-and-dispatcher-System",
      demo: "#",
      glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-purple-500/50 group",
      theme: "purple",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Page Replacement Algo Simulator",
      description: "Design a simulator that allows users to test OS memory management.",
      tags: ["JavaScript", "Algorithms", "OS Fundamentals"],
      features: ["Memory Simulation", "Paging Visuals", "LRU/FIFO Logic"],
      metrics: { build: "Passing", speed: "42ms", coverage: "98%" },
      github: "https://github.com/Gauravshahi0001/Efficient-Page-Replacement-Algorithm-Simulator",
      demo: "#",
      glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:border-cyan-500/50 group",
      theme: "cyan",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "StockGPT AI Assistant",
      description: "Smart, real-time assistant for stock market analysis using Live data.",
      tags: ["AI", "Finance Data", "LLM Integration"],
      features: ["Real-time Analysis", "Trend Predictions", "Natural Language API"],
      metrics: { build: "Passing", speed: "155ms", coverage: "91%" },
      github: "https://github.com/Gauravshahi0001/StockGPT-AI",
      demo: "#",
      glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-purple-500/50 group",
      theme: "purple",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Entity Linking in Scanned Records",
      description: "Noise-Robust Entity Linking in Scanned Land Records OCR for Government Scale.",
      tags: ["Jupyter Notebook", "OCR", "NLP"],
      features: ["Noise Reduction", "Government Scale Mapping", "Entity Extraction"],
      metrics: { build: "Passing", speed: "512ms", coverage: "84%" },
      github: "https://github.com/Gauravshahi0001/Entity-Linking-in-Scanned-Land-Records-OCR-Noise-for-Government-Scale",
      demo: "#",
      glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:border-cyan-500/50 group",
      theme: "cyan",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "AQI Pattern Clustering",
      description: "Air Quality Index Pattern Clustering for Pollution Source Analysis.",
      tags: ["Data Science", "Clustering", "Env Analytics"],
      features: ["Pattern Mapping", "Source Extraction", "AQI Modeling"],
      metrics: { build: "Passing", speed: "98ms", coverage: "95%" },
      github: "https://github.com/Gauravshahi0001/-Air-Quality-Index-Pattern-Clustering-for-Pollution-Source-Analysis",
      demo: "#",
      glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-purple-500/50 group",
      theme: "purple",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24 scroll-mt-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-black font-sans text-white mb-6 tracking-tight uppercase">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">Creations 🛠️</span>
          </h2>
          <div className="w-24 h-1.5 bg-cyan-400 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.15 }}
              className={`bg-[#050811] backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-500 relative overflow-hidden h-full cursor-default ${project.glow}`}
            >
              {/* Dynamic Abstract Tech Background inside card */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${project.theme}-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-${project.theme}-500/20 transition-all duration-500`}></div>

              {/* Project Image */}
              <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden mb-6 relative z-10 border border-white/10 group-hover:border-white/20 transition-colors duration-500">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Header: Project ID & Link */}
              <div className="flex justify-between items-center w-full mb-6 relative z-10">
                <span className={`text-${project.theme}-400 font-mono text-[10px] md:text-xs font-black tracking-[0.3em] uppercase bg-${project.theme}-500/10 px-3 py-1 rounded-full border border-${project.theme}-500/30`}>
                  PRJ // {project.id}
                </span>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:text-${project.theme}-400 transition-colors`}>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <div className="relative z-10 mb-6 flex-grow">
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-wide leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Diagnostic Grid / Features */}
              <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
                {project.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-gray-300 text-xs font-medium">
                    <TerminalSquare className={`w-3.5 h-3.5 mt-0.5 text-${project.theme}-500`} />
                    <span className="leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tags Pipeline */}
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="bg-[#0a0f1c] border border-white/10 text-gray-300 text-[10px] md:text-xs font-mono font-bold px-2 py-1 rounded shadow-inner"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Technical Metrics Dashboard */}
              <div className={`mt-auto w-full bg-[#03050a] border border-white/5 rounded-xl p-4 flex justify-between items-center relative z-10 transition-colors duration-500 group-hover:border-${project.theme}-500/30`}>
                <div className="flex flex-col text-center">
                  <span className="text-gray-500 text-[8px] uppercase tracking-widest mb-1 font-bold">Build</span>
                  <span className="text-green-400 text-xs font-mono font-black">{project.metrics.build}</span>
                </div>
                <div className="w-[1px] h-6 bg-white/10"></div>
                <div className="flex flex-col text-center">
                  <span className="text-gray-500 text-[8px] uppercase tracking-widest mb-1 font-bold">Speed</span>
                  <span className="text-white text-xs font-mono font-black">{project.metrics.speed}</span>
                </div>
                <div className="w-[1px] h-6 bg-white/10"></div>
                <div className="flex flex-col text-center">
                  <span className="text-gray-500 text-[8px] uppercase tracking-widest mb-1 font-bold">Coverage</span>
                  <span className={`text-${project.theme}-400 text-xs font-mono font-black`}>{project.metrics.coverage}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

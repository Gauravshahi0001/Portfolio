"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Trophy, BadgeCheck, ExternalLink, CalendarDays } from "lucide-react";
import Image from "next/image";
import hackerrankImg from "@/app/hackerrank.png";
import cpeImg from "@/app/cpe.png";
import nptelImg from "@/app/nptel.png";

// Array of specifically requested certifications and achievements with high-density data
const certificationsData = [
  {
    type: "hackerrank",
    title: "Software Engineer Intern Certification",
    issuer: "HackerRank",
    date: "Aug 2024",
    description: "Successfully passed the standardized industry assessment covering Core CS Fundamentals, Data Structures, and Problem Solving logic.",
    tags: ["Algorithms", "Data Structures", "Problem Solving"],
    icon: (
      <div className="w-12 h-12 rounded-xl bg-white border border-white/10 flex items-center justify-center p-1.5 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-shadow">
        <Image src={hackerrankImg} alt="HackerRank" width={32} height={32} className="object-contain" />
      </div>
    ),
    link: "#",
    glow: "hover:shadow-[0_0_30px_rgba(0,234,100,0.15)] hover:border-[#00EA64]/40"
  },
  {
    type: "hackerrank",
    title: "Software Engineer Certification",
    issuer: "HackerRank",
    date: "Sep 2024",
    description: "Advanced certification evaluating high-level architecture, deep systems knowledge, and optimized algorithmic execution.",
    tags: ["System Design", "Advanced DSA", "Optimization"],
    icon: (
      <div className="w-12 h-12 rounded-xl bg-white border border-white/10 flex items-center justify-center p-1.5 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-shadow">
        <Image src={hackerrankImg} alt="HackerRank" width={32} height={32} className="object-contain" />
      </div>
    ),
    link: "#",
    glow: "hover:shadow-[0_0_30px_rgba(0,234,100,0.15)] hover:border-[#00EA64]/40"
  },
  {
    type: "lpu",
    title: "3rd Position in 'Analytical Attributes'",
    issuer: "Lovely Professional University",
    date: "Mar 2024",
    description: "Secured regional podium placement in the rigorous university-wide Analytical Attributes logic and mathematics marathon.",
    tags: ["Aptitude", "Mathematics", "Logic Design"],
    icon: (
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-shadow">
        <Image src={cpeImg} alt="LPU" width={32} height={32} className="object-contain" />
      </div>
    ),
    link: "#",
    glow: "hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] hover:border-yellow-400/40"
  },
  {
    type: "lpu",
    title: "2nd Position in 'GK Challenge'",
    issuer: "Lovely Professional University",
    date: "Feb 2024",
    description: "Awarded runner-up status against 500+ competitors in rapid-fire technological and general knowledge assessments.",
    tags: ["Trivia", "Tech History", "General Knowledge"],
    icon: (
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-shadow">
        <Image src={cpeImg} alt="LPU" width={32} height={32} className="object-contain" />
      </div>
    ),
    link: "#",
    glow: "hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] hover:border-yellow-400/40"
  },
  {
    type: "academic",
    title: "Data Structures & Algorithms (C++)",
    issuer: "Lovely Professional University",
    date: "Dec 2023",
    description: "Achieved the highest tier 'A Grade' metric for advanced implementation of C++ memory pointers, trees, and dynamic programming.",
    tags: ["C++", "Pointers", "Dynamic Programming"],
    icon: (
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-shadow">
        <Image src={cpeImg} alt="LPU" width={32} height={32} className="object-contain" />
      </div>
    ),
    link: "#",
    glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:border-cyan-400/40"
  },
  {
    type: "nptel",
    title: "Cloud Computing Certification",
    issuer: "NPTEL",
    date: "Oct 2023",
    description: "Successfully completed rigorous certification mapping distributed system architecture, virtualization, and cloud resource management.",
    tags: ["Cloud Architecture", "Virtualization", "AWS / GCP"],
    icon: (
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-shadow">
        <Image src={nptelImg} alt="NPTEL" width={32} height={32} className="object-contain" />
      </div>
    ),
    link: "#",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/40"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 scroll-mt-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-black font-sans text-white mb-6 tracking-tight uppercase">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 neon-text">Credentials</span>
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-4 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            <span className="text-cyan-400 text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="animate-pulse">💎</span> Verified Credentials <span className="animate-pulse">✨</span>
            </span>
          </div>
          <p className="mt-6 text-gray-400 font-mono text-xs md:text-sm font-bold tracking-widest uppercase max-w-2xl mx-auto">
            Authenticated physical and digital awards mapping execution success.
          </p>
        </div>

        {/* High-Density Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {certificationsData.map((cert, idx) => (
            <motion.a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className={`bg-[#050811]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col relative overflow-hidden group cursor-pointer h-full transition-all duration-500 ${cert.glow}`}
            >
              {/* Internal glowing mesh */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none z-0"></div>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                {/* 1. Branding Row */}
                <div className="flex justify-between items-start w-full mb-6">
                  {cert.icon}
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* 2. Title */}
                <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight tracking-tight mb-3">
                  {cert.title}
                </h3>

                {/* 3. Metadata (Issuer & Date) */}
                <div className="flex items-center gap-4 text-gray-500 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" />
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1.5 border-l border-white/10 pl-4">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                </div>

                {/* 4. Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                  {cert.description}
                </p>

                {/* 5. Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {cert.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="bg-white/5 border border-white/10 text-gray-300 text-[9px] md:text-[10px] font-mono font-bold px-2.5 py-1 rounded shadow-inner tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Verified Achievement Footer */}
              <div className="mt-auto w-full bg-[#03050a] border-t border-white/10 p-4 transition-colors duration-500 group-hover:bg-cyan-500/5 group-hover:border-cyan-500/30">
                <div className="flex items-center justify-center gap-2 text-cyan-500">
                  <BadgeCheck className="w-4 h-4 shadow-[0_0_10px_rgba(34,211,238,0.5)] rounded-full animate-pulse" />
                  <span className="text-[10px] md:text-xs font-black font-mono tracking-[0.2em] uppercase">
                    Verified Achievement
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

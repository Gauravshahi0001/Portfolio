"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";
import lpuImg from "@/app/lpu.png";
import lyceumImg from "@/app/lyceum.png";
import davImg from "@/app/dav.png";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University (LPU)",
      year: "AUG 2023 - JUL 2027",
      score: "CGPA: 7.70 / 10.0",
      description: "Currently pursuing B.Tech in CSE. Learning core principles of computer engineering, focusing on advanced data structures, algorithms, machine learning models, and full-stack software development methodologies.",
      subjects: ["C/C++", "Python", "Java", "SQL", "Data Structures", "Algorithms", "Machine Learning", "OOP", "React.js"],
      icon: <Image src={lpuImg} alt="LPU Logo" className="w-8 h-8 object-contain rounded-full bg-white p-[2px] shadow-[0_0_12px_rgba(34,211,238,0.8)]" />,
      color: "cyan",
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Lyceum International School",
      year: "APR 2020 - MAR 2022",
      score: "Percentage: 68%",
      description: "Completed Senior Secondary education with a rigorous focus on science and mathematics, building a strong analytical foundation for problem-solving and programming.",
      subjects: ["Mathematics", "Physics", "Chemistry", "English", "Python"],
      icon: <Image src={lyceumImg} alt="Lyceum Logo" className="w-8 h-8 object-contain rounded-full bg-white p-[2px] shadow-[0_0_12px_rgba(168,85,247,0.8)]" />,
      color: "purple",
    },
    {
      degree: "Matriculation (Class X)",
      institution: "DAV PUBLIC SCHOOL",
      year: "APR 2019 - MAR 2020",
      score: "Percentage: 78%",
      description: "Completed secondary education with a diverse academic curriculum and an early introduction to foundational web technologies.",
      subjects: ["Mathematics", "Science", "Social Science", "Sanskrit", "English", "HTML", "CSS", "JavaScript"],
      icon: <Image src={davImg} alt="DAV Logo" className="w-8 h-8 object-contain rounded-full bg-white p-[2px] shadow-[0_0_12px_rgba(34,211,238,0.8)]" />,
      color: "cyan",
    }
  ];

  return (
    <section id="education" className="py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-4 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            <span className="text-cyan-400 text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2">
              <span>📈</span> Progress Over Time <span>⏳</span>
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black font-sans text-white mb-6 tracking-tight uppercase">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">Journey</span>
          </h2>
          
          <div className="w-24 h-1.5 bg-cyan-400 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)] mb-6"></div>
          
          <p className="text-gray-400 font-mono text-xs md:text-sm font-bold tracking-widest uppercase max-w-2xl mx-auto">
            A reflection of the educational foundations and professional milestones that have defined my growth.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Central Timeline Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/40 via-purple-500/40 to-transparent -translate-x-1/2 rounded-full"></div>
          
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative flex items-start justify-between w-full mb-20 ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
            >
              {/* Spacer for structural balance on Desktop */}
              <div className="hidden md:block w-[47%]"></div>
              
              {/* Timeline Icon Node */}
              <div className={`absolute left-10 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-[#0a1118] border-2 ${item.color === 'cyan' ? 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]' : 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]'} z-10 transition-transform duration-500 hover:scale-110 mt-4`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color === 'cyan' ? 'bg-cyan-400/10' : 'bg-purple-500/10'}`}>
                  {item.icon}
                </div>
              </div>
              
              {/* Content Card with Strict w-[47%] container */}
              <div className="w-full pl-24 md:pl-0 md:w-[47%]">
                <div className={`bg-[#0b1120] border border-white/5 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden ${item.color === 'cyan' ? 'hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]' : 'hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]'}`}>
                  
                  {/* Top Header Row: Title & Date Pill */}
                  <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight tracking-tight">
                        {item.degree}
                      </h3>
                      <p className="text-gray-400 font-medium tracking-wide flex items-center gap-2">
                        🏛️ {item.institution}
                      </p>
                    </div>
                    <span className="inline-flex py-1.5 px-4 rounded-full bg-[#112230] text-cyan-400 text-xs font-black tracking-widest font-mono border border-cyan-900/50 whitespace-nowrap h-fit">
                      {item.year}
                    </span>
                  </div>

                  {/* Italic Description */}
                  <p className="text-gray-400/80 text-sm md:text-base italic mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Performance Highlight Box */}
                  <div className={`bg-gradient-to-r ${item.color === 'cyan' ? 'from-[#0d2a3a]' : 'from-[#1f1635]'} to-transparent border ${item.color === 'cyan' ? 'border-cyan-900/50' : 'border-purple-900/50'} rounded-2xl p-4 mb-6 flex items-center gap-4`}>
                    <div className={`w-12 h-12 rounded-full ${item.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-purple-500/10 text-purple-400'} flex items-center justify-center`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-[11px] font-black tracking-[0.2em] uppercase mb-1">
                        Performance
                      </div>
                      <div className={`text-xl font-black ${item.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>
                        {item.score}
                      </div>
                    </div>
                  </div>

                  {/* Subjects / Tags Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {item.subjects.map((sub, sIdx) => (
                      <span key={sIdx} className="px-3 py-1.5 bg-[#121826] border border-white/5 rounded-full text-[11px] font-bold text-gray-300 flex items-center gap-2 hover:bg-white/5 transition-colors cursor-default">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.color === 'cyan' ? 'bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]' : 'bg-purple-400 shadow-[0_0_5px_rgba(168,85,247,0.8)]'}`}></span>
                        {sub}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ChevronRight, ExternalLink, Download, Linkedin, Github } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
      >
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group cursor-default inline-block"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-300 font-mono tracking-[0.3em] text-xs md:text-sm uppercase relative z-10 group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">
              Welcome to my universe
            </span>
            <motion.div 
              className="absolute inset-0 bg-green-400/10 -z-0 skew-x-12 blur-sm"
              animate={{ 
                x: ["-100%", "200%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3, 
                ease: "linear",
                repeatDelay: 2
              }}
            />
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-green-400 to-transparent group-hover:w-full transition-all duration-500 font-bold"></div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-sans tracking-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">Gaurav Kumar</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-mono text-gray-300 h-10">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Competitive Programmer",
                  "Problem Solver"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                wrapperClassName: "text-purple-400",
                cursorClassName: "text-cyan-400 animate-pulse"
              }}
            />
          </div>

          <div className="bg-white/5 border-l-4 border-cyan-400 p-4 md:p-6 rounded-r-xl max-w-xl backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            B.Tech CSE student & LeetCode Knight (1948). Solving 400+ problems with expertise in C++, Python, and Java. Dedicated to building scalable ML and software solutions for high-impact SDE roles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 pt-8">
            {/* Primary CTA - View Resume */}
            <a 
              href="https://drive.google.com/file/d/1xa_Vifx5PdbjtlZCBwWWBiC7lpB7UwXy/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex w-full sm:w-auto items-center justify-center px-8 py-3.5 bg-cyan-400 text-black font-black uppercase tracking-widest hover:scale-[1.02] transition-all duration-300 neon-shadow overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.4)] rounded-sm"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative flex items-center gap-2">
                View Resume <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </span>
            </a>

            {/* Secondary CTA - Download Resume */}
            <a 
              href="https://drive.google.com/uc?export=download&id=1xa_Vifx5PdbjtlZCBwWWBiC7lpB7UwXy" 
              download
              className="group relative flex w-full sm:w-auto items-center justify-center px-8 py-3.5 bg-transparent border-[1.5px] border-purple-500/50 text-purple-400 font-bold uppercase tracking-widest hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 neon-shadow-purple rounded-sm"
            >
              <span className="relative flex items-center gap-2">
                Download <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </a>

            {/* Social Links Container */}
            <div className="flex items-center gap-4 sm:ml-4 border-t sm:border-t-0 sm:border-l border-white/10 pt-6 sm:pt-0 sm:pl-6 w-full sm:w-auto justify-center sm:justify-start">
              <a 
                href="https://www.linkedin.com/in/gaurav-kumar-259946288/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Gauravshahi0001" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Profile Card Container */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-80 h-[480px] md:w-[380px] md:h-[520px] lg:w-[420px] lg:h-[580px] glass-card rounded-3xl p-3 border border-cyan-400/30 neon-shadow"
          >
            {/* Inner Image Placeholder / Actual Image */}
            <div className="absolute inset-3 rounded-2xl bg-black/40 overflow-hidden border border-white/5">
              <div className="w-full h-full bg-[url('/profile.png')] bg-cover bg-top opacity-100 transition-all duration-500 cursor-pointer"></div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -right-10 top-16 glass rounded-lg p-3 flex items-center space-x-3 border border-purple-500/30 neon-shadow-purple z-20"
            >
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                <SiLeetcode className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <div className="text-xs text-gray-400">LeetCode</div>
                <div className="font-bold text-white text-sm">Knight</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

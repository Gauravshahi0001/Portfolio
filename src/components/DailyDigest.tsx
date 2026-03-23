"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Activity, GitCommit, Target, Zap } from "lucide-react";

// Animated Counter setup
function Counter({ value, decimals = 0, prefix = "", suffix = "" }: { value: number, decimals?: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 90,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.onChange((latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, decimals, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function DailyDigest() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Generate 52 weeks * 7 days of dummy contribution data
  const generateGrid = () => {
    if (!mounted) return Array.from({ length: 364 }, () => 0); // SSR safe
    return Array.from({ length: 364 }, () => {
      const rand = Math.random();
      if (rand > 0.8) return 4;
      if (rand > 0.6) return 3;
      if (rand > 0.4) return 2;
      if (rand > 0.2) return 1;
      return 0;
    });
  };

  const gridData = generateGrid();

  const getColorClass = (level: number) => {
    switch(level) {
      case 4: return "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]";
      case 3: return "bg-green-500/80";
      case 2: return "bg-green-500/50";
      case 1: return "bg-green-500/20";
      default: return "bg-[#111827]";
    }
  };

  return (
    <section className="py-24 relative overflow-hidden z-10">
      
      {/* Central Radiating Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The "Pulse" Heading */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-4"
          >
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">Global Activity Pulse</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black font-sans text-white mb-4 tracking-tight uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Consistency Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 neon-text">Intensity</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs md:text-sm font-bold tracking-widest uppercase max-w-2xl mx-auto">
            Tracking <span className="text-green-400">100+</span> days of continuous execution. Engineering output mapped across distributed systems.
          </p>
        </div>

        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
          
          {/* GitHub Activity Grid (Left 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[#050811]/90 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2 text-gray-300 font-mono text-sm tracking-wide font-bold">
                <GitCommit className="w-4 h-4 text-green-400" />
                Commit Trajectory // 2026 Space
              </div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-cyan-400/80 hidden sm:block">
                SYS.MONITOR.ACTIVE
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <div className="grid grid-flow-col grid-rows-7 gap-1 md:gap-1.5 overflow-x-auto pb-4 scrollbar-hide">
                {gridData.map((level, i) => (
                  <div 
                    key={i} 
                    className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-sm transition-all duration-300 hover:scale-150 hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,1)] hover:z-20 cursor-crosshair ${getColorClass(level)}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              <span>Less</span>
              <div className="flex gap-1 items-center">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#111827]"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-green-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-green-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-green-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-green-400"></div>
              </div>
              <span>More</span>
            </div>
          </motion.div>

          {/* Radar Skill Chart (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#050811]/90 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center relative overfow-hidden"
          >
            <div className="absolute top-4 left-6 text-gray-400 font-mono text-xs uppercase tracking-widest font-bold">
              // Threat Matrix
            </div>
            
            <div className="relative w-[240px] h-[240px] mt-6">
              {/* SVG Radar Chart Core */}
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                {/* Background Web Rings */}
                <polygon points="100,20 176,75 147,164 52,164 23,75" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <polygon points="100,40 157,81 135,147 64,147 42,81" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <polygon points="100,60 138,87 123,131 76,131 61,87" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <polygon points="100,80 119,93 111,115 88,115 80,93" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                
                {/* Center Lines */}
                <line x1="100" y1="100" x2="100" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <line x1="100" y1="100" x2="176" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <line x1="100" y1="100" x2="147" y2="164" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <line x1="100" y1="100" x2="52" y2="164" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <line x1="100" y1="100" x2="23" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

                {/* Animated Data Polygon */}
                {mounted && (
                  <motion.polygon 
                    initial={{ points: "100,100 100,100 100,100 100,100 100,100", opacity: 0 }}
                    whileInView={{ points: "100,28 164,79 139,154 67,144 39,80", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    fill="rgba(34, 211, 238, 0.2)" 
                    stroke="rgba(34, 211, 238, 0.8)" 
                    strokeWidth="2"
                    className="drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  />
                )}
                
                {/* Data Nodes */}
                {mounted && (
                  <>
                    <motion.circle initial={{r:0}} whileInView={{r:3}} transition={{delay: 1.5}} cx="100" cy="28" fill="#fff" className="drop-shadow-[0_0_5px_#22d3ee]" />
                    <motion.circle initial={{r:0}} whileInView={{r:3}} transition={{delay: 1.5}} cx="164" cy="79" fill="#fff" className="drop-shadow-[0_0_5px_#22d3ee]" />
                    <motion.circle initial={{r:0}} whileInView={{r:3}} transition={{delay: 1.5}} cx="139" cy="154" fill="#fff" className="drop-shadow-[0_0_5px_#22d3ee]" />
                    <motion.circle initial={{r:0}} whileInView={{r:3}} transition={{delay: 1.5}} cx="67" cy="144" fill="#fff" className="drop-shadow-[0_0_5px_#22d3ee]" />
                    <motion.circle initial={{r:0}} whileInView={{r:3}} transition={{delay: 1.5}} cx="39" cy="80" fill="#fff" className="drop-shadow-[0_0_5px_#22d3ee]" />
                  </>
                )}
              </svg>
              
              {/* Labels */}
              <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 text-cyan-400 font-mono text-[9px] font-bold tracking-widest bg-[#0a0f1c] px-1">DSA</div>
              <div className="absolute top-[65px] -right-[5px] text-cyan-400 font-mono text-[9px] font-bold tracking-widest bg-[#0a0f1c] px-1">OOP</div>
              <div className="absolute bottom-[20px] -right-[5px] text-cyan-400 font-mono text-[9px] font-bold tracking-widest bg-[#0a0f1c] px-1">OS</div>
              <div className="absolute bottom-[30px] -left-[10px] text-cyan-400 font-mono text-[9px] font-bold tracking-widest bg-[#0a0f1c] px-1">PYTHON</div>
              <div className="absolute top-[65px] -left-[5px] text-cyan-400 font-mono text-[9px] font-bold tracking-widest bg-[#0a0f1c] px-1">JAVA</div>
            </div>
          </motion.div>
        </div>

        {/* Live Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#050811]/90 border border-white/5 rounded-2xl p-6 text-center group hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] transition-all duration-300"
            >
              <Zap className="w-8 h-8 text-green-400 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
              <div className="text-4xl font-black text-white font-mono tracking-tighter mb-1">
                <Counter value={82} suffix="+" />
              </div>
              <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] font-mono">Current Streak (Days)</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#050811]/90 border border-white/5 rounded-2xl p-6 text-center group hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300"
            >
              <GitCommit className="w-8 h-8 text-cyan-400 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <div className="text-4xl font-black text-white font-mono tracking-tighter mb-1">
                <Counter value={120} suffix="+" />
              </div>
              <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] font-mono">Commits This Month</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#050811]/90 border border-white/5 rounded-2xl p-6 text-center group hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300"
            >
              <Target className="w-8 h-8 text-purple-400 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              <div className="text-4xl font-black text-white font-mono tracking-tighter mb-1">
                <Counter value={3} decimals={0} prefix="TOP " suffix="%" />
              </div>
              <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] font-mono">Global Percentile</div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}

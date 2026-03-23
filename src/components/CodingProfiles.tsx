"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldAlert, Cpu, Trophy } from "lucide-react";
import { useEffect, useRef } from "react";

function AnimatedCounter({ value, direction = "up", suffix = "" }: { value: number, direction?: "up" | "down", suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(direction === "down" ? 10000 : 0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 70,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.onChange((latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>{direction === "down" ? "10,000" : "0"}</span>;
}
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

export default function CodingProfiles() {
  const profiles = [
    {
      sysId: "SYS.01",
      platform: "LEETCODE",
      type: "leetcode",
      rating: "Knight (Peak: 1,948)",
      badge: "TOP 3% GLOBALLY",
      verifiedBadges: ["KNIGHT BADGE", "50 DAYS BADGE", "JAN/FEB MONTHLY"],
      color: "orange",
      accentHex: "#f97316",
      hoverShadow: "hover:shadow-[0_0_50px_rgba(249,115,22,0.15)] hover:border-orange-500/50",
      buttonColor: "bg-[#050811] border border-orange-500/30 text-orange-400 group-hover:bg-orange-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(249,115,22,0.8)]",
      icon: <SiLeetcode className="text-orange-500 w-12 h-12 group-hover:scale-110 transition-transform duration-500" />,
      link: "https://leetcode.com/u/Gaurav_Shahi_0001/"
    },
    {
      sysId: "SYS.02",
      platform: "GEEKSFORGEEKS",
      type: "gfg",
      rating: "Top Coder",
      badge: "INSTITUTION RANKER",
      stats: [
        { label: "CODING SCORE", value: "700" },
        { label: "RANK", value: "243" },
        { label: "SOLVED", value: "230+" },
      ],
      color: "green",
      accentHex: "#22c55e",
      hoverShadow: "hover:shadow-[0_0_50px_rgba(34,197,94,0.15)] hover:border-green-500/50",
      buttonColor: "bg-[#050811] border border-green-500/30 text-green-400 group-hover:bg-green-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]",
      icon: <SiGeeksforgeeks className="text-green-500 w-12 h-12 group-hover:scale-110 transition-transform duration-500" />,
      link: "https://www.geeksforgeeks.org/profile/gauravshgs93"
    },
    {
      sysId: "SYS.03",
      platform: "HACKERRANK",
      type: "hackerrank",
      rating: "Gold Badge",
      badge: "PROBLEM SOLVING (ADV)",
      certifications: [
        { name: "SOFTWARE ENGINEER INTERN", special: true },
        { name: "SOFTWARE ENGINEER", special: false },
        { name: "PROBLEM SOLVING (BASIC)", special: false },
        { name: "SQL (BASIC)", special: false },
      ],
      skills: ["PROB SOLVING (6-STAR)", "C++ (5-STAR)", "C (5-STAR)", "PYTHON (5-STAR)", "JAVA (5-STAR)"],
      color: "purple",
      accentHex: "#a855f7",
      hoverShadow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] hover:border-purple-500/50",
      buttonColor: "bg-[#050811] border border-purple-500/30 text-purple-400 group-hover:bg-purple-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]",
      icon: <FaHackerrank className="text-purple-500 w-12 h-12 group-hover:scale-110 transition-transform duration-500" />,
      link: "https://www.hackerrank.com/profile/gauravshahi0001"
    }
  ];

  return (
    <section id="profiles" className="py-24 scroll-mt-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-6xl font-black font-sans text-white mb-6 tracking-tight uppercase">
            Coding Profiles <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">& Records</span>
          </h2>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <span className="text-cyan-400 text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="animate-pulse">🏆</span> Achievement Unlocked <span className="animate-pulse">🔓</span>
            </span>
          </div>

          <p className="text-gray-400 font-mono text-xs md:text-sm font-bold tracking-widest uppercase max-w-2xl mx-auto opacity-70">
            Visualizing competitive excellence across global platforms and institutional boundaries.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {profiles.map((profile, idx) => (
            <motion.a 
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`bg-[#050811]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 flex flex-col rounded-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer relative overflow-hidden h-full ${profile.hoverShadow}`}
            >
              {/* Diagonal Cyber Stripes overlay */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 10px)' }}></div>
              
              {/* Internal glowing mesh */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-black pointer-events-none"></div>

              {/* Header: SYS ID & Indicator */}
              <div className="flex justify-between items-center w-full mb-4 relative z-10 border-b border-white/10 pb-3">
                <span className="text-gray-500 font-mono text-[10px] font-black tracking-[0.3em]">
                  // {profile.sysId}
                </span>
                <span className="flex items-center gap-2 text-[10px] font-black font-mono uppercase tracking-widest text-green-400">
                  <span className={`w-2 h-2 rounded-full animate-pulse bg-${profile.color}-500 shadow-[0_0_8px_${profile.accentHex}]`}></span>
                  ONLINE
                </span>
              </div>

              {/* Icon Container */}
              <div className="flex flex-col items-center text-center mb-5 relative z-10 w-full">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-[#0a0f1c] border border-white/10 flex items-center justify-center mb-4 relative group-hover:border-${profile.color}-500/50 transition-all duration-500`}>
                  {/* Corner ticks */}
                  <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-${profile.color}-500`}></div>
                  <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-${profile.color}-500`}></div>
                  <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-${profile.color}-500`}></div>
                  <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-${profile.color}-500`}></div>
                  
                  {profile.icon}
                </div>
                
                <h3 className="text-xl font-black text-white mb-1 tracking-[0.1em] font-sans">
                  [ {profile.platform} ]
                </h3>
                <div className="text-gray-300 font-mono text-xs md:text-sm mb-2 font-bold bg-white/5 px-3 py-1 border border-white/10">{profile.rating}</div>
                <div className={`text-${profile.color}-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mt-1`}>
                  {profile.badge}
                </div>
              </div>

              {/* Dynamic Grids Content (Telemetry Data) */}
              <div className="flex-grow w-full mb-5 relative z-10 border-t border-dashed border-white/10 pt-4">
                
                {/* LeetCode Badges */}
                {profile.type === 'leetcode' && (
                  <div className="flex flex-col gap-2 w-full">
                    <div className="text-[10px] text-gray-500 font-mono font-bold tracking-widest uppercase mb-1">» Award Telemetry Array:</div>
                    {profile.verifiedBadges?.map((badge, bIdx) => (
                      <div key={bIdx} className="w-full flex items-center justify-between p-2 bg-[#0a0f1c] border border-orange-500/20 group-hover:border-orange-500/40 transition-colors">
                        <span className="text-orange-400 text-[10px] font-mono tracking-widest uppercase">{badge}</span>
                        <ShieldAlert className="w-3.5 h-3.5 text-orange-500/50" />
                      </div>
                    ))}
                  </div>
                )}

                {/* GeeksForGeeks Data */}
                {profile.type === 'gfg' && (
                  <div className="flex flex-col gap-2 w-full">
                    <div className="text-[10px] text-gray-500 font-mono font-bold tracking-widest uppercase mb-1">» Output Vectors:</div>
                    {profile.stats?.map((stat, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-center p-2 bg-[#0a0f1c] border-l-2 border-green-500/50 group-hover:border-green-400 transition-colors">
                        <div className="text-gray-400 text-[10px] uppercase font-mono tracking-widest">{stat.label}</div>
                        <div className="text-green-400 font-black font-sans text-sm">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* HackerRank Skills */}
                {profile.type === 'hackerrank' && (
                  <div className="flex flex-col gap-3 w-full">
                    <div className="text-[10px] text-gray-500 font-mono font-bold tracking-[0.2em] uppercase">» Auth Protocols:</div>
                    <div className="flex flex-col gap-1.5">
                      {profile.certifications?.map((cert, cIdx) => (
                        <div key={cIdx} className={`w-full flex items-center justify-between p-1.5 text-[9px] md:text-[10px] font-mono tracking-wider transition-all border-l-2
                          ${cert.special ? 'bg-purple-500/10 border-purple-400 text-purple-300' : 'bg-[#0a0f1c] border-white/10 text-gray-400 group-hover:border-purple-500/30'}
                        `}>
                          <span className="truncate">{cert.name}</span>
                          {cert.special && <BadgeCheck className="w-3 h-3 text-purple-400 ml-1 shrink-0" />}
                        </div>
                      ))}
                    </div>
                    <div className="mt-1 border-t border-white/5 pt-3">
                      <div className="flex flex-wrap gap-1">
                        {profile.skills?.map((skill, sIdx) => (
                          <span key={sIdx} className="px-1.5 py-0.5 bg-[#121826] text-gray-400 text-[8px] font-mono tracking-widest border border-white/5">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Bottom Interactive Button */}
              <div className="mt-auto w-full relative z-10 pt-4 border-t border-white/10">
                <div className={`w-full py-2.5 flex items-center justify-center gap-3 font-mono font-black tracking-[0.2em] uppercase text-[10px] transition-all duration-500 ${profile.buttonColor}`}>
                  INITIALIZE LINK <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#050811]/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.05)] relative overflow-hidden group max-w-6xl mx-auto cursor-default flex flex-col md:flex-row items-center justify-between"
        >
          {/* Subtle responsive hover glow behind the text */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

          {/* Left Side (The Rank) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 relative z-10 w-full md:w-[45%]">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-3">
              <Trophy className="w-10 h-10 md:w-12 md:h-12 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
              <div className="flex flex-col">
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  GLOBAL RANK: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">#<AnimatedCounter value={388} direction="down" /></span> 🌍
                </h3>
              </div>
            </div>
            <p className="text-purple-400 font-mono text-xs md:text-sm uppercase tracking-widest font-bold md:ml-[4.5rem]">
              Weekly Contest 491 (LeetCode)
            </p>
          </div>

          {/* Center Vertical Divider - VS */}
          <div className="hidden md:flex flex-col items-center justify-center relative z-10 w-[10%]">
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-purple-500/50 mb-3"></div>
            <div className="px-3 py-1 bg-[#121826] border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-black font-mono tracking-widest shadow-[0_0_10px_rgba(34,211,238,0.2)]">VS</div>
            <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-cyan-500/50 mt-3"></div>
          </div>

          <div className="md:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-6 relative flex justify-center items-center z-10">
            <div className="absolute px-3 py-1 bg-[#121826] border border-cyan-500/30 rounded-full text-cyan-400 text-[10px] font-black font-mono tracking-widest z-10">VS</div>
          </div>

          {/* Right Side (The Volume) */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right relative z-10 w-full md:w-[45%]">
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">
              <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"><AnimatedCounter value={500} suffix="+" /></span> PROBLEMS 🚀
            </h3>
            <p className="text-cyan-400 font-mono text-xs md:text-sm uppercase tracking-widest font-bold">
              Across All Competitive Platforms
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

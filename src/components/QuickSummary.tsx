"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Star, Globe, GraduationCap } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

function AnimatedCounter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(latest);
      }
    });
  }, [springValue, decimals]);

  return <span ref={ref}>0</span>;
}

const stats = [
  {
    title: "LeetCode Rating",
    target: 1948,
    decimals: 0,
    prefix: "",
    suffix: "",
    icon: <SiLeetcode className="text-orange-500 w-6 h-6" />,
    subtitle: "Knight Status",
    hoverStyle: "hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]",
    iconContainer: "bg-orange-500/10 border-orange-500/20"
  },
  {
    title: "Global Rank",
    target: 3,
    decimals: 0,
    prefix: "Top ",
    suffix: "%",
    icon: <Globe className="text-purple-500 w-6 h-6" />,
    subtitle: "Competitive Programming",
    hoverStyle: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    iconContainer: "bg-purple-500/10 border-purple-500/20"
  },
  {
    title: "Problems Solved",
    target: 500,
    decimals: 0,
    prefix: "",
    suffix: "+",
    icon: <Star className="text-cyan-400 w-6 h-6" />,
    subtitle: "LeetCode & Others",
    hoverStyle: "hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]",
    iconContainer: "bg-cyan-400/10 border-cyan-400/20"
  },
  {
    title: "University CGPA",
    target: 8.12,
    decimals: 2,
    prefix: "",
    suffix: "",
    icon: <GraduationCap className="text-green-400 w-6 h-6" />,
    subtitle: "LPU B.Tech CSE",
    hoverStyle: "hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]",
    iconContainer: "bg-green-400/10 border-green-400/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function QuickSummary() {
  return (
    <section className="py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`
              bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden
              transition-all duration-500 hover:-translate-y-2 cursor-default group
              ${stat.hoverStyle}
            `}
          >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            <div className="flex justify-between items-start mb-6">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-colors ${stat.iconContainer}`}
              >
                {stat.icon}
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold font-mono text-white mb-2 tracking-tight group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all">
              {stat.prefix}
              <AnimatedCounter value={stat.target} decimals={stat.decimals} />
              {stat.suffix}
            </h3>
            
            <p className="text-gray-300 font-semibold text-sm mb-1">{stat.title}</p>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">{stat.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

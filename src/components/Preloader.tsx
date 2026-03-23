"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = loading ? "hidden" : "auto";
    }
    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [loading]);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 500); // Buffer before fading out
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020205]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="relative w-full max-w-xl px-12">
            {/* Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-10"
            >
              <h1 className="text-5xl md:text-7xl font-black font-sans tracking-tight text-white flex gap-3">
                GAURAV <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">KUMAR</span>
              </h1>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="relative w-full h-[3px] bg-white/5 rounded-full overflow-hidden mb-6">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-shadow"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Status Information */}
            <div className="flex justify-between items-end font-mono">
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">System Initialization</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,1)]" />
                  <span className="text-xs text-white/80">
                    STATUS: <span className="text-cyan-400 uppercase">{progress < 100 ? "Encrypting..." : "Ready"}</span>
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white tracking-tighter">{Math.floor(progress)}</span>
                <span className="text-lg font-bold text-cyan-400">%</span>
              </div>
            </div>

            {/* Background Aesthetic Lines */}
            <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -z-10" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

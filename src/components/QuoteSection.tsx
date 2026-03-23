"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="py-8 md:py-12 flex justify-center items-center relative z-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-4xl cursor-default group"
      >
        <div className="bg-[#050811]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 text-center transition-all duration-500 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="text-xl animate-pulse">✨</span>
            <Quote className="w-6 h-6 md:w-8 md:h-8 text-cyan-400/20 rotate-180 transition-colors duration-500 group-hover:text-cyan-400" />
            <span className="text-xl animate-pulse">💡</span>
          </div>
          
          <h3 className="text-lg md:text-xl lg:text-2xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-4 leading-relaxed tracking-wide italic px-2">
            "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
          </h3>
          
          <div className="flex flex-col items-center justify-center gap-1.5 mt-4">
            <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-1 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.6)] transition-shadow duration-500"></div>
            <p className="text-cyan-400 font-mono tracking-[0.15em] text-[10px] md:text-xs uppercase font-bold group-hover:text-white transition-colors duration-500 flex items-center gap-2">
              <span>🎓</span> Brian Herbert <span>✍️</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send, Cpu, Zap, Activity } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// --- Sub-component: Neural Input ---
const NeuralInput = ({ label, id, type = "text", placeholder, required = false, isTextArea = false }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative group z-10">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor={id} className={`text-[10px] font-mono font-black uppercase tracking-widest transition-colors duration-300 ${isFocused ? 'text-cyan-400' : 'text-gray-500'}`}>
          {label}
        </label>
        <AnimatePresence>
          {isFocused && (
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center gap-1.5 font-mono text-[9px] text-cyan-400/70"
            >
              <Activity className="w-3 h-3 animate-pulse" />
              UPLINK_ACTIVE
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="relative">
        {isTextArea ? (
          <textarea
            id={id}
            required={required}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={4}
            className="w-full bg-[#0B1121]/50 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all font-mono text-sm resize-none placeholder:text-gray-700"
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            id={id}
            required={required}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-[#0B1121]/50 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all font-mono text-sm placeholder:text-gray-700"
            placeholder={placeholder}
          />
        )}
        
        {/* Focus Scanline Effect */}
        <AnimatePresence>
          {isFocused && (
            <motion.div 
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 h-[1px] w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- Sub-component: Mouse-Reactive Contact Card ---
const ContactCard = ({ href, icon, title, value, glowColor, borderColor }: any) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group bg-[#0B1121]/50 backdrop-blur-xl border border-white/5 p-6 rounded-2xl flex items-center gap-4 transition-all duration-500 hover:${borderColor} overflow-hidden`}
    >
      {/* Background Hover Glow */}
      <motion.div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${glowColor}`}
      />
      
      <div style={{ transform: "translateZ(30px)" }} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${glowColor.replace('from-', 'bg-').split(' ')[0]}/20`}>
        <div className="text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
        <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1 flex items-center gap-2">
          <Cpu className="w-2.5 h-2.5 opacity-50 group-hover:text-cyan-400 transition-colors" />
          {title}
        </div>
        <div className="font-bold text-white group-hover:text-white transition-colors truncate max-w-[140px]">
          {value}
        </div>
      </div>

      {/* Border Corner Accents */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-cyan-400/50 transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-cyan-400/50 transition-colors" />
    </motion.a>
  );
};

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="contact" ref={containerRef} className="py-24 scroll-mt-20 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="relative z-10"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl lg:text-5xl font-black font-sans text-white mb-4 tracking-tighter">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto md:mx-0 neon-shadow mb-8"></div>
          <div className="flex items-center gap-3 font-mono text-[10px] text-green-400 uppercase tracking-[0.3em] animate-pulse justify-center md:justify-start font-bold">
            <Zap className="w-3 h-3 fill-green-400" />
            System_Online // Secure_Channel_Encrypted
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex flex-col space-y-10"
          >
            <p className="text-gray-400 text-lg leading-relaxed font-sans max-w-lg">
              Initiate a neural link for high-bandwidth collaboration. Whether it&apos;s a complex architectural challenge or a visionary product, I&apos;m ready to interface.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ContactCard 
                href="mailto:gauravshahi0001@gmail.com"
                icon={<Mail className="w-5 h-5" />}
                title="Email Me"
                value="gauravshahi0001"
                glowColor="from-cyan-500/20 to-transparent"
                borderColor="border-cyan-400/30"
              />
              <ContactCard 
                href="tel:+919128792214"
                icon={<Phone className="w-5 h-5" />}
                title="Call Me"
                value="+91-9128792214"
                glowColor="from-green-500/20 to-transparent"
                borderColor="border-green-400/30"
              />
              <ContactCard 
                href="https://www.linkedin.com/in/gaurav-kumar-259946288/"
                icon={<Linkedin className="w-5 h-5" />}
                title="LinkedIn"
                value="View Profile"
                glowColor="from-blue-500/20 to-transparent"
                borderColor="border-blue-500/30"
              />
              <ContactCard 
                href="https://github.com/Gauravshahi0001"
                icon={<Github className="w-5 h-5" />}
                title="GitHub"
                value="Repositories"
                glowColor="from-purple-500/20 to-transparent"
                borderColor="border-purple-500/30"
              />
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="relative"
          >
             <form action="https://formspree.io/f/your_form_id_here" method="POST" className="bg-[#0B1121]/50 backdrop-blur-xl border border-white/5 p-10 rounded-[2rem] flex flex-col space-y-8 relative overflow-hidden group/form">
                
                <NeuralInput 
                  label="Node_Identity" 
                  id="name" 
                  placeholder="Enter your name..." 
                  required 
                />

                <NeuralInput 
                  label="Protocol_Address" 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email..." 
                  required 
                />

                <NeuralInput 
                  label="Data_Packet" 
                  id="message" 
                  isTextArea 
                  placeholder="Transmit your message parameters..." 
                  required 
                />

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(34,211,238,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative z-10 group flex items-center justify-center w-full px-8 py-5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-black font-mono text-[11px] tracking-[0.4em] uppercase rounded-xl transition-all overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center gap-3">
                    INITIATE_UPLINK <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </motion.button>

                <div className="pt-4 flex justify-center gap-6 opacity-30">
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                </div>
              </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

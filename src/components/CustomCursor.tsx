'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // useMotionValue for direct mouse tracking (smooth but instant)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useSpring for "floaty" delay effect
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if mouse is over a link, button, or something with a pointer cursor
      if (target.closest('a, button, [role="button"]')) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           className="pointer-events-none fixed z-[9999] transition-colors duration-300"
           style={{
             left: 0,
             top: 0,
             translateX: cursorX,
             translateY: cursorY,
             x: "-50%",
             y: "-50%",
           }}
        >
          <motion.div
            className={`${
              isHovered ? 'text-purple-500' : 'text-cyan-400'
            } drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: isHovered ? 1.5 : 1, 
              opacity: 1,
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
            }}
            transition={{
              scale: { type: "spring", stiffness: 300, damping: 20 },
              rotateX: { duration: 3, repeat: Infinity, ease: "linear" },
              rotateY: { duration: 3, repeat: Infinity, ease: "linear" },
              opacity: { duration: 0.2 }
            }}
          >
            <Star size={24} fill="currentColor" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mr-3 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs tracking-wide font-light whitespace-nowrap shadow-2xl backdrop-blur-md select-none pointer-events-none"
          >
            Fale conosco em total sigilo
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <a
        href="https://wa.me/5516992533317?text=Olá, gostaria de agendar uma avaliação confidencial."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-14 w-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-green-500 hover:text-green-400 transition-colors duration-300 shadow-[0_0_30px_rgba(34,197,94,0.08)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:scale-105 active:scale-95 group"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full border border-green-500/30 animate-[ping_2s_infinite]" />
        
        <MessageCircle className="w-6 h-6 fill-current transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, ScanFace, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const pilares = [
  {
    id: 'protese',
    title: 'Prótese Capilar Avançada',
    description: 'Transformação indolor, sem cirurgia, com materiais premium e base ultrafina que reproduz fielmente o couro cabeludo.',
    icon: Sparkles,
  },
  {
    id: 'visagismo',
    title: 'Visagismo Masculino',
    description: 'Análise profunda das proporções do seu rosto para alinhar o corte e a barba com a sua personalidade e imagem de sucesso.',
    icon: ScanFace,
  },
  {
    id: 'barbearia',
    title: 'Barbearia Premium',
    description: 'Cuidado recorrente e o corte de transição milimétrico que garante a invisibilidade da prótese no seu dia a dia.',
    icon: Scissors,
  }
];

export function PilaresSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollPosition = e.currentTarget.scrollLeft;
    // Calculate index based on container scroll width
    const containerWidth = e.currentTarget.clientWidth;
    if (containerWidth > 0) {
      const index = Math.round(scrollPosition / (containerWidth - 32));
      setActiveSlide(Math.max(0, Math.min(pilares.length - 1, index)));
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-zinc-50 mb-4">A Tríade de Ouro</h2>
          <p className="text-zinc-400 font-light max-w-2xl mx-auto text-lg">
            Muito além de uma aplicação de cabelo. Nossa metodologia une três pilares para entregar um resultado absolutamente natural.
          </p>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div 
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 px-4 -mx-4 md:px-0 md:mx-0"
        >
          {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            return (
              <motion.div
                key={pilar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={cn(
                  "relative group flex flex-col p-8 rounded-2xl shrink-0 snap-center",
                  "w-[82vw] min-w-[270px] md:w-auto md:min-w-0",
                  "bg-zinc-900/50 border border-zinc-800/60",
                  "hover:bg-zinc-900 hover:border-amber-600/40 hover:-translate-y-1 transition-all duration-300"
                )}
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                
                <div className="h-12 w-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-serif text-zinc-100 mb-3">{pilar.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
                  {pilar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Slide Indicators */}
        <div className="flex md:hidden justify-center items-center gap-1.5 mt-6">
          {pilares.map((_, idx) => (
            <div 
              key={idx} 
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeSlide === idx ? "w-6 bg-amber-500" : "w-1.5 bg-zinc-800"
              )} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

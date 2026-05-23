"use client";

import React from 'react';
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  "relative group flex flex-col p-8 rounded-2xl",
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
      </div>
    </section>
  );
}

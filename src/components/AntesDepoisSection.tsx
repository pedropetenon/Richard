"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowLeftRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const cases = [
  {
    id: 1,
    name: "Caso 01 — Restauração Frontal & Alinhamento Temporal",
    subtitle: "Visagismo focado em autoridade e presença profissional.",
    beforeImg: "/images/case1-before.png",
    afterImg: "/images/case1-after.png",
    details: [
      "Prótese capilar micropele ultrarrealista frontal.",
      "Visagismo para harmonização com formato mandibular.",
      "Corte degradê de transição invisível."
    ]
  },
  {
    id: 2,
    name: "Caso 02 — Preenchimento de Coroa & Densidade Geral",
    subtitle: "Restauração de volume para imagem rejuvenescida e ativa.",
    beforeImg: "/images/case2-before.png",
    afterImg: "/images/case2-after.png",
    details: [
      "Prótese capilar base de seda premium híbrida.",
      "Design de barba integrada com linhas faciais.",
      "Finalização com técnicas avançadas de barbearia de luxo."
    ]
  }
];

export function AntesDepoisSection() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCase = cases[activeCaseIndex];
  
  // Slider position state (0 to 100 percentage)
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, container);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isSliding && e.buttons !== 1) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, container);
  };

  return (
    <section className="py-24 px-4 sm:px-6 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800/60 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-xs uppercase tracking-wider text-amber-500 font-medium">Galeria de Resultados</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-zinc-50 leading-tight">
              A transformação visível, a naturalidade imperceptível.
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-zinc-400 font-light max-w-sm text-base md:text-lg leading-relaxed md:text-right"
          >
            Foco no caimento natural dos fios, no alinhamento das proporções e na postura de confiança que definem o novo homem.
          </motion.p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex gap-4 border-b border-zinc-900 pb-4 mb-10 overflow-x-auto scrollbar-none">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50); // Reset slider
              }}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                activeCaseIndex === idx
                  ? "bg-amber-600/10 text-amber-500 border border-amber-600/30"
                  : "bg-transparent text-zinc-400 hover:text-zinc-200 border border-transparent"
              )}
            >
              Caso {idx + 1}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Split Slider Container */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div 
              className="relative w-full aspect-[4/5] max-w-[500px] rounded-3xl overflow-hidden border border-zinc-800 select-none cursor-ew-resize group"
              onMouseMove={handleMouseMove}
              onMouseDown={() => setIsSliding(true)}
              onMouseUp={() => setIsSliding(false)}
              onMouseLeave={() => setIsSliding(false)}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setIsSliding(true)}
              onTouchEnd={() => setIsSliding(false)}
            >
              {/* After Image (Base Layer) */}
              <div className="absolute inset-0 w-full h-full bg-zinc-900">
                <img
                  src={activeCase.afterImg}
                  alt="Depois - Imagem de Impacto"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  draggable={false}
                />
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/60 rounded-xl text-xs uppercase tracking-wider text-amber-500 font-semibold z-10">
                  Depois
                </div>
              </div>

              {/* Before Image (Top Sliding Layer) */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <div className="absolute inset-0 w-full h-full bg-zinc-900">
                  <img
                    src={activeCase.beforeImg}
                    alt="Antes - Imagem de Referência"
                    // Multiplied width correction so image doesn't squash when container shrinks
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ width: '100%', maxWidth: 'none' }}
                    draggable={false}
                  />
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/60 rounded-xl text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    Antes
                  </div>
                </div>
              </div>

              {/* Slider Line & Handle bar */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-amber-500/80 cursor-ew-resize z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-950 border-2 border-amber-500 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                  <ArrowLeftRight className="w-4 h-4 text-amber-500" />
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-xs text-zinc-500 flex items-center gap-1.5 font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Arraste a linha central para comparar os detalhes
            </p>
          </div>

          {/* Details & Specs Section */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-serif text-zinc-50 mb-3">{activeCase.name}</h3>
                <p className="text-zinc-400 font-light mb-8 text-base">
                  {activeCase.subtitle}
                </p>

                <div className="space-y-4 mb-8">
                  {activeCase.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                      <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">{detail}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/5516992533317?text=Olá, gostaria de agendar uma consulta para entender as opções de prótese capilar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group text-amber-500 font-medium hover:text-amber-400 transition-colors text-sm md:text-base"
                >
                  <span>Ver diagnóstico para meu caso</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

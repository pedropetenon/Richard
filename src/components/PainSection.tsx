"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Wind, Clock, Lock, CameraOff } from 'lucide-react';
import { cn } from '@/lib/utils';

const cards = [
  {
    icon: Wind,
    title: "O medo do vento",
    description: "Viver em alerta constante, temendo que qualquer brisa revele o que você tenta esconder."
  },
  {
    icon: Clock,
    title: "Aparência cansada",
    description: "Ter 30 anos, mas o reflexo no espelho insistir em mostrar 45."
  },
  {
    icon: Lock,
    title: "Refém do boné",
    description: "A sensação de estar incompleto sem um acessório para esconder quem você é."
  },
  {
    icon: CameraOff,
    title: "O distanciamento social",
    description: "Evitar fotos, encontros e momentos marcantes para não lidar com a própria imagem."
  }
];

export function PainSection() {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Coluna da Esquerda (Narrativa) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-50 leading-tight">
                O maior prejuízo de um homem não é financeiro.{' '}
                <span className="text-amber-500 block mt-2">
                  É a perda da sua identidade.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-zinc-300 font-sans font-light text-base sm:text-lg leading-relaxed pt-2"
            >
              Você investe no seu sucesso, mas a calvície continua te envelhecendo. Resgate sua imagem, seu estilo e a presença que ela roubou de você.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-zinc-450 font-sans font-light text-sm sm:text-base leading-relaxed pb-6"
            >
              Nossa metodologia oferece um <strong className="text-zinc-200 font-medium">método indolor, sem cirurgia e 100% natural</strong> para que sua imagem volte a acompanhar a altura do homem de impacto que você se tornou.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://wa.me/5516992533317?text=Olá, gostaria de agendar minha avaliação gratuita e confidencial."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-amber-600/40 text-amber-500 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 text-sm"
              >
                Agende agora sua avaliação gratuita
              </a>
            </motion.div>
          </div>

          {/* Coluna da Direita (Grid de Cenários) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-105px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={cn(
                    "p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800",
                    "hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300",
                    "flex flex-col gap-4"
                  )}
                >
                  <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-zinc-200 mb-1.5">{card.title}</h3>
                    <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 md:p-16 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm text-center flex flex-col items-center"
        >
          <div className="h-12 w-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6">
            <Calendar className="w-5 h-5" />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-zinc-50 mb-6 leading-tight max-w-2xl">
            Você não precisa mais do boné para se sentir seguro.
          </h2>

          <p className="text-zinc-400 font-light text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            Devolva <strong className="text-zinc-200 font-medium">10 anos de juventude</strong> ao seu rosto em apenas <strong className="text-zinc-200 font-medium">2 horas</strong>. Um resultado imediato, imperceptível e sob medida para a sua história.
          </p>

          <a
            href="https://wa.me/5516992533317?text=Olá, gostaria de agendar minha avaliação gratuita."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.45)]"
          >
            <span>Agende agora sua avaliação gratuita</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>


          <span className="text-zinc-650 text-xs mt-6 font-sans">
            *Vagas limitadas para este mês devido ao atendimento exclusivo e personalizado.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

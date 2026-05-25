"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-zinc-950">
      
      {/* Background Image (Desktop only) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        {/* Golden Radial Glow behind the owner */}
        <div className="absolute right-[5%] bottom-[-5%] w-[50%] h-[80%] bg-amber-500/10 rounded-full blur-[120px]" />
        
        <div className="absolute right-0 top-0 bottom-0 w-[55%] h-full">
          <Image
            src="/images/owner-refined.png"
            alt="Richard - Centro de Imagem Masculina"
            fill
            priority
            className="object-contain object-bottom opacity-85 transition-opacity duration-700"
          />
          {/* Gradient transition on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>
        {/* Full screen solid black block on the left */}
        <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-zinc-950" />
      </div>

      {/* Top Header/Navbar */}
      <header className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="relative w-[68px] h-[96px] flex items-center justify-center">
            <Image 
              src="/images/logo-v2.png" 
              alt="Richard Barbeiro e Próteses Capilar Logo" 
              width={68}
              height={96}
              className="object-contain"
            />
          </div>
          <span className="font-serif text-zinc-100 text-sm sm:text-lg tracking-widest font-semibold uppercase leading-none">
            <span className="sm:hidden">Richard</span>
            <span className="hidden sm:inline">Richard Barbeiro e Próteses Capilar</span>
          </span>
        </div>

        <a
          href="https://wa.me/5516992533317?text=Olá, gostaria de agendar uma avaliação."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 sm:px-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-xs shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.45)]"
        >
          Entre em contato
        </a>

      </header>

      {/* Mobile/Tablet Owner Image (Visible only on mobile/tablet) */}
      <div className="relative z-10 w-full flex justify-center px-4 lg:hidden mt-2 mb-6">
        <div className="relative w-full max-w-sm aspect-square bg-gradient-to-b from-amber-500/5 to-amber-500/10 rounded-2xl border border-amber-500/10 overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.05)]">
          {/* Subtle Golden Radial Glow behind the owner on mobile */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)]" />
          <Image
            src="/images/owner-refined.png"
            alt="Richard - Centro de Imagem Masculina"
            fill
            priority
            className="object-contain object-bottom opacity-100 transition-opacity duration-700"
          />
        </div>
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex-1 flex items-center pb-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Subtle Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/60 mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-300">
                Centro Especializado em Imagem Masculina
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif text-zinc-50 mb-6 leading-[1.15] tracking-tight max-w-xl"
            >
              Recupere sua confiança e projete sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 block mt-1">
                melhor versão
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg text-zinc-400 max-w-lg mb-10 leading-relaxed font-sans font-light"
            >
              A fusão perfeita entre a restauração capilar avançada, o visagismo científico e a barbearia de alta performance para um resultado invisível e sob medida.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              href="https://wa.me/5516992533317?text=Olá, gostaria de agendar uma avaliação confidencial."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.45)]"
            >
              <span>Agende agora sua avaliação gratuita</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 text-sm text-zinc-500 flex items-center gap-2"
            >
              <span className="inline-block w-4 border-t border-zinc-700"></span>
              Atendimento em São Carlos - SP
              <span className="inline-block w-4 border-t border-zinc-700"></span>
            </motion.p>
          </div>

          {/* Right Column: Empty visual space on desktop */}
          <div className="lg:col-span-5 hidden lg:block" />

        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-6 relative z-10 w-full" />
    </section>
  );
}

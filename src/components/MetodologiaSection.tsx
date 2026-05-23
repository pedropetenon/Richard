"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, XCircle } from 'lucide-react';

export function MetodologiaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800/60 mb-4">
              <Target className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-xs uppercase tracking-wider text-amber-500 font-medium">Metodologia Científica</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-zinc-50 mb-6">
              Por que nossos resultados são invisíveis?
            </h2>
            <p className="text-zinc-400 font-light max-w-2xl mx-auto text-base md:text-lg">
              Clínicas comuns limitam-se a apenas colar o cabelo. Nossa abordagem trata a sua imagem como uma obra de arte única, integrando ciência, design e acabamento.
            </p>
          </motion.div>
        </div>

        {/* Split Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-20">
          
          {/* Traditional Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-zinc-900 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/20 border border-red-900/30 text-red-500 mb-6 text-xs uppercase tracking-wider">
                O Processo Comum
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-zinc-300 mb-6">Apenas "Colagem" de Cabelo</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-900 shrink-0 mt-0.5" />
                  <p className="text-zinc-500 text-sm md:text-base font-light">Próteses padronizadas sem considerar o formato da testa ou linhas temporais.</p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-900 shrink-0 mt-0.5" />
                  <p className="text-zinc-500 text-sm md:text-base font-light">Falta de análise de proporção facial, resultando em layouts de cabelo artificiais.</p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-900 shrink-0 mt-0.5" />
                  <p className="text-zinc-500 text-sm md:text-base font-light">Cortes genéricos que deixam degraus marcados entre a prótese e o cabelo natural.</p>
                </li>
              </ul>
            </div>
            <p className="text-zinc-600 text-xs mt-8 italic border-t border-zinc-900 pt-4">O resultado é um aspecto artificial e insegurança constante.</p>
          </motion.div>

          {/* Our Premium Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-zinc-900/60 border border-amber-600/20 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-600/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-600/10 border border-amber-600/30 text-amber-500 mb-6 text-xs uppercase tracking-wider">
                Nosso Método Integrado
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-zinc-100 mb-6">A Fusão Científica & Artística</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 text-sm md:text-base font-light">
                    <strong className="text-zinc-100 font-normal">Estudo de Visagismo:</strong> Mapeamento tridimensional das linhas de força e expressão do seu rosto.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 text-sm md:text-base font-light">
                    <strong className="text-zinc-100 font-normal">Micropele Ultrafina:</strong> Bases respiráveis sob medida que simulam a densidade natural e o redemoinho do seu próprio cabelo.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 text-sm md:text-base font-light">
                    <strong className="text-zinc-100 font-normal">Corte de Fusão:</strong> Técnicas avançadas de textura e barbearia para mesclar os fios da prótese perfeitamente com os seus.
                  </p>
                </li>
              </ul>
            </div>
            <p className="text-amber-500/80 text-xs mt-8 font-medium border-t border-zinc-800/60 pt-4">O resultado é 100% imperceptível, mesmo ao olhar mais atento ou ao toque.</p>
          </motion.div>

        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-zinc-900 pt-16">
          {[
            { step: "01", title: "Visagismo de Harmonização", desc: "Análise das suas linhas geométricas, formato do crânio e densidade capilar restante." },
            { step: "02", title: "Personalização Cirúrgica", desc: "Ajuste milimétrico da prótese na área exata para que siga o fluxo natural de crescimento dos fios." },
            { step: "03", title: "Manutenção & Integração", desc: "Corte e acabamento finalizados por barbeiros especializados em transições invisíveis." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group"
            >
              <div className="text-3xl font-serif text-amber-500/30 group-hover:text-amber-500/70 transition-colors mb-4">{item.step}</div>
              <h4 className="text-lg font-serif text-zinc-200 mb-2">{item.title}</h4>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

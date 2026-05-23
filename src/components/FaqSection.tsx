"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "O procedimento dói ou necessita de cirurgia?",
    answer: "Absolutamente não. A prótese capilar é um procedimento estético 100% indolor e não invasivo. Sem agulhas, sem anestesia e sem tempo de recuperação. Você entra na clínica e sai com o resultado final no mesmo dia."
  },
  {
    question: "Posso malhar, entrar na piscina ou correr?",
    answer: "Sim, perfeitamente. A fixação é feita com adesivos e colas médicas de alta performance, desenvolvidas especialmente para rotinas ativas, esportes de alto impacto e exposição à água ou suor. Você pode seguir sua vida social e esportiva sem qualquer limitação."
  },
  {
    question: "Como funciona a manutenção e a sua frequência?",
    answer: "A manutenção é simples e indolor. Ela serve para higienizar a base e o couro cabeludo, além de renovar a fixação. É realizada de forma prática em nosso espaço de barbearia privada a cada 15 a 25 dias, dependendo da sua oleosidade e rotina de atividades."
  },
  {
    question: "Qual a durabilidade de uma prótese capilar?",
    answer: "A vida útil de uma prótese premium varia de 6 a 12 meses, dependendo do modelo de base escolhido (bases ultrafinas priorizam o naturalismo extremo, enquanto bases híbridas priorizam a durabilidade) e dos seus cuidados diários."
  },
  {
    question: "A prótese é perceptível ao olhar ou ao toque?",
    answer: "Não. A nossa metodologia combina a base micropele ultrafina com o visagismo capilar. Isso significa que a espessura da base se funde à pele e o corte de transição da barbearia disfarça a junção, tornando a prótese imperceptível visualmente e ao toque."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800/60 mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-xs uppercase tracking-wider text-amber-500 font-medium">Esclarecimentos</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-zinc-50 mb-6">
              Dúvidas Frequentes
            </h2>
            <p className="text-zinc-400 font-light max-w-2xl mx-auto text-base md:text-lg">
              Transparência total para que você recupere sua autoestima com segurança e tranquilidade.
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={cn(
                  "border rounded-2xl transition-colors duration-300 overflow-hidden",
                  isOpen 
                    ? "bg-zinc-900/50 border-amber-600/30" 
                    : "bg-zinc-900/20 border-zinc-850 hover:bg-zinc-900/30 hover:border-zinc-800"
                )}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif text-zinc-100 pr-4">
                    {faq.question}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-zinc-950 border border-zinc-850 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-amber-500" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-zinc-900/50">
                        <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

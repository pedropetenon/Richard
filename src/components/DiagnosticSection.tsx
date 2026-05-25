"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, ArrowRight, Check, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizStep {
  title: string;
  question: string;
  options: {
    label: string;
    value: string;
    desc: string;
  }[];
}

const quizSteps: QuizStep[] = [
  {
    title: "Área de Atenção",
    question: "Qual é a principal área que você gostaria de preencher ou restaurar?",
    options: [
      { label: "Linha Frontal & Entradas", value: "linha_frontal", desc: "Avanço da linha de cabelo para emoldurar o rosto com naturalidade." },
      { label: "Coroa & Topo da Cabeça", value: "coroa_topo", desc: "Preenchimento completo da área superior com densidade ideal." },
      { label: "Restauração Total", value: "total", desc: "Cobertura completa integrando as laterais e o topo da cabeça." }
    ]
  },
  {
    title: "Estilo de Vida & Rotina",
    question: "Qual opção descreve melhor o seu dia a dia e nível de atividade?",
    options: [
      { label: "Corporativo / Negócios", value: "executivo", desc: "Rotina de escritório, reuniões e busca por uma imagem de alta autoridade." },
      { label: "Esportivo / Muito Ativo", value: "esportista", desc: "Prática diária de exercícios físicos intensos, natação ou corrida." },
      { label: "Casual / Prático", value: "casual", desc: "Busca por um visual moderno, de fácil manutenção e muito versátil." }
    ]
  }
];

export function DiagnosticSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (value: string) => {
    const newAnswers = { ...answers, [currentStep]: value };
    setAnswers(newAnswers);

    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
  };

  const getRecommendation = () => {
    const area = answers[0];
    const style = answers[1];

    let baseRec = "";
    let visagismRec = "";

    if (area === "linha_frontal") {
      baseRec = "Prótese Micropele Linha Frontal (0.03mm, ultrafina e invisível)";
    } else if (area === "coroa_topo") {
      baseRec = "Prótese Premium Lace Híbrida (alta durabilidade e respiração do couro cabeludo)";
    } else {
      baseRec = "Prótese Híbrida Completa Premium sob medida";
    }

    if (style === "executivo") {
      visagismRec = "Visagismo de Autoridade (linhas temporais retas e corte clássico refinado)";
    } else if (style === "esportista") {
      visagismRec = "Visagismo Ativo (densidade equilibrada com foco em fixação de alta performance para suor)";
    } else {
      visagismRec = "Visagismo Moderno (textura despojada e transições degradê modernas)";
    }

    return { baseRec, visagismRec };
  };

  const getWhatsAppLink = () => {
    const { baseRec, visagismRec } = getRecommendation();
    const areaLabel = quizSteps[0].options.find(o => o.value === answers[0])?.label || "";
    const styleLabel = quizSteps[1].options.find(o => o.value === answers[1])?.label || "";

    const text = `Olá, realizei o Diagnóstico de Visagismo no site.
*Área de Atenção:* ${areaLabel}
*Estilo de Vida:* ${styleLabel}
*Recomendação:* ${baseRec} + ${visagismRec}.
Gostaria de agendar minha avaliação gratuita e confidencial.`;

    return `https://wa.me/5516992533317?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-24 px-4 sm:px-6 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800/60">
              <ClipboardList className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-xs uppercase tracking-wider text-amber-500 font-medium">Diagnóstico de Imagem</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif text-zinc-50 leading-tight">
              Descubra seu perfil de Visagismo
            </h2>
            
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
              Responda a duas perguntas rápidas e receba uma análise preliminar sob medida sobre o modelo de prótese e corte ideais para o seu rosto e rotina.
            </p>
          </div>

          {/* Quiz Container Right Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm relative min-h-[380px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {!isFinished ? (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col flex-1"
                  >
                    {/* Progress indicator */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
                        Etapa {currentStep + 1} de {quizSteps.length}
                      </span>
                      <div className="flex gap-1.5">
                        {quizSteps.map((_, idx) => (
                          <div
                            key={idx}
                            className={cn(
                              "h-1 w-8 rounded-full transition-all duration-350",
                              idx <= currentStep ? "bg-amber-500" : "bg-zinc-800"
                            )}
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-serif text-zinc-200 mb-6">
                      {quizSteps[currentStep].question}
                    </h3>

                    <div className="space-y-3 flex-1">
                      {quizSteps[currentStep].options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleOptionSelect(option.value)}
                          className={cn(
                            "w-full text-left p-4 rounded-xl border transition-all duration-300 group relative",
                            "bg-zinc-950/40 border-zinc-850 hover:border-amber-600/30 hover:bg-zinc-900/50"
                          )}
                        >
                          <div className="font-serif text-zinc-200 text-sm md:text-base group-hover:text-amber-500 transition-colors">
                            {option.label}
                          </div>
                          <div className="text-zinc-500 text-xs font-light mt-1 leading-relaxed">
                            {option.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col flex-1 justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-green-500 mb-4">
                        <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs uppercase tracking-wider font-semibold">Diagnóstico Concluído</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-serif text-zinc-100 mb-6">
                        Análise Preliminar de Visagismo
                      </h3>

                      <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-850 space-y-4 mb-6">
                        <div>
                          <span className="text-xs text-zinc-500 uppercase block tracking-wider font-mono mb-1">Base Recomendada:</span>
                          <span className="text-sm md:text-base text-zinc-200 font-light">{getRecommendation().baseRec}</span>
                        </div>
                        <div className="border-t border-zinc-900/80 pt-3">
                          <span className="text-xs text-zinc-500 uppercase block tracking-wider font-mono mb-1">Corte & Integração:</span>
                          <span className="text-sm md:text-base text-zinc-200 font-light">{getRecommendation().visagismRec}</span>
                        </div>
                      </div>
                      
                      <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed mb-6">
                        Para customizar esses parâmetros tridimensionalmente, agende agora sua avaliação gratuita. Enviaremos estes dados para o especialista preparar o seu atendimento.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center mt-auto">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.45)] text-sm md:text-base"
                      >
                        <span>Enviar Diagnóstico no WhatsApp</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>

                      <button
                        onClick={resetQuiz}
                        className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5 text-xs tracking-wider uppercase font-mono py-2"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Reiniciar
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

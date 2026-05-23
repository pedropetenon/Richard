"use client";

import React from 'react';
import { MapPin, Phone, Star, Calendar, ShieldCheck, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
  id: number;
  author: string;
  avatar: string; // Initials
  rating: number;
  date: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Carlos Mendes",
    avatar: "CM",
    rating: 5,
    date: "Há 2 semanas",
    text: "O trabalho do Richard é simplesmente impecável. A prótese capilar ficou extremamente natural e imperceptível, ninguém diz que não é meu cabelo de verdade. O atendimento individualizado e focado em visagismo faz toda a diferença."
  },
  {
    id: 2,
    author: "Marcos Silva",
    avatar: "MS",
    rating: 5,
    date: "Há 1 mês",
    text: "Excelente profissional. Frequento o espaço do Richard para a manutenção quinzenal da prótese e corte. O ambiente é privativo, confortável e o cuidado dele com os detalhes é diferenciado. Recomendo muito!"
  },
  {
    id: 3,
    author: "Eduardo Santos",
    avatar: "ES",
    rating: 5,
    date: "Há 3 semanas",
    text: "Estava muito inseguro em relação à prótese capilar, mas o Richard sanou todas as minhas dúvidas durante a avaliação gratuita. O resultado final superou minhas expectativas e devolveu minha autoconfiança de forma imediata."
  }
];

export function GoogleBusinessSection() {
  const mapQuery = encodeURIComponent("Rua Orlando Pérez, 662 - Loteamento Habitacional São Carlos 2, São Carlos - SP");
  const mapUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800/80 mb-4">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-300">
              Espaço Privativo & Confidencial
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-50 mb-4">
            Onde a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Transformação</span> Acontece
          </h2>
          <p className="text-zinc-400 font-sans font-light text-base sm:text-lg">
            Visite nossa clínica de visagismo e barbearia em São Carlos. Um ambiente projetado para sua total discrição e conforto.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Google My Business Rating & Reviews */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* GMB Rating Overview */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-900 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-100">Avaliações no Google</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-amber-500 font-bold text-xl leading-none">5.0</span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-500 font-light ml-1">(Pontuação Máxima)</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.google.com/search?q=protese+capilar+sao+carlos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-amber-600/40 hover:bg-zinc-800/50 text-xs font-medium text-zinc-300 transition-all duration-300 hover:text-amber-500"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Testimonials list */}
            <div className="space-y-4 flex-1">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-zinc-400 pl-1">Depoimentos Recentes</h4>
              
              <div className="grid grid-cols-1 gap-4">
                {REVIEWS.map((review) => (
                  <motion.div 
                    key={review.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: review.id * 0.1 }}
                    className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800/80 transition-colors duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-zinc-950 font-bold text-xs flex items-center justify-center select-none">
                            {review.avatar}
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-zinc-200">{review.author}</h5>
                            <span className="text-[10px] text-zinc-500 font-light">{review.date}</span>
                          </div>
                        </div>
                        <div className="flex text-amber-500 gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Address Details */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Info Cards */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-900 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-300">Nosso Endereço</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1 leading-relaxed">
                    Rua Orlando Pérez, 662<br />
                    Loteamento Habitacional São Carlos 2<br />
                    São Carlos - SP, CEP 13568-812
                  </p>
                </div>
              </div>

              <div className="border-t border-zinc-900 my-4" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-300">Contato / Agendamento</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
                    WhatsApp: (16) 99253-3317
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="relative rounded-2xl border border-zinc-900 overflow-hidden bg-zinc-900/20 flex-1 min-h-[300px] group">
              <iframe
                title="Google Maps Location"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ 
                  border: 0, 
                  filter: 'invert(90%) hue-rotate(180deg) grayscale(20%) contrast(90%) brightness(95%)' 
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
              />
            </div>

          </div>

        </div>

        {/* Bottom CTA for directions */}
        <div className="text-center mt-8">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-amber-500 hover:text-amber-400 hover:underline transition-colors font-medium uppercase tracking-wider"
          >
            <span>Como chegar no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

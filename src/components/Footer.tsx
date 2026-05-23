import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 bg-zinc-950 border-t border-zinc-900 text-zinc-500 text-xs md:text-sm font-light">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div className="text-center md:text-left space-y-2">
          <div className="font-serif text-zinc-300 text-base font-semibold tracking-wider">
            RICHARD BARBEIRO E PRÓTESES CAPILAR
          </div>
          <p className="tracking-wide">
            © {currentYear} Richard Barbeiro e Próteses Capilar. Todos os direitos reservados.
          </p>
        </div>

        {/* Center: Address */}
        <div className="text-center space-y-1.5">
          <p className="text-zinc-400 font-sans tracking-wide">
            Rua Orlando Pérez, 662 - Habitacional São Carlos 2, São Carlos - SP, 13568-812
          </p>
        </div>

        {/* Right Side: Legal links */}
        <div className="flex gap-6">
          <a 
            href="#" 
            className="hover:text-zinc-300 transition-colors duration-300 tracking-wide hover:underline underline-offset-4"
          >
            Termos de Uso
          </a>
          <a 
            href="#" 
            className="hover:text-zinc-300 transition-colors duration-300 tracking-wide hover:underline underline-offset-4"
          >
            Políticas de Privacidade
          </a>
        </div>

      </div>
    </footer>
  );
}

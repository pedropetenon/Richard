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

        {/* Right Side: Social & Legal links */}
        <div className="flex flex-col items-center md:items-end gap-3.5">
          {/* Social Icons */}
          <div className="flex gap-4 items-center">
            <a 
              href="https://www.instagram.com/richardprotesecapilar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-amber-500 transition-colors duration-300 p-1.5 rounded-full hover:bg-zinc-900 border border-transparent hover:border-zinc-800/80"
              aria-label="Siga-nos no Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[18px] h-[18px]"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/BarberShopRichard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-amber-500 transition-colors duration-300 p-1.5 rounded-full hover:bg-zinc-900 border border-transparent hover:border-zinc-800/80"
              aria-label="Siga-nos no Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[18px] h-[18px]"
              >
                <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-5">
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

      </div>
    </footer>
  );
}

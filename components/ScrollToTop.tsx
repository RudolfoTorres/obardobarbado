'use client';

import { useState, useEffect } from 'react';
import { BowArrow } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora o scroll da página para mostrar/esconder o botão
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para rolar suavemente até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
   <button
        type="button"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-amber-950 border border-amber-600/50 text-amber-300 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-amber-900 hover:scale-110 active:scale-95 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1s0 pointer-events-none'
        }`}
        >
        <BowArrow className="w-5 h-5 -rotate-45" />
    </button>
  );
}
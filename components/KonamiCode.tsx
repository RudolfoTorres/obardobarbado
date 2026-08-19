'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function KonamiCode() {
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [showAsh, setShowAsh] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignora se o usuário estiver digitando em um input de formulário ou textarea
      if (
        ['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)
      ) {
        return;
      }

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      setInputSequence((prev) => {
        const updated = [...prev, key].slice(-KONAMI_CODE.length);

        const isMatch = KONAMI_CODE.every(
          (val, index) => val.toLowerCase() === updated[index]?.toLowerCase()
        );

        if (isMatch) {
          setShowAsh(true);
          // Permanece visível por 3.5s antes de deslizar de volta para baixo
          setTimeout(() => setShowAsh(false), 3500);
          return [];
        }

        return updated;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed bottom-0 right-0 z-50 pointer-events-none transition-all duration-700 ease-in-out transform ${
        showAsh 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-full opacity-0'
      }`}
    >
      <Image
        src="/images/ash.png"
        alt="Ash Ashes espiando"
        width={350}
        height={350}
        className="object-contain drop-shadow-2xl"
      />
    </div>
  );
}
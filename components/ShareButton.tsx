"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

interface ShareButtonProps {
  title: string;
}

export function ShareButton({ title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: `Confira "${title}" no blog O Bardo Barbado!`,
          url: shareUrl,
        });
        return;
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Erro ao compartilhar:", err);
        }
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar link:", err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 hover:text-bardo-purple transition-colors cursor-pointer"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-600" />
          <span className="text-green-600 font-medium">Link copiado!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          <span>Compartilhar</span>
        </>
      )}
    </button>
  );
}
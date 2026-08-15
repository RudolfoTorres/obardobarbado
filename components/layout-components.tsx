"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Beer, PenTool, Home, Info, Mail, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Início", href: "/", icon: Home },
  { name: "Contos", href: "/contos", icon: PenTool },
  { name: "Sobre", href: "/sobre", icon: Info },
  //{ name: "Newsletter", href: "/newsletter", icon: Mail }, A validar metodologia de negócio //
];

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-parchment/90 backdrop-blur-md border-b border-wood/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2 group">
          <Beer className="w-8 h-8 text-bardo-purple transition-transform group-hover:rotate-12" />
          <span className="font-serif text-2xl font-bold text-ink tracking-tight">
            O Bardo Barbado
          </span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-serif text-lg transition-colors hover:text-bardo-purple relative py-1",
                pathname === item.href ? "text-bardo-purple" : "text-ink/70"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-bardo-purple rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Botão de Menu Clássico (Mobile) */}
        <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="md:hidden p-2 text-ink hover:text-bardo-purple transition-colors focus:outline-none"
            >
            {isOpen ? (
                <X className="w-7 h-7" />
            ) : (
                <Menu className="w-7 h-7" />
            )}
        </button>
      </div>

      {/* Drawer do Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-parchment/95 border-b border-wood/20 px-6 py-6 animate-in slide-in-from-top duration-200 backdrop-blur-md">
          <nav className="flex flex-col gap-3 font-serif">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-sm text-lg transition-colors border-b border-wood/5 last:border-none",
                    isActive
                      ? "bg-bardo-purple/10 text-bardo-purple font-bold"
                      : "text-ink/80 hover:bg-wood/5 hover:text-bardo-purple"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="w-full bg-ink text-parchment py-12">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center mb-6">
        <Beer className="w-10 h-10 text-gold" />
      </div>
      <h3 className="font-serif text-2xl mb-2">O Bardo Barbado</h3>
      <p className="font-sans text-parchment/60 mb-8 max-w-md mx-auto">
        Crônicas medievais para um mundo absurdamente moderno. Escrito com tinta, suor e xilofone.
      </p>
      <div className="border-t border-parchment/10 pt-8 text-sm">
        © {new Date().getFullYear()} Glockenspiel & Cia. Todos os direitos reservados à taverna.
      </div>
    </div>
  </footer>
);

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("container mx-auto px-4", className)}>
    {children}
  </div>
);
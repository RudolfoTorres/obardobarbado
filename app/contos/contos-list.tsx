"use client";

import { useState, useMemo } from "react";
import { Header, Footer, Container } from "@/components/layout-components";
import { TaleCard } from "@/components/content-components";
import { Search } from "lucide-react";
import { Conto } from "@/types";
import { cn } from "@/lib/utils";

export default function ContosPage({ initialContos }: { initialContos: Conto[] }) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"recent" | "longest" | "shortest">("recent");

  // 1. Extração de tags com fallback seguro contra undefined/null
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    initialContos.forEach((c) => {
      (c.tags || []).forEach((t: string) => tags.add(t));
    });
    return Array.from(tags);
  }, [initialContos]);

  // 2. Filtro e Ordenação integrados em um único fluxo legível
  const filteredContos = useMemo(() => {
    // Filtra por termo de busca e tag selecionada
    const result = initialContos.filter((c) => {
      const matchesSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.excerpt.toLowerCase().includes(search.toLowerCase());

      const matchesTag = !selectedTag || (c.tags || []).includes(selectedTag);

      return matchesSearch && matchesTag;
    });

    // Ordena o resultado filtrado
    if (sortBy === "recent") {
      result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else if (sortBy === "longest") {
      result.sort((a, b) => b.readingTime - a.readingTime);
    } else if (sortBy === "shortest") {
      result.sort((a, b) => a.readingTime - b.readingTime);
    }

    return result;
  }, [initialContos, search, selectedTag, sortBy]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-parchment">
      <div className="parchment-texture absolute inset-0 pointer-events-none" />
      <Header />

      <main className="flex-grow py-16">
        <Container>
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Crônicas do Reino</h1>
            <p className="text-ink/60 font-sans max-w-2xl">
              Navegue pelos contos de Glockenspiel. Filtre por tag, busque por palavras-chave ou deixe que o destino escolha sua próxima leitura.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-end">
            <div className="flex-grow w-full">
              <label className="block text-sm font-serif mb-2 text-ink/50">Buscar contos</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wood" />
                <input
                  type="text"
                  placeholder="Ex: carroça, algoritmo, hidromel..."
                  className="w-full bg-white/50 border border-wood/20 rounded-sm py-2 pl-10 pr-4 font-sans focus:outline-none focus:border-bardo-purple/50 transition-colors"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full md:w-48">
              <label className="block text-sm font-serif mb-2 text-ink/50">Ordenar por</label>
              <select
                className="w-full bg-white/50 border border-wood/20 rounded-sm py-2 px-4 font-sans focus:outline-none focus:border-bardo-purple/50 transition-colors"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "recent" | "longest" | "shortest")}
              >
                <option value="recent">Mais recentes</option>
                <option value="longest">Mais longos</option>
                <option value="shortest">Mais curtos</option>
              </select>
            </div>
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setSelectedTag(null)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-sans transition-all",
                !selectedTag ? "bg-bardo-purple text-parchment" : "bg-white/50 border border-wood/20 text-ink/70 hover:border-wood"
              )}
            >
              Todas
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-sans transition-all",
                  selectedTag === tag ? "bg-bardo-purple text-parchment" : "bg-white/50 border border-wood/20 text-ink/70 hover:border-wood"
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContos.length > 0 ? (
              filteredContos.map((conto, idx) => (
                <TaleCard key={conto._id} conto={conto} index={idx} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="font-serif italic text-wood/50">Nenhum conto encontrado nos pergaminhos...</p>
              </div>
            )}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
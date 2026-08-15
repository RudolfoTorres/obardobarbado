import { getContoBySlug, getContos } from "@/lib/sanity";
import { Header, Footer, Container } from "@/components/layout-components";
import { Badge } from "@/components/ui-elements";
import { formatDate } from "@/lib/utils";
import { Calendar, Clock, Share2, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { components } from "@/components/portable-text";
import { ShareButton } from "@/components/ShareButton";

export async function generateStaticParams() {
  const contos = await getContos();
  return contos.map((conto) => ({
    slug: conto.slug.current,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TaleDetailPage({ params }: PageProps) {
  // No Next.js 15, params é uma Promise e precisa de await
  const { slug } = await params;

  const conto = await getContoBySlug(slug);

  if (!conto) {
    notFound();
  }

  const allContos = await getContos();
  const currentIndex = allContos.findIndex((c) => c.slug.current === slug);
  const prevConto = currentIndex < allContos.length - 1 ? allContos[currentIndex + 1] : null;
  const nextConto = currentIndex > 0 ? allContos[currentIndex - 1] : null;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-parchment">
      <div className="parchment-texture absolute inset-0 pointer-events-none" />
      <Header />

      <main className="flex-grow pt-12 pb-24">
        <Container className="max-w-4xl">
          {/* Breadcrumbs */}
          <Link href="/contos" className="inline-flex items-center gap-2 text-ink/50 hover:text-bardo-purple mb-12 font-serif group">
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para os contos
          </Link>

          <article>
            {/* Header */}
            <header className="mb-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {(conto.tags || []).map((tag: string) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{conto.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-ink/50 font-sans border-y border-wood/10 py-4">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(conto.publishedAt)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {conto.readingTime} min de leitura
                </span>
                <div className="flex-grow md:text-right">
                    <ShareButton title={conto.title} />
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-stone max-w-none">
              <PortableText value={conto.content} components={components} />

              {/* Fallback content if rich text is empty (for mock) */}
              {(!conto.content || conto.content.length === 0) && (
                <p className="font-sans text-ink/70 italic text-xl">
                  {conto.excerpt}
                  <br /><br />
                  [O bardo está afinando seu xilofone. O conteúdo completo em breve estará disponível nos pergaminhos da taverna.]
                </p>
              )}
            </div>

            {/* Notas do Bardo */}
            <div className="mt-20 p-8 bg-wood/5 border-l-4 border-wood rounded-r-sm">
              <div className="flex items-center gap-3 mb-4 text-wood">
                <MessageSquareQuote className="w-6 h-6" />
                <h3 className="font-serif text-xl font-bold uppercase tracking-wider">Notas do Bardo</h3>
              </div>
              <p className="font-sans italic text-ink/70 leading-relaxed">
                &ldquo;Dizem que o rei proibiu pergaminhos com luz própria, alegando que retiram a produtividade dos camponeses. Mal sabe ele que estamos todos apenas esperando o próximo episódio das Crônicas de Dragão-Z.&rdquo;
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-4 mt-20 pt-12 border-t border-wood/10">
              {prevConto ? (
                <Link
                  href={`/contos/${prevConto.slug.current}`}
                  className="group flex flex-col p-6 border border-wood/10 rounded-sm hover:bg-white/50 transition-colors"
                >
                  <span className="text-xs text-ink/40 uppercase font-sans mb-2 flex items-center gap-1">
                    <ChevronLeft className="w-3 h-3" /> Conto anterior
                  </span>
                  <span className="font-serif text-lg group-hover:text-bardo-purple leading-tight">{prevConto.title}</span>
                </Link>
              ) : <div />}

              {nextConto ? (
                <Link
                  href={`/contos/${nextConto.slug.current}`}
                  className="group flex flex-col p-6 border border-wood/10 rounded-sm hover:bg-white/50 transition-colors text-right"
                >
                  <span className="text-xs text-ink/40 uppercase font-sans mb-2 flex items-center justify-end gap-1">
                    Próximo conto <ChevronRight className="w-3 h-3" />
                  </span>
                  <span className="font-serif text-lg group-hover:text-bardo-purple leading-tight">{nextConto.title}</span>
                </Link>
              ) : <div />}
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
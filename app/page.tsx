import { Header, Footer, Container } from "@/components/layout-components";
import { buttonVariants } from "@/components/ui-elements";
import { TaleCard, Accordion } from "@/components/content-components";
import { HeroMascot } from "@/components/hero-mascot";
import { getContos, getFeaturedContos } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sparkles, Star } from "lucide-react";

export default async function Home() {
  const latestContos = await getContos();
  const featuredContos = await getFeaturedContos();
  const lastConto = latestContos[0];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="parchment-texture absolute inset-0 pointer-events-none" />

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex flex-col justify-center min-h-0 md:min-h-[calc(100svh-80px)] border-b border-wood/10 pt-8 pb-12 md:py-16 overflow-hidden">
          <Container className="max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            <div className="flex flex-col items-start space-y-6 md:space-y-8 max-w-xl">
              {/* 1. Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-sans">
                <Sparkles className="w-4 h-4" />
                <span>O Bardo das Crônicas Modernas</span>
              </div>

              {/* 2. Título */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Baladas curtas,<br />
                <span className="text-bardo-purple">mundos longos.</span>
              </h1>

              {/* 3. Subtítulo */}
              <p className="text-lg md:text-xl text-ink/70 font-sans">
                Glockenspiel, o bardo barbado, traduz o caos do século XXI para o aço e a magia das terras medievais.
              </p>

              {/* 4. Mascot APENAS NO MOBILE (entre a descrição e os botões) */}
              <div className="md:hidden w-full flex justify-center py-2">
                <div className="w-44">
                  <HeroMascot />
                </div>
              </div>

              {/* 5. Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
                <Link
                  href={`/contos/${lastConto?.slug.current || ""}`}
                  className={cn(buttonVariants.base, buttonVariants.variant.primary, buttonVariants.size.lg, "w-full sm:w-auto text-center")}
                >
                  Ler o último conto
                </Link>
                {/* <Link
                  href="/newsletter"
                  className={cn(buttonVariants.base, buttonVariants.variant.outline, buttonVariants.size.lg, "w-full sm:w-auto text-center")}
                >
                  Assinar a Gazette
                </Link> */}
              </div>
            </div>

            {/* Mascot NO DESKTOP (na coluna da direita em tamanho total) */}
            <div className="hidden md:block w-full">
              <HeroMascot />
            </div>

          </Container>
        </section>

        {/* Trova Section */}
        <section className="py-12 bg-white/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion title="A Trova de Apresentação" defaultOpen>
              {`Nobres aventureiros, ouçam com atenção! 
                Irei entoar a vocês, agora, minha trova de apresentação. 
                Eu ergo minha caneca para um brinde a todos. Saúde!!! 
                Eu toco o meu xilofone porque não consigo tocar o alaúde.

                Mas não se deixem enganar, eu ainda tenho o meu valor. 
                Além de tocar xilofone também toco gaita de fole e tambor. 
                Confesso que bebo um pouco. Me digam quem é que não gosta? 
                Minha verdadeira fraqueza está na boa e velha mesa de apostas. 

                Na forja já trabalhei, armaduras e armas forjei. 
                Mas pelas canções e histórias de um bardo bastardo foi que eu me encantei. 
                Com ele decidi partir, eu queria o mundo desbravar. 
                Mas hoje eu vivo vagando, ouvindo e contando histórias de bar.

                Essa é minha trajetória quer vocês gostem ou não. 
                Me chamam de 'o Bardo Barbado', um ser carismático ainda que anão. 
                Meu nome é Glockenspiel e conhecê-los foi um imenso prazer. 
                Agora se me derem licença eu vou logo ali pra taverna beber.`}
            </Accordion>
          </div>
        </section>

        {/* Latest Tales */}
        <section className="py-20">
          <Container>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold">Últimos Contos</h2>
              <Link href="/contos" className="text-bardo-purple hover:underline font-serif">
                Ver todos os contos →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestContos.slice(0, 6).map((conto, idx) => (
                <TaleCard key={conto._id} conto={conto} index={idx} />
              ))}
            </div>
          </Container>
        </section>

        {/* Recommendations */}
        <section className="py-20 bg-ink text-parchment">
          <Container>
            <div className="flex flex-col items-center text-center mb-16">
              <Star className="w-8 h-8 text-gold mb-4" />
              <h2 className="text-4xl font-bold mb-4 font-serif">Para Começar</h2>
              <p className="text-parchment/60 font-sans max-w-2xl">
                Novos na taverna? Experimentem estas baladas selecionadas pelo próprio mestre de cerimônias.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredContos.map((conto) => (
                <Link
                  key={conto._id}
                  href={`/contos/${conto.slug.current}`}
                  className="group block p-8 border border-parchment/10 rounded-sm hover:bg-parchment/5 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors font-serif">{conto.title}</h3>
                  <p className="text-sm text-parchment/50 font-sans line-clamp-2">{conto.excerpt}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
import { Header, Footer, Container } from "@/components/layout-components";
import { Mail, Send, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui-elements";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "Newsletter | O Bardo Barbado",
    description: "Assine a Gazette da Taverna e receba contos inéditos.",
};

export default function NewsletterPage() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-parchment text-ink">
            <div className="parchment-texture absolute inset-0 pointer-events-none" />
            <Header />

            <main className="flex-grow py-24">
                <Container className="max-w-2xl text-center">
                    <div className="mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-bardo-purple/10 text-bardo-purple rounded-full mb-6">
                            <Mail className="w-10 h-10" />
                        </div>
                        <h1 className="text-5xl font-bold mb-6 font-serif">A Gazette da Taverna</h1>
                        <p className="text-xl text-ink/60 font-sans">
                            Uma carta por semana, enviada diretamente por pombos-correio rápidos (digitais). Sem spam, apenas crônicas e novidades exclusivas de Glockenspiel.
                        </p>
                    </div>

                    <div className="bg-white/50 border border-wood/20 p-8 md:p-12 rounded-sm shadow-xl">
                        <form className="space-y-6 text-left">
                            <div>
                                <label className="block text-sm font-serif font-bold text-ink/70 mb-2">Nome do Viajante</label>
                                <input
                                    type="text"
                                    placeholder="Seu nome..."
                                    className="w-full bg-parchment/30 border border-wood/20 rounded-sm py-3 px-4 font-sans focus:outline-none focus:border-bardo-purple transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-serif font-bold text-ink/70 mb-2">Endereço de Pergaminho (E-mail)</label>
                                <input
                                    type="email"
                                    placeholder="seu@pergaminho.com"
                                    className="w-full bg-parchment/30 border border-wood/20 rounded-sm py-3 px-4 font-sans focus:outline-none focus:border-bardo-purple transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                className={cn(buttonVariants.base, buttonVariants.variant.primary, buttonVariants.size.lg, "w-full gap-2")}
                            >
                                Assinar Gazette <Send className="w-4 h-4" />
                            </button>
                        </form>

                        <p className="mt-8 text-xs text-ink/40 font-sans">
                            Ao assinar, você concorda em receber notícias da taverna. Você pode cancelar sua inscrição a qualquer momento enviando um corvo de volta.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <Sparkles className="w-6 h-6 text-gold mb-3" />
                            <h4 className="font-serif font-bold mb-1">Contos Inéditos</h4>
                            <p className="text-sm text-ink/50 font-sans">Histórias que nunca chegam ao blog.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Send className="w-6 h-6 text-gold mb-3" />
                            <h4 className="font-serif font-bold mb-1">Semanal</h4>
                            <p className="text-sm text-ink/50 font-sans">Apenas um envio por semana.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Mail className="w-6 h-6 text-gold mb-3" />
                            <h4 className="font-serif font-bold mb-1">Privacidade</h4>
                            <p className="text-sm text-ink/50 font-sans">Seus dados estão seguros na masmorra.</p>
                        </div>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}

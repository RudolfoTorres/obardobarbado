import { Header, Footer, Container } from "@/components/layout-components";
import { Beer, Drum, Music, Dice5 } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Sobre | O Bardo Barbado",
    description: "Conheça Glockenspiel e o autor por trás das crônicas.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-parchment">
            <div className="parchment-texture absolute inset-0 pointer-events-none" />
            <Header />

            <main className="flex-grow py-20">
                <Container className="max-w-4xl">
                    <section className="mb-24">
                        <h1 className="text-5xl font-bold mb-12">O Bardo, O Mito, A Barba</h1>

                        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                            <div className="space-y-6 font-sans text-ink/80 text-lg leading-relaxed">
                                <p>
                                    <strong className="text-bardo-purple font-serif text-2xl">Glockenspiel</strong> não é um bardo comum. Primeiro, porque é um anão que prefere a precisão matemática do xilofone à vaguidão das harpas élficas. Segundo, porque sua barba tem um cheiro persistente de cerveja artesanal e tinta fresca.
                                </p>
                                <p>
                                    Nascido nas Montanhas de Ferro, mas criado nas tavernas da metrópole de Nova Arthemis, Glockenspiel encontrou sua vocação: documentar o absurdo. Ele canta sobre carroças que dão erro de sistema, sobre dragões que cobram taxa de entrega e sobre como é difícil encontrar um Wi-Fi estável dentro de uma masmorra.
                                </p>
                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-wood/10">
                                    <div className="flex items-center gap-2">
                                        <Music className="w-5 h-5 text-wood" />
                                        <span>Xilofone & Gaita</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Beer className="w-5 h-5 text-wood" />
                                        <span>Hidromel Ipa</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Drum className="w-5 h-5 text-wood" />
                                        <span>Tambor & Ritmo</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Dice5 className="w-5 h-5 text-wood" />
                                        <span>Apostas de Taverna</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-square bg-wood/10 rounded-sm border-2 border-wood/20 p-4">
                                <div className="w-full h-full bg-parchment border border-wood/10 flex items-center justify-center italic text-wood/30 text-center p-8">
                                    [Retrato a óleo de Glockenspiel segurando seu xilofone místico]
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-ink text-parchment p-12 rounded-sm mb-24">
                        <h2 className="text-3xl font-serif font-bold mb-6 text-gold">A Proposta</h2>
                        <p className="font-sans text-parchment/70 text-lg leading-relaxed">
                            <strong>O Bardo Barbado</strong> nasceu do desejo de unir dois mundos que, no fundo, são o mesmo: a fantasia épica e o cotidiano moderno. No reino de Glockenspiel, os "Orcs de Operação" (IT Orcs) resolvem bugs em runas de segurança, e os cavaleiros tentam cancelar assinaturas de espelhos mágicos. É uma sátira literária, irônica e, acima de tudo, uma homenagem aos tropos clássicos sob uma lente contemporânea.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-serif font-bold mb-8">O Autor (por trás da cortina)</h2>
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-24 h-24 bg-gold/20 rounded-full flex-shrink-0 flex items-center justify-center text-4xl">✒️</div>
                            <p className="font-sans text-ink/80 text-lg leading-relaxed italic">
                                Um entusiasta de fantasia, humor e boa literatura que decidiu dar voz a um anão rabugento porém carismático. Este projeto é um experimento de world-building e narrativas curtas.
                            </p>
                        </div>
                    </section>
                </Container>
            </main>

            <Footer />
        </div>
    );
}

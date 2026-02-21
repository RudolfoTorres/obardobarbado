import { PortableTextComponents } from "@portabletext/react";

export const components: PortableTextComponents = {
    block: {
        h1: ({ children }) => <h1 className="text-4xl font-serif font-bold mb-6 mt-12">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-serif font-bold mb-4 mt-10">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-serif font-bold mb-4 mt-8">{children}</h3>,
        normal: ({ children }) => <p className="mb-6 leading-relaxed text-lg font-sans text-ink/80">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gold pl-6 italic my-8 text-xl font-serif text-ink/70 bg-gold/5 py-4 pr-4">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-ink">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        link: ({ children, value }) => {
            const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
            return (
                <a href={value.href} rel={rel} className="text-bardo-purple underline hover:text-wine transition-colors">
                    {children}
                </a>
            );
        },
    },
};

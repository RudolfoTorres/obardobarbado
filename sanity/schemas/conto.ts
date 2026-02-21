export default {
    name: "conto",
    title: "Conto",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Título",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "excerpt",
            title: "Resumo",
            type: "text",
            validation: (Rule: any) => Rule.required().max(200),
        },
        {
            name: "content",
            title: "Conteúdo",
            type: "array",
            of: [{ type: "block" }],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "publishedAt",
            title: "Publicado em",
            type: "datetime",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        },
        {
            name: "coverImage",
            title: "Imagem de Capa",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "readingTime",
            title: "Tempo de Leitura (minutos)",
            type: "number",
        },
        {
            name: "featured",
            title: "Destaque",
            type: "boolean",
            initialValue: false,
        },
        {
            name: "series",
            title: "Série/Coleção",
            type: "string",
        },
    ],
};

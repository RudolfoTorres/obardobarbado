export interface Conto {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    excerpt: string;
    content: any; // PortableText
    publishedAt: string;
    tags: string[];
    coverImage?: {
        asset: {
            _ref: string;
            url: string;
        };
    };
    readingTime: number;
    featured: boolean;
    series?: string;
}

export interface Tag {
    name: string;
    slug: string;
    count?: number;
}

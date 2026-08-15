export interface Conto {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content?: string | any[]; // Torna o content opcional (já que listagens não carregam o texto completo)
  publishedAt: string;
  tags?: string[]; // Opcional para evitar erros caso venha vazio
  coverImage?: string | {
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
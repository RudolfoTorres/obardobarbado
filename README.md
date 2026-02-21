# O Bardo Barbado 🍺📜

Um blog/CMS focado em contos de fantasia com humor e referências do mundo moderno em "roupagem medieval". Acompanhe as crônicas de **Glockenspiel**, um bardo anão com mania de grandeza e fraqueza por apostas.

## 🚀 Tecnologias

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS 4** (Design Minimal Modern Fantasy)
- **Framer Motion** (Animações suaves)
- **Sanity CMS** (Headless CMS com fallback para dados Mock)
- **Lucide React** (Ícones minimalistas)

## 🎨 Direção de Arte

- **Paleta**: Pergaminho (#F5F0E6), Roxo Bardo (#4B2E66), Madeira (#7A5336), Ouro (#B08D3C).
- **Tipografia**: Serif (Playfair Display) para títulos, Sans (Instrument Sans) para conteúdo.
- **Estilo**: Minimalista, elegante, focado na legibilidade.

## 🛠️ Configuração

### 1. Instalação

```bash
npm install
```

### 2. CMS (Sanity)

Este projeto está pronto para Sanity. Se você já tem um projeto no Sanity:
1. Crie as variáveis de ambiente no arquivo `.env.local`:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=seu_id_aqui
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
2. O esquema do CMS está localizado em `/sanity/schemas/conto.ts`.

**Nota**: Se as variáveis não forem fornecidas, o site funcionará perfeitamente usando **dados mock** localizados em `lib/mock-data.ts`.

### 3. Rodar Localmente

```bash
npm run dev
```

## 📂 Estrutura de Páginas

- `/`: Home com destaques, hero e trova de apresentação.
- `/contos`: Lista completa com busca, filtros por tag e ordenação.
- `/contos/[slug]`: Leitura focada com Notas do Bardo e navegação.
- `/sobre`: Biografia de Glockenspiel e proposta do projeto.
- `/newsletter`: Inscrição para a "Gazette da Taverna".

## ✨ Funcionalidades

- **SEO Otimizado**: Metadados dinâmicos, sitemap e robots.txt.
- **Acessibilidade**: HTML semântico e contrastes adequados.
- **Performance**: Lighthouse-friendly, imagens otimizadas e renderização híbrida.

---
"Sente-se à mesa, peça um hidromel e boa leitura." — Glockenspiel

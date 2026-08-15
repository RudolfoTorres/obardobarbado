import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === "true";

export async function getContos(): Promise<Conto[]> {
  if (USE_MOCK) return MOCK_CONTOS;

  const query = `*[_type == "conto"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "tags": coalesce(tags, []),
    readingTime,
    featured,
    series,
    "coverImage": coverImage.asset->url
  }`;

  return await client.fetch(query);
}

export async function getContoBySlug(slug: string): Promise<Conto | null> {
  if (USE_MOCK) {
    return MOCK_CONTOS.find((c) => c.slug.current === slug) || null;
  }

  const query = `*[_type == "conto" && slug.current == $slug][0] {
    ...,
    "tags": coalesce(tags, []),
    "coverImage": coverImage.asset->url
  }`;

  // Passa o objeto { slug } para substituir a variável $slug na consulta
  return await client.fetch(query, { slug });
}

export async function getFeaturedContos(): Promise<Conto[]> {
  if (USE_MOCK) {
    return MOCK_CONTOS.filter((c) => c.featured);
  }

  const query = `*[_type == "conto" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "tags": coalesce(tags, []),
    readingTime,
    featured,
    series,
    "coverImage": coverImage.asset->url
  }`;

  return await client.fetch(query);
}
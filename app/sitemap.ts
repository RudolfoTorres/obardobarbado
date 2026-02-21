import { getContos } from "@/lib/sanity";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const contos = await getContos();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://obardobarbado.com.br";

    const contosUrls = contos.map((conto) => ({
        url: `${baseUrl}/contos/${conto.slug.current}`,
        lastModified: new Date(conto.publishedAt),
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contos`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/sobre`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/newsletter`,
            lastModified: new Date(),
        },
        ...contosUrls,
    ];
}

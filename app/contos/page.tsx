import { getContos } from "@/lib/sanity";
import ContosPage from "./contos-list";

export const metadata = {
    title: "Contos | O Bardo Barbado",
    description: "Navegue por todas as baladas e crônicas de Glockenspiel.",
};

export default async function Page() {
    const contos = await getContos();
    return <ContosPage initialContos={contos} />;
}

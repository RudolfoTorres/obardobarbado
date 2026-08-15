import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import conto from "./sanity/schemas/conto";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  name: "OBardoBarbado_Studio",
  title: "A Taverna do Bardo - CMS",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: [conto],
  },
});
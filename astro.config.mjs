import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	compressHTML: true,
	adapter: vercel(),
});

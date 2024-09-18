import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), Markdown({ rehypePlugins: [rehypeRaw, rehypeHighlight] })],
	resolve: {
		alias: {
			"@assets": resolve("./src/assets"),
			"@components": resolve("./src/components"),
			"@css": resolve("./src/css"),
			"@pages": resolve("./src/pages"),
			"@utils": resolve("./src/utils"),
		},
	},
});

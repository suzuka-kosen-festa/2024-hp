import { cloudflareDevProxyVitePlugin as cloudflare, vitePlugin as remix } from "@remix-run/dev";
import browserslistToEsbuild from "browserslist-to-esbuild";
import { remixDevTools } from "remix-development-tools";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import typecript from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import { getLoadContext } from "./load-context";

// eslint-disable-next-line node/prefer-global/process
const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig(({ mode }) => ({
	build: {
		target: browserslistToEsbuild(),
		cssMinify: "lightningcss",
		minify: "terser",
		rollupOptions: {
			output: {
				manualChunks(id: string) {
					if (id.includes("node_modules")) {
						const basic = id.toString().split("node_modules/")[1];
						const sub1 = basic.split("/")[0];
						if (sub1 !== ".pnpm")
							return sub1.toString();

						const name2 = basic.split("/")[1];
						return name2.split("@")[name2[0] === "@" ? 1 : 0].toString();
					}
				},
			},
		},
		terserOptions: {
			ecma: 2020,
			compress: {
				passes: 5,
				ecma: 2020,
				inline: 3,
			},
			format: {
				comments: false,
			},
			toplevel: true,
			nameCache: {},
		},
	},
	optimizeDeps: {
		esbuildOptions: {
			minify: true,
			treeShaking: true,
		},
	},
	plugins: [
		cloudflare({ getLoadContext }),
		remixDevTools(),
		!isStorybook
		&& remix({ serverModuleFormat: "esm" }),
		typecript(),
		vanillaExtractPlugin({
			identifiers: mode === "production" ? "short" : "debug",
		}),
		mode === "analyze"
		&& visualizer({
			gzipSize: true,
			brotliSize: true,
			emitFile: true, // `emitFile` is necessary since Remix builds more than one bundle
		}),
	],
}));

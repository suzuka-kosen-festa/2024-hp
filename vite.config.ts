import { join } from "node:path";
import { cloudflareDevProxyVitePlugin as cloudflare, vitePlugin as remix } from "@remix-run/dev";
import browserslistToEsbuild from "browserslist-to-esbuild";
import { remixDevTools } from "remix-development-tools";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import typecript from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import { partytownVite } from "@builder.io/partytown/utils";
import contentCollections from "@content-collections/remix-vite";
import { getLoadContext } from "./load-context";

// eslint-disable-next-line node/prefer-global/process
const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig(({ mode }) => ({
	build: {
		cssMinify: "esbuild",
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
		target: browserslistToEsbuild(),
		terserOptions: {
			compress: {
				ecma: 2020,
				hoist_props: true,
				inline: 3,
				passes: 5,
			},
			ecma: 2020,
			format: {
				comments: false,
			},
			nameCache: {},
			toplevel: true,
		},
	},
	optimizeDeps: {
		esbuildOptions: {
			minify: true,
			treeShaking: true,
		},
	},
	plugins: [
		!isStorybook
		&& cloudflare({ getLoadContext }),
		!isStorybook
		&& remixDevTools(),
		!isStorybook
		&& remix({
			future: {
				unstable_optimizeDeps: true,
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
			serverModuleFormat: "esm",
		}),
		contentCollections(),
		!isStorybook
		&& partytownVite({
			dest: join(__dirname, "build/client", "~partytown"),
		}),
		typecript(),
		vanillaExtractPlugin({
			identifiers: mode === "production" ? "short" : "debug",
		}),
		icons({
			compiler: "jsx",
			customCollections: {
				custom: FileSystemIconLoader(
					"app/assets/icons",
					svg => svg.replace(/^<svg /, "<svg fill=\"currentColor\" "),
				),
			},
			jsx: "react",
		}),
		mode === "analyze"
		&& visualizer({
			brotliSize: true,
			emitFile: true, // `emitFile` is necessary since Remix builds more than one bundle
			gzipSize: true,
		}),
	],
}));

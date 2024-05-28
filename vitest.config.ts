import react from "@vitejs/plugin-react-swc";
import { configDefaults, defineConfig } from "vitest/config";
import typecript from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

export default defineConfig({
	plugins: [
		react(),
		typecript(),
		vanillaExtractPlugin(),
		icons({
			compiler: "jsx",
			jsx: "react",
			customCollections: {
				custom: FileSystemIconLoader(
					"app/assets/icons",
					svg => svg.replace(/^<svg /, "<svg fill=\"currentColor\" "),
				),
			},
		}),
	],
	test: {
		globals: true,
		root: "app",
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		exclude: [...configDefaults.exclude, "tests/**/*"],
	},
});

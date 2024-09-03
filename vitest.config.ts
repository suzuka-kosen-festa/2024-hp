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
			customCollections: {
				custom: FileSystemIconLoader(
					"app/assets/icons",
					svg => svg.replace(/^<svg /, "<svg fill=\"currentColor\" "),
				),
			},
			jsx: "react",
		}),
	],
	test: {
		environment: "jsdom",
		exclude: [...configDefaults.exclude, "tests/**/*"],
		globals: true,
		root: "app",
		setupFiles: ["./vitest.setup.ts"],
	},
});

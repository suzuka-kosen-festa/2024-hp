import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
	color: {
		/**
		 * #C81A54
		 */
		red: null,
		/**
		 * #6B007C
		 */
		purple: null,
		/**
		 * #3227A7
		 */
		blue: null,
		/**
		 * #FFFFFF
		 */
		white: null,
		/**
		 * #000000
		 */
		black: null,
	},
});

createGlobalTheme(":root", vars, {
	color: {
		red: "#C81A54",
		purple: "#6B007C",
		blue: "#3227A7",
		white: "#FFFFFF",
		black: "#000000",
	},
});

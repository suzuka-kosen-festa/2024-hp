import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
	color: {
		black: "#000000" as const,
		blue: "#3227A7" as const,
		blueShadow: "#302449" as const,
		borderRed: "#61102B" as const,
		gray: "#242424" as const,
		purple: "#6B007C" as const,
		red: "#C81A54" as const,
		white: "#FFFFFF" as const,
	},
	typography: {
		fontFamily: {
			dot: "DotGothic16, sans-serif" as const,
			jura: "Jura, sans-serif" as const,
		},
	},
});

createGlobalTheme(":root", vars, {
	color: {
		black: "#000000",
		blue: "#3227A7",
		blueShadow: "#302449",
		borderRed: "#61102B",
		gray: "#242424",
		purple: "#6B007C",
		red: "#C81A54",
		white: "#FFFFFF",
	},
	typography: {
		fontFamily: {
			dot: "DotGothic16, sans-serif",
			jura: "Jura, sans-serif",
		},
	},
});

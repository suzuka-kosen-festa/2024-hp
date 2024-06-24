import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
	color: {
		red: "#C81A54" as const,
		borderRed: "#61102B" as const,
		purple: "#6B007C" as const,
		blue: "#3227A7" as const,
		blueShadow: "#302449" as const,
		white: "#FFFFFF" as const,
		black: "#000000" as const,
		gray: "#242424" as const,
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
		red: "#C81A54",
		borderRed: "#61102B",
		purple: "#6B007C",
		blue: "#3227A7",
		blueShadow: "#302449",
		white: "#FFFFFF",
		black: "#000000",
		gray: "#242424",
	},
	typography: {
		fontFamily: {
			dot: "DotGothic16, sans-serif",
			jura: "Jura, sans-serif",
		},
	},
});

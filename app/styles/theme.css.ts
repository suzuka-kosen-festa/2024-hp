import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
	color: {
		black: "#000000" as const,
		blue: "#3227A7" as const,
		blueBg: "#3227A719" as const,
		blueShadow: "#302449" as const,
		borderRed: "#61102B" as const,
		gray: "#242424" as const,
		green: "#2D9E00" as const,
		greenBg: "#2D9E0019" as const,
		purple: "#6B007C" as const,
		purpleBg: "#6B007C19" as const,
		red: "#C81A54" as const,
		redBg: "#C81A5419" as const,
		textGray: "#C8C8C8" as const,
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
		blueBg: "#3227A719",
		blueShadow: "#302449",
		borderRed: "#61102B",
		gray: "#242424",
		green: "#2D9E00",
		greenBg: "#2D9E0019",
		purple: "#6B007C",
		purpleBg: "#6B007C19",
		red: "#C81A54",
		redBg: "#C81A5419",
		textGray: "#C8C8C8",
		white: "#FFFFFF",
	},
	typography: {
		fontFamily: {
			dot: "DotGothic16, sans-serif",
			jura: "Jura, sans-serif",
		},
	},
});

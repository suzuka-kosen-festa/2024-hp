import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
	color: {
		black: "#000000" as const,
		blue: "#3227A7" as const,
		blueBg: "#3227A719" as const,
		blueHeld: "rgba(50 39 167 / .5)" as const,
		blueShadow: "#302449" as const,
		borderRed: "#61102B" as const,
		cyan: "#00FFFF" as const,
		cyanBg: "rgba(0 255 255 / .1)" as const,
		gray: "#242424" as const,
		green: "#2D9E00" as const,
		greenBg: "#2D9E0019" as const,
		greenHeld: "rgba(45 158 0 / .5)" as const,
		purple: "#6B007C" as const,
		purpleBg: "#6B007C19" as const,
		purpleHeld: "rgba(107 0 124 / .5)" as const,
		red: "#C81A54" as const,
		redBg: "#C81A5419" as const,
		redHeld: "rgba(200 26 84 / .5)" as const,
		textGray: "#C8C8C8" as const,
		white: "#FFFFFF" as const,
		whiteTransparent: "rgba(255 255 255 /.2)" as const,
	},
	typography: {
		fontFamily: {
			dot: "DotGothic16, sans-serif" as const,
			jura: "Jura, sans-serif" as const,
			mono: "Roboto Mono, monospace" as const,
		},
	},
});

createGlobalTheme(":root", vars, {
	color: {
		black: "#000000",
		blue: "#3227A7",
		blueBg: "#3227A719",
		blueHeld: "rgba(50 39 167 / .5)",
		blueShadow: "#302449",
		borderRed: "#61102B",
		cyan: "#00FFFF",
		cyanBg: "rgba(0 255 255 / .1)",
		gray: "#242424",
		green: "#2D9E00",
		greenBg: "#2D9E0019",
		greenHeld: "rgba(45 158 0 / .5)",
		purple: "#6B007C",
		purpleBg: "#6B007C19",
		purpleHeld: "rgba(107 0 124 / .5)",
		red: "#C81A54",
		redBg: "#C81A5419",
		redHeld: "rgba(200 26 84 / .5)",
		textGray: "#C8C8C8",
		white: "#FFFFFF",
		whiteTransparent: "rgba(255 255 255 /.2)",
	},
	typography: {
		fontFamily: {
			dot: "DotGothic16, sans-serif",
			jura: "Jura, sans-serif",
			mono: "Roboto Mono, monospace",
		},
	},
});

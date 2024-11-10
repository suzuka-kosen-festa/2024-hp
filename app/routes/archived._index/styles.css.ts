import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const landingWrapper = style({
	"@layer": {
		[layers.page]: {
			alignItems: "center",
			backgroundColor: vars.color.black,
			display: "flex",
			height: "100%",
			justifyContent: "center",
			minHeight: "100svh",
			width: "100%",
		},
	},
});

export const prologueWrapper = style({
	"@layer": {
		[layers.page]: {
			alignItems: "center",
			display: "none",
			height: "100%",
			justifyContent: "center",
			minHeight: "100svh",
			width: "100%",
		},
	},
});

export const prologue = style({
	"@layer": {
		[layers.page]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
				},
			},
			"color": vars.color.white,
			"fontFamily": vars.typography.fontFamily.dot,
			"fontSize": "1rem",
			"whiteSpace": "pre-line",
		},
	},
});

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const epilogue = style({
	"@layer": {
		[layers.feature]: {
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

export const text = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
				},
			},
			"color": vars.color.white,
			"fontFamily": vars.typography.fontFamily.dot,
			"fontSize": "1rem",
			"maxWidth": "80ch",
			"textAlign": "center",
			"whiteSpace": "pre-line",
			"width": "100%",
		},
	},
});

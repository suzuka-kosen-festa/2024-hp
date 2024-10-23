import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			display: "grid",
			rowGap: "1rem",
			width: "100%",
		},
	},
});

export const container = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.xxl]: {
					maxWidth: "88rem",
				},
			},
			"alignItems": "start",
			"display": "flex",
			"flexDirection": "column",
			"marginInline": "auto",
			"rowGap": "1rem",
			"width": "100%",
		},
	},
});

export const list = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					gridTemplateColumns: "repeat(auto-fill, minmax(28rem, 1fr))",
				},
				[Breakpoints.xxl]: {
					maxWidth: "88rem",
				},
			},
			"alignItems": "stretch",
			"display": "grid",
			"gap": "1rem",
			"gridTemplateColumns": "1fr",
			"justifySelf": "center",
			"maxWidth": "none",
			"width": "100%",
		},
	},
});

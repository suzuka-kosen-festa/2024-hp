import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const container = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.xxl]: {
					maxWidth: "88rem",
				},
			},
			"display": "flex",
			"flexDirection": "column",
			"marginInline": "auto",
			"rowGap": "1rem",
			"width": "100%",
		},
	},
});

export const heading = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
				},
			},
			"color": vars.color.white,
			"fontSize": "1.25rem",
			"fontWeight": 600,
			"marginBottom": "1rem",
		},
	},
});

export const text = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "1.5rem",
		},
	},
});

export const list = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
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

import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const textAlign = createVar();

export const block = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.xl]: {
					maxWidth: "120ch",
				},
			},
			"display": "flex",
			"flexDirection": "column",
			"maxWidth": "80%",
			"rowGap": "0.75rem",
			textAlign,
			"width": "100%",
		},
	},
});

export const team = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "2.5rem",
				},
				[Breakpoints.xl]: {
					fontSize: "3rem",
				},
			},
			"color": vars.color.white,
			"fontFamily": vars.typography.fontFamily.dot,
			"fontSize": "1.5rem",
			"fontWeight": 600,
		},
	},
});

export const members = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.xl]: {
					fontSize: "1.5rem",
				},
			},
			"color": vars.color.white,
			"display": "flex",
			"flexDirection": "column",
			"fontFamily": vars.typography.fontFamily.dot,
			"fontSize": "1.325rem",
			"rowGap": "0.125rem",
		},
	},
});

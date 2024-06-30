import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			display: "grid",
			gridTemplateRows: "auto 1fr auto",
			width: "100%",
			height: "100%",
			minHeight: "100dvh",
		},
	},
});

export const contentBox = style({
	"@layer": {
		[layers.feature]: {
			margin: "auto",
			padding: "1rem",
		},
	},
});

export const bottom = style({
	"@layer": {
		[layers.feature]: {
			"display": "flex",
			"flexDirection": "column",
			"rowGap": "0.75rem",
			"padding": "2rem 0.75rem",

			"@media": {
				[Breakpoints.md]: {
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "3rem 2rem",
				},
			},
		},
	},
});

export const title = style({
	"@layer": {
		[layers.feature]: {
			"color": vars.color.white,
			"fontSize": "2rem",
			"letterSpacing": "0.4rem",

			"@media": {
				[Breakpoints.md]: {
					fontSize: "clamp(3rem, calc(0.6585365853658534rem + 4.878048780487805vw), 4.5rem)",
					letterSpacing: "0.9rem",
				},
			},
		},
	},
});

export const dateBox = style({
	"@layer": {
		[layers.feature]: {
			maxWidth: "fit-content",
			justifyContent: "center",
			alignItems: "center",
		},
	},
});

export const date = style({
	"@layer": {
		[layers.feature]: {
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontFamily": vars.typography.fontFamily.dot,
			"letterSpacing": "0.3rem",

			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
					letterSpacing: "0.45rem",
				},
			},
		},
	},
});

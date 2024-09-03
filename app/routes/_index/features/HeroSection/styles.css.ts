import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			display: "grid",
			gridTemplateRows: "auto 1fr auto",
			height: "100%",
			minHeight: "100svh",
			width: "100%",
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
			"@media": {
				[Breakpoints.md]: {
					alignItems: "center",
					flexDirection: "row",
					justifyContent: "space-between",
					padding: "3rem 2rem",
				},
			},
			"display": "flex",
			"flexDirection": "column",
			"padding": "2rem 0.75rem",

			"rowGap": "0.75rem",
		},
	},
});

export const title = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "clamp(3rem, calc(0.6585365853658534rem + 4.878048780487805vw), 4.5rem)",
					letterSpacing: "0.9rem",
				},
			},
			"color": vars.color.white,
			"fontSize": "2rem",
			"hangingPunctuation": "allow-end",
			"lineBreak": "strict",
			"overflowWrap": "anywhere",

			"wordBreak": "keep-all",
		},
	},
});

export const dateBox = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			justifyContent: "center",
			maxWidth: "fit-content",
		},
	},
});

export const date = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
					letterSpacing: "0.45rem",
				},
			},
			"color": vars.color.white,
			"fontFamily": vars.typography.fontFamily.dot,
			"fontSize": "1rem",

			"letterSpacing": "0.3rem",
		},
	},
});

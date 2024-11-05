import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

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

export const link = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
				},
			},
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontWeight": 600,
			"position": "relative",
			"selectors": {
				"&::after": {
					backgroundColor: vars.color.white,
					bottom: "-1px",
					content: "''",
					height: "2px",
					left: 0,
					position: "absolute",
					transform: "scale(0, 1)",
					transformOrigin: "right top",
					transition: "transform 0.3s",
					width: "100%",
				},
				"&:hover::after": {
					transform: "scale(1, 1)",
					transformOrigin: "left top",
				},
			},
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

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			backgroundColor: vars.color.white,
			borderRadius: "0.75rem",
			color: vars.color.black,
			fontSize: "1.5rem",
			fontWeight: 600,
			height: "auto",
			padding: "1rem",
			paddingBottom: "2rem",
			width: "100%",
		},
	},
});

export const heading = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.black,
			fontSize: "1.5rem",
			fontWeight: 700,
			marginBottom: "1.5rem",
			textAlign: "center",
		},
	},
});

export const content = style({
	"@layer": {
		[layers.feature]: {
			display: "flex",
			flexWrap: "wrap",
			gap: "1rem",
		},
	},
});

export const imagesContainer = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					gridAutoColumns: "minmax(0, 1fr)",
				},
			},
			"display": "flex",
			"flexWrap": "wrap",
			"gap": "1rem",
			"gridAutoFlow": "column",
		},
	},
});

export const image = style({
	flex: "1",
	maxWidth: "456px",
	minWidth: "256px",
	objectFit: "contain",
	objectPosition: "center",
	width: "100%",
});

export const details = style({
	"@media": {
		[Breakpoints.md]: {
			paddingTop: "2rem",
		},
	},
	"alignItems": "center",
	"display": "flex",
	"flex": 1,
	"flexDirection": "column",
	"fontSize": "1rem",
	"gap": "1rem",
	"justifyContent": "space-between",
	"textAlign": "left",
});

export const description = style({
	whiteSpace: "pre-wrap",
});

export const tel = style({
	alignItems: "center",
	color: vars.color.blue,
	display: "flex",
	fontSize: "1rem",
	gap: "0.5rem",
	justifyContent: "center",
	marginBottom: "2rem",
});

export const icon = style({
	fontSize: "1.125rem",
});

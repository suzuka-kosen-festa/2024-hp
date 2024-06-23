import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			"display": "flex",
			"flexDirection": "column",
			"rowGap": "1.5rem",
			"width": "100%",
			"height": "100lvh",
			"paddingInline": "1rem",
			"paddingTop": "1.5rem",
			"backgroundColor": "rgb(0 0 0 / 0.8)",

			"@media": {
				[Breakpoints.md]: {
					rowGap: "7.25rem",
					paddingInline: "1.5rem",
				},
			},
		},
	},
});

export const box = style({
	"@layer": {
		[layers.feature]: {
			"display": "flex",
			"flexDirection": "column",
			"gap": "1.5rem",
			"width": "100%",

			"@media": {
				[Breakpoints.md]: {
					display: "grid",
					gap: "2rem",
					gridTemplateAreas: "\"date place\" \"date comingsoon\"",
					gridTemplateColumns: "1fr 2fr",
					gridTemplateRows: "1fr 3fr",
				},
			},
		},
	},
});

export const date = style({
	"@layer": {
		[layers.feature]: {
			"gridArea": "date",
			"minHeight": "10rem",
			"height": "100%",
			"display": "flex",
			"flexDirection": "column",
			"gap": "2rem",
			"alignItems": "center",
			"justifyContent": "center",
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontWeight": 500,
			"letterSpacing": "0.2rem",
			"textAlign": "center",
			"wordBreak": "keep-all",
			"lineBreak": "strict",
			"hangingPunctuation": "allow-end",
			"overflowWrap": "anywhere",

			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
					letterSpacing: "0.3rem",
				},
			},
		},
	},
});

export const place = style({
	"@layer": {
		[layers.feature]: {
			"gridArea": "place",
			"minHeight": "9.75rem",

			"@media": {
				[Breakpoints.md]: {
					minHeight: "8.75rem",
				},
			},
		},
	},
});

export const placeInner = style({
	"@layer": {
		[layers.feature]: {
			position: "relative",
			width: "100%",
			height: "100%",
		},
	},
});

export const placeContent = style({
	"@layer": {
		[layers.feature]: {
			"position": "absolute",
			"top": "50%",
			"left": "50%",
			"transform": "translate(-50%, -50%)",
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontWeight": 200,
			"letterSpacing": "0.2rem",
			"textAlign": "center",
			"whiteSpace": "nowrap",

			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
					letterSpacing: "0.3rem",
				},
			},
		},
	},
});

export const placeLink = style({
	"@layer": {
		[layers.feature]: {
			"position": "absolute",
			"bottom": 0,
			"right": 0,
			"padding": "0.5rem 1rem",
			"borderRadius": "0.5rem",
			"backgroundColor": vars.color.blue,
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontWeight": 500,
			"textAlign": "center",
			"transition": "transform 0.3s ease-in",

			":hover": {
				transform: "scale(1.05)",
			},
		},
	},
});

export const comingsoon = style({
	"@layer": {
		[layers.feature]: {
			"gridArea": "comingsoon",
			"display": "grid",
			"placeItems": "center",
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontWeight": 500,
			"letterSpacing": "0.2rem",
			"textAlign": "center",

			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
					letterSpacing: "0.3rem",
				},
			},
		},
	},
});

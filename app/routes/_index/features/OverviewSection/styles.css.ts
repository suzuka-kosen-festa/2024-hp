import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					paddingInline: "1.5rem",
					rowGap: "7.25rem",
				},
			},
			"backgroundColor": "rgb(0 0 0 / 0.8)",
			"display": "flex",
			"flexDirection": "column",
			"height": "100%",
			"minHeight": "100svh",
			"paddingInline": "1rem",
			"paddingTop": "1.5rem",
			"rowGap": "1.5rem",

			"width": "100%",
		},
	},
});

export const box = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					display: "grid",
					gap: "2rem",
					gridTemplateAreas: "\"date place\" \"date comingsoon\"",
					gridTemplateColumns: "1fr 2fr",
					gridTemplateRows: "1fr 3fr",
				},
			},
			"display": "flex",
			"flexDirection": "column",
			"gap": "1.5rem",

			"width": "100%",
		},
	},
});

export const date = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
					letterSpacing: "0.3rem",
				},
			},
			"alignItems": "center",
			"color": vars.color.white,
			"display": "flex",
			"flexDirection": "column",
			"fontSize": "1rem",
			"fontWeight": 500,
			"gap": "2rem",
			"gridArea": "date",
			"hangingPunctuation": "allow-end",
			"height": "100%",
			"justifyContent": "center",
			"letterSpacing": "0.2rem",
			"lineBreak": "strict",
			"minHeight": "10rem",
			"overflowWrap": "anywhere",
			"textAlign": "center",

			"wordBreak": "keep-all",
		},
	},
});

export const place = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					minHeight: "8.75rem",
				},
			},
			"gridArea": "place",

			"minHeight": "9.75rem",
		},
	},
});

export const placeContent = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
					letterSpacing: "0.3rem",
				},
			},
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontWeight": 200,
			"left": "50%",
			"letterSpacing": "0.2rem",
			"position": "absolute",
			"textAlign": "center",
			"top": "50%",
			"transform": "translate(-50%, -50%)",

			"whiteSpace": "nowrap",
		},
	},
});

export const placeLink = style({
	"@layer": {
		[layers.feature]: {
			":hover": {
				transform: "scale(1.05)",
			},
			"backgroundColor": vars.color.blue,
			"borderRadius": "0.5rem",
			"bottom": "1rem",
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontWeight": 500,
			"padding": "0.5rem 1rem",
			"position": "absolute",
			"right": "1rem",
			"textAlign": "center",

			"transition": "transform 0.3s ease-in",
		},
	},
});

export const comingsoon = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
					letterSpacing: "0.3rem",
				},
			},
			"color": vars.color.white,
			"display": "grid",
			"fontSize": "1rem",
			"fontWeight": 500,
			"gridArea": "comingsoon",
			"letterSpacing": "0.2rem",
			"placeItems": "center",

			"textAlign": "center",
		},
	},
});

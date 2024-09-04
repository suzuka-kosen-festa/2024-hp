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

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			backgroundColor: vars.color.gray,
			display: "flex",
			flexDirection: "column",
			padding: "4rem 1rem",
			rowGap: "4rem",
			width: "100%",
		},
	},
});

export const heading = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "1.5rem",
			fontWeight: 600,
		},
	},
});

export const list = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
				},
			},
			"display": "grid",
			"gap": "2rem",
			"gridTemplateColumns": "repeat(auto-fit, minmax(14rem, 1fr))",
			"padding": "2rem",
			"width": "100%",
		},
	},
});

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const background = style({
	"@layer": {
		[layers.page]: {
			height: "100%",
			inset: 0,
			left: 0,
			objectFit: "cover",
			objectPosition: "center",
			position: "fixed",
			top: 0,
			width: "100%",
			zIndex: -1,
		},
	},
});

export const wrapper = style({
	"@layer": {
		[layers.page]: {
			backgroundColor: "rgb(0 0 0 / 0.8)",
			display: "flex",
			flexDirection: "column",
			padding: "2rem 1rem",
			rowGap: "4rem",
		},
	},
});

export const h1 = style({
	"@layer": {
		[layers.page]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "2rem",
				},
			},
			"color": vars.color.white,
			"fontSize": "1.5rem",
			"fontWeight": 600,
			"padding": "2rem 0",
		},
	},
});

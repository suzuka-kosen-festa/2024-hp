import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const wrapper = style({
	"@layer": {
		[layers.component]: {
			display: "flex",
			justifyContent: "center",
			position: "relative",
			width: "100%",
		},
	},
});

export const lineBackgroundColor = createVar();

export const line = style({
	"@layer": {
		[layers.component]: {
			backgroundImage: lineBackgroundColor,
			height: "0.25rem",
			position: "absolute",
			top: "50%",
			transform: "translateY(-50%)",
			width: "100%",
		},
	},
});

export const iconBoxBackgroundColor = createVar();

export const boxShadow = createVar();

export const iconBox = style({
	"@layer": {
		[layers.component]: {
			"@media": {
				[Breakpoints.md]: {
					height: "4.75rem",
					padding: "1.25rem",
					width: "4.75rem",
				},
			},
			"backgroundColor": iconBoxBackgroundColor,
			"borderRadius": "9999px",
			boxShadow,
			"display": "inline-block",
			"height": "2.75rem",
			"padding": "0.75rem",
			"width": "2.75rem",

			"zIndex": 1,
		},
	},
});

export const icon = style({
	"@layer": {
		[layers.component]: {
			color: vars.color.white,
			height: "100%",
			width: "100%",
		},
	},
});

export const title = style({
	"@layer": {
		[layers.component]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "2rem",
				},
			},
			"color": vars.color.white,
			"fontSize": "1.5rem",
			"fontWeight": 600,
			"zIndex": 10,
		},
	},
});

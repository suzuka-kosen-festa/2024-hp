import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const wrapper = style({
	"@layer": {
		[layers.component]: {
			position: "relative",
			display: "flex",
			justifyContent: "center",
			width: "100%",
		},
	},
});

export const lineBackgroundColor = createVar();

export const line = style({
	"@layer": {
		[layers.component]: {
			position: "absolute",
			top: "50%",
			transform: "translateY(-50%)",
			width: "100%",
			height: "0.25rem",
			backgroundImage: lineBackgroundColor,
		},
	},
});

export const iconBoxBackgroundColor = createVar();

export const boxShadow = createVar();

export const iconBox = style({
	"@layer": {
		[layers.component]: {
			"display": "inline-block",
			"width": "2.75rem",
			"height": "2.75rem",
			"padding": "0.75rem",
			"borderRadius": "9999px",
			"zIndex": 1,
			"backgroundColor": iconBoxBackgroundColor,
			boxShadow,

			"@media": {
				[Breakpoints.md]: {
					width: "4.75rem",
					height: "4.75rem",
					padding: "1.25rem",
				},
			},
		},
	},
});

export const icon = style({
	"@layer": {
		[layers.component]: {
			width: "100%",
			height: "100%",
			color: vars.color.white,
		},
	},
});

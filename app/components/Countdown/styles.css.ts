import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const heading = style({
	"@layer": {
		[layers.component]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "4.5rem",
				},
			},
			"alignItems": "center",
			"color": vars.color.white,
			"display": "flex",
			"fontFamily": vars.typography.fontFamily.dot,
			"fontSize": "3.5rem",
			"fontStyle": "normal",
			"fontWeight": 400,
			"textAlign": "center",
		},
	},
});

export const heartBox = style({
	"@layer": {
		[layers.component]: {
			"@media": {
				[Breakpoints.md]: {
					height: "11.25rem",
					padding: "1rem 0.5rem",
					width: "11.25rem",
				},
			},
			"display": "inline-block",
			"height": "6rem",
			"position": "relative",

			"width": "6rem",
		},
	},
});

export const heart = style({
	"@layer": {
		[layers.component]: {
			fill: "none",
			height: "100%",
			width: "100%",
		},
	},
});

export const days = style({
	"@layer": {
		[layers.component]: {
			left: "40%",
			position: "absolute",
			top: "40%",
			transform: "translate(-40%, -40%)",
			WebkitTextStrokeColor: vars.color.black,
			WebkitTextStrokeWidth: "1px",
		},
	},
});

export const close = style({
	"@layer": {
		[layers.component]: {
			"@media": {
				[Breakpoints.md]: {
					height: "3.5rem",
					margin: "0 2.5rem",
					width: "3.5rem",
				},
			},
			"fill": vars.color.white,
			"height": "2.125rem",
			"margin": "0 1.375rem",

			"width": "2.125rem",
		},
	},
});

export const time = style({
	"@layer": {
		[layers.component]: {
			WebkitTextStrokeColor: vars.color.black,
			WebkitTextStrokeWidth: "1px",
		},
	},
});

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const heading = style({
	"@layer": {
		[layers.component]: {
			"display": "flex",
			"alignItems": "center",
			"fontFamily": vars.typography.fontFamily.dot,
			"fontWeight": 400,
			"fontStyle": "normal",
			"color": vars.color.white,
			"fontSize": "3.5rem",
			"textAlign": "center",

			"@media": {
				[Breakpoints.md]: {
					fontSize: "4.5rem",
				},
			},
		},
	},
});

export const heartBox = style({
	"@layer": {
		[layers.component]: {
			"position": "relative",
			"display": "inline-block",
			"width": "6rem",
			"height": "6rem",

			"@media": {
				[Breakpoints.md]: {
					width: "11.25rem",
					height: "11.25rem",
					padding: "1rem 0.5rem",
				},
			},
		},
	},
});

export const heart = style({
	"@layer": {
		[layers.component]: {
			fill: "none",
			width: "100%",
			height: "100%",
		},
	},
});

export const days = style({
	"@layer": {
		[layers.component]: {
			position: "absolute",
			top: "40%",
			left: "40%",
			transform: "translate(-40%, -40%)",
			WebkitTextStrokeColor: vars.color.black,
			WebkitTextStrokeWidth: "2px",
		},
	},
});

export const close = style({
	"@layer": {
		[layers.component]: {
			"fill": vars.color.white,
			"width": "2.125rem",
			"height": "2.125rem",
			"margin": "0 1.375rem",

			"@media": {
				[Breakpoints.md]: {
					width: "3.5rem",
					height: "3.5rem",
					margin: "0 2.5rem",
				},
			},
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
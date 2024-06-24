import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const text = style({
	"@layer": {
		[layers.feature]: {
			"color": vars.color.white,
			"textAlign": "center",
			"fontFamily": vars.typography.fontFamily.dot,
			"WebkitTextStrokeWidth": 0,
			"WebkitTextStrokeColor": vars.color.black,
			"fontSize": "1.5rem",
			"letterSpacing": "0.3rem",

			"@media": {
				[Breakpoints.md]: {
					fontSize: "2rem",
					letterSpacing: "0.4rem",
					WebkitTextStrokeWidth: "1px",
				},
			},
		},
	},
});

export const box = style({
	"@layer": {
		[layers.feature]: {
			"maxWidth": "20.375rem",
			"width": "100%",
			"border": `4px solid ${vars.color.red}`,
			"borderRadius": "1.25rem",
			"boxShadow": "0 0 80px rgb(200 26 84 / 0.5)",
			"display": "flex",
			"flexDirection": "column",
			"padding": "1rem 0",

			"@media": {
				[Breakpoints.md]: {
					maxWidth: "56.25rem",
					padding: "7.25rem 0",
				},
			},
		},
	},
});

export const border = style({
	"@layer": {
		[layers.feature]: {
			"color": vars.color.white,
			"fontSize": "2rem",
			"textAlign": "center",
			"fontFamily": vars.typography.fontFamily.dot,
			"textShadow": `0px 2px 0 ${vars.color.red}`,
			"letterSpacing": "0.4rem",
			"WebkitTextStrokeWidth": 0,
			"WebkitTextStrokeColor": vars.color.black,
			"marginBottom": "0.75rem",

			"@media": {
				[Breakpoints.md]: {
					marginBottom: "1.5rem",
					fontSize: "5rem",
					letterSpacing: "1rem",
					textShadow: `0px 6px 0 ${vars.color.red}`,
					WebkitTextStrokeWidth: "1px",
				},
			},
		},
	},
},
);

export const countdown = style({
	"@layer": {
		[layers.feature]: {
			"margin": "0 auto 0.45rem",

			"@media": {
				[Breakpoints.md]: {
					margin: "0 auto 4.5rem",
				},
			},
		},
	},
});

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const text = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "2rem",
					letterSpacing: "0.4rem",
				},
			},
			"color": vars.color.white,
			"fontFamily": vars.typography.fontFamily.dot,
			"fontSize": "1.5rem",
			"letterSpacing": "0.3rem",

			"textAlign": "center",
		},
	},
});

export const box = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					backgroundImage: "url(/images/start@2x.webp)",
					maxWidth: "48.5rem",
				},
			},
			"backgroundImage": "url(/images/start.webp)",
			"backgroundPosition": "center",
			"backgroundRepeat": "no-repeat",
			"backgroundSize": "cover",
			"border": `4px solid ${vars.color.red}`,
			"borderRadius": "1.25rem",
			"boxShadow": "0 0 80px rgb(200 26 84 / 0.5)",
			"display": "flex",
			"flexDirection": "column",
			"maxWidth": "20.375rem",
			"padding": "1rem 0",

			"width": "100%",
		},
	},
});

export const border = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "5rem",
					letterSpacing: "1rem",
					marginBottom: "1.5rem",
					textShadow: `0px 6px 0 ${vars.color.red}`,
					WebkitTextStrokeWidth: "1px",
				},
			},
			"color": vars.color.white,
			"fontFamily": vars.typography.fontFamily.dot,
			"fontSize": "2rem",
			"letterSpacing": "0.4rem",
			"marginBottom": "0.75rem",
			"textAlign": "center",
			"textShadow": `0px 2px 0 ${vars.color.red}`,
			"WebkitTextStrokeColor": vars.color.black,

			"WebkitTextStrokeWidth": "calc(1px / 2)",
		},
	},
},
);

export const countdown = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					margin: "0 auto 4.5rem",
				},
			},

			"margin": "0 auto 0.45rem",
		},
	},
});

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					paddingBottom: "8.4375rem",
					paddingInline: "1.5rem",
					rowGap: "7.25rem",
				},
			},
			"backgroundColor": "rgb(0 0 0 / 0.8)",
			"display": "flex",
			"flexDirection": "column",
			"height": "100%",
			"minHeight": "100svh",
			"paddingBottom": "1.5rem",
			"paddingInline": "1rem",
			"paddingTop": "1.5rem",
			"rowGap": "2rem",
			"width": "100%",
		},
	},
});

export const box = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					marginInline: "auto",
				},
			},
			"display": "flex",
			"flexDirection": "column",
			"margin": "0",
			"rowGap": "1.5rem",
		},
	},
});

export const text = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
				},
			},
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontWeight": 600,
			"margin": "0.75rem 0.5rem 0",
			"textAlign": "left",
		},
	},
});

export const span = style({
	"@layer": {
		[layers.feature]: {
			display: "block",
			textAlign: "center",
		},
	},
});

export const googleMap = style({
	"@layer": {
		[layers.feature]: {
			":hover": {
				transform: "scale(1.05)",
			},
			"@media": {
				[Breakpoints.md]: {
					margin: "1rem auto 0",
				},
			},
			"border": `1px solid ${vars.color.white}`,
			"borderRadius": "0.5rem",
			"boxShadow": "0 0 0 0.25rem rgb(0 0 0 / 0.25)",
			"color": vars.color.white,
			"display": "inline-flex",
			"fontSize": "0.875rem",
			"fontWeight": 600,
			"left": "50%",
			"margin": "1.5rem auto 0",
			"padding": "0.5rem 1rem",
			"textAlign": "center",
			"transition": "transform 0.3s ease-in",
		},
	},
});

export const eventSection = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					padding: "2rem 1rem",
				},
				[Breakpoints.xxl]: {
					marginInline: "auto",
					maxWidth: "88rem",
					width: "100%",
				},
			},
			"padding": "0",
		},
	},
});

export const eventTitle = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
				},
			},
			"color": vars.color.white,
			"fontSize": "1.25rem",
			"fontWeight": 600,
			"marginBottom": "2rem",
		},
	},
});

export const eventLinks = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					gridTemplateColumns: "repeat(auto-fill, minmax(0, 20rem))",
				},
			},
			"display": "grid",
			"gap": "1.25rem",
			"gridAutoRows": "1fr  ",
			"marginBottom": "3rem",
		},
	},
});

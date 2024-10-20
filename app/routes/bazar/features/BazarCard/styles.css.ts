import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const backgroundColor = createVar();
export const borderColor = createVar();

export const box = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					maxWidth: "28.5rem",
				},
			},
			"backdropFilter": "blur(32px)",
			"backgroundImage": "linear-gradient(154deg, rgb(255 255 255 / 0.09) 0%, rgb(255 255 255 / 0.03) 100%)",
			"border": `1px solid ${vars.color.white}`,
			"borderRadius": "1.25rem",
			"display": "flex",
			"flexDirection": "column",
			"gap": "0.5rem",
			"maxWidth": "none",
			"padding": "1rem",
		},
	},
});

export const layout = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					gridTemplateColumns: "1fr 1fr",
				},
			},
			"display": "grid",
			"gap": "1rem",
		},
	},
});

export const image = style({
	"@layer": {
		[layers.feature]: {
			aspectRatio: "16/9",
			objectFit: "contain",
			objectPosition: "center center",
			width: "100%",
		},
	},
});

export const name = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "1.25rem",
			fontWeight: "bold",
		},
	},
});

export const overView = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "0.875rem",
			margin: 0,
		},
	},
});

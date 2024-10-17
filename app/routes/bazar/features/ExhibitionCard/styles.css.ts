import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					maxWidth: "20rem",
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

export const departmentTag = style({
	"@layer": {
		[layers.feature]: {
			backgroundColor: vars.color.purple,
			borderRadius: "0.25rem",
			color: vars.color.white,
			padding: "0.25rem 0.5rem",
		},
	},
});

export const team = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "1.25rem",
			fontWeight: 600,
			marginBottom: "0.5rem",
		},
	},
});

export const content = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "0.875rem",
		},
	},
});

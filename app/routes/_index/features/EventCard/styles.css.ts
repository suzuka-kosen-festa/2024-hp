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
			"borderRadius": "1.25rem",
			"display": "flex",
			"flexDirection": "column",
			"maxWidth": "none",
			"padding": "1rem",
		},
	},
});

export const title = style({
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
			marginBottom: "2rem",
		},
	},
});

export const link = style({
	"@layer": {
		[layers.feature]: {
			":hover": {
				transform: "scale(1.05)",
			},
			"alignSelf": "flex-end",
			"border": `1px solid ${vars.color.white}`,
			"borderRadius": "0.5rem",
			"boxShadow": "0px 4px 4px 0px rgb(0 0 0 / 0.25)",
			"color": vars.color.white,
			"fontSize": "0.875rem",
			"fontWeight": 600,
			"padding": "0.5rem 1rem",
			"transition": "transform 0.3s ease-in",
		},
	},
});

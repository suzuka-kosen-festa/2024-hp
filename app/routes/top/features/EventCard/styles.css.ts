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
					maxWidth: "20rem",
				},
			},
			"backdropFilter": "blur(32px)",
			backgroundColor,
			borderColor,
			"borderRadius": "1.25rem",
			"borderStyle": "solid",
			"borderWidth": "1px",
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
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "flex-end",
			padding: "0.5rem 0",
			rowGap: "0.5rem",
		},
	},
});

export const span = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "0.875rem",
			fontWeight: 600,
		},
	},
});

export const arrow = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			height: "1.125rem",
			selectors: {
				[`${link}:hover &`]: {
					transform: "scale(1.5)",
				},
			},
			transition: "transform 0.3s ease-in",
			width: "1.125rem",
		},
	},
});

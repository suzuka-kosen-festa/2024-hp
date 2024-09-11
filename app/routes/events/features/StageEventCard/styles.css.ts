import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			height: "100%",
			maxWidth: "21.25rem",
			width: "100%",
		},
	},
});

export const title = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "1.25rem",
			fontWeight: 600,
			letterSpacing: "0.25rem",
			marginBottom: "0.5rem",
		},
	},
});

export const meta = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			color: vars.color.textGray,
			columnGap: "0.25rem",
			display: "flex",
		},
	},
});

export const time = style({
	"@layer": {
		[layers.feature]: {
			marginBottom: "0.25rem",
		},
	},
});

export const map = style({
	"@layer": {
		[layers.feature]: {
			marginBottom: "1rem",
		},
	},
});

export const icon = style({
	"@layer": {
		[layers.feature]: {
			height: "0.875rem",
			width: "0.875rem",
		},
	},
});

export const text = style({
	"@layer": {
		[layers.feature]: {
			fontSize: "0.875rem",
		},
	},
});

export const overview = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "0.875rem",
		},
	},
});

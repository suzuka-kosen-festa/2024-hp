import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const name = style({
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

export const metas = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					columnGap: "1rem",
					flexDirection: "row",
					marginBottom: "2.5rem",
				},
			},
			"display": "flex",
			"flexDirection": "column",
			"marginBottom": "1rem",
			"rowGap": "0.5rem",
		},
	},
});

export const meta = style({
	"@layer": {
		[layers.feature]: {
			alignContent: "center",
			color: vars.color.textGray,
			columnGap: "0.25rem",
			display: "inline-flex",
			fontSize: "0.875rem",
		},
	},
});

export const icon = style({
	"@layer": {
		[layers.feature]: {
			height: "1rem",
			width: "1rem",
		},
	},
});

export const overviewContainer = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					flexDirection: "row",
				},
			},
			"display": "flex",
			"flexDirection": "column",
			"gap": "0.75rem",
		},
	},
});

export const press = style({
	"@layer": {
		[layers.feature]: {
			flexShrink: 0,
			height: "11.25rem",
			objectFit: "cover",
			width: "20rem",
		},
	},
});

export const overview = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			flex: "1 0 0",
			fontSize: "1rem",
			maxWidth: "20rem",
		},
	},
});

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const link = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "flex-end",
			padding: "0.5rem 1rem",
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

import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const wrapper = style({
	"@layer": {
		[layers.component]: {
			position: "relative",
			display: "flex",
			justifyContent: "center",
			width: "100%",
		},
	},
});

export const lineBackgroundColor = createVar();

export const line = style({
	"@layer": {
		[layers.component]: {
			position: "absolute",
			top: "50%",
			transform: "translateY(-50%)",
			width: "100%",
			height: "0.25rem",
			background: lineBackgroundColor,
			zIndex: -1,
		},
	},
});

export const iconBoxBackgroundColor = createVar();

export const boxShadow = createVar();

export const iconBox = style({
	"@layer": {
		[layers.component]: {
			display: "inline-block",
			width: "4.75rem",
			height: "4.75rem",
			padding: "1.25rem",
			borderRadius: "9999px",
			backgroundColor: iconBoxBackgroundColor,
			boxShadow,
		},
	},
});

export const icon = style({
	"@layer": {
		[layers.component]: {
			width: "100%",
			height: "100%",
			color: vars.color.white,
		},
	},
});

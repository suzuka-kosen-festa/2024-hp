import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const backgroundColor = createVar();
export const borderColor = createVar();

export const container = style({
	"@layer": {
		[layers.feature]: {
			backdropFilter: "blur(32px)",
			backgroundColor,
			borderColor,
			borderRadius: "1.25rem",
			borderStyle: "solid",
			borderWidth: "1px",
			display: "flex",
			flexDirection: "column",
			padding: "1rem",
			rowGap: "1rem",
		},
	},
});

export const innerContainer = style({
	"@layer": {
		[layers.feature]: {
			flexBasis: 0,
			flexGrow: 1,
			flexShrink: 0,
		},
	},
});

export const icon = style({
	"@layer": {
		[layers.feature]: {
			alignSelf: "flex-end",
			color: vars.color.white,
			height: "1.5rem",
			width: "1.5rem",
		},
	},
});

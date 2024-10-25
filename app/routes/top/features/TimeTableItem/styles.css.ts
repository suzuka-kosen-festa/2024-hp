import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const height = createVar();
export const borderColor = createVar();
export const backgroundColor = createVar();
export const top = createVar();
export const borderTop = createVar();

export const box = style({
	"@layer": {
		[layers.feature]: {
			backgroundColor,
			borderBottom: `2px solid ${borderColor}`,
			borderTop,
			color: vars.color.white,
			display: "grid",
			fontFamily: vars.typography.fontFamily.mono,
			fontSize: "0.875rem",
			height,
			placeContent: "center",
			position: "absolute",
			top,
			width: "16rem",
		},
	},
});

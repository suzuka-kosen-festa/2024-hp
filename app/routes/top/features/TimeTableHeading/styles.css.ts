import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const color = createVar();

export const heading = style({
	"@layer": {
		[layers.feature]: {
			backgroundColor: color,
			borderRadius: "1.25rem",
			boxShadow: `0px 0px 30px 0px ${color}`,
			color: vars.color.white,
			fontFamily: vars.typography.fontFamily.mono,
			fontSize: "1.5rem",
			padding: "0.5rem 4rem",
		},
	},
});

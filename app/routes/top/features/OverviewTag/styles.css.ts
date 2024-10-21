import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const tagColor = createVar();

export const tag = style({
	"@layer": {
		[layers.feature]: {
			backgroundColor: tagColor,
			boxShadow: `4px 4px 4px 0px ${vars.color.blueShadow}`,
			color: vars.color.white,
			display: "inline-block",
			fontSize: "1rem",
			fontWeight: 600,
			padding: "0.5rem 0.75rem",
		},
	},
});

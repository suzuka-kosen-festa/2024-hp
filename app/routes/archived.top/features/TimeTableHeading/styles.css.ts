import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const color = createVar();

export const heading = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
				},
			},
			"backgroundColor": color,
			"borderRadius": "1.25rem",
			"boxShadow": `0px 0px 30px 0px ${color}`,
			"color": vars.color.white,
			"fontFamily": vars.typography.fontFamily.mono,
			"fontSize": "1.25rem",
			"padding": "0.5rem",
			"textAlign": "center",
			"width": "16rem",
		},
	},
});

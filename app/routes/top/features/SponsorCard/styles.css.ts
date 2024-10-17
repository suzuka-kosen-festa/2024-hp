import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			backgroundColor: vars.color.white,
			borderRadius: "0.5rem",
			color: vars.color.black,
			display: "grid",
			fontSize: "1.5rem",
			fontWeight: 600,
			height: "8.25rem",
			padding: "1.125rem",
			placeContent: "center",
			textAlign: "center",
			width: "100%",
		},
	},
});

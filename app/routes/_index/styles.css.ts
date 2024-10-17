import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const landingWrapper = style({
	"@layer": {
		[layers.page]: {
			alignItems: "center",
			backgroundColor: vars.color.black,
			display: "flex",
			height: "100%",
			justifyContent: "center",
			minHeight: "100svh",
			width: "100%",
		},
	},
});

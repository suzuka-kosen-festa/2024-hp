import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const background = style({
	"@layer": {
		[layers.page]: {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			objectFit: "cover",
			objectPosition: "center",
			zIndex: -1,
		},
	},
});

export const splashWrapper = style({
	"@layer": {
		[layers.page]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			height: "100%",
			minHeight: "100lvh",
			backgroundColor: vars.color.black,
		},
	},
});

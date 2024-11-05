import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			display: "flex",
			flexDirection: "column",
			rowGap: "1.5rem",
		},
	},
});

export const box = style({
	"@layer": {
		[layers.feature]: {
			position: "relative",
			width: "100%",
		},
	},
});

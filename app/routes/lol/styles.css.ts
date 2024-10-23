import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";

export const background = style({
	"@layer": {
		[layers.page]: {
			height: "100%",
			inset: 0,
			left: 0,
			objectFit: "cover",
			objectPosition: "center",
			position: "fixed",
			top: 0,
			width: "100%",
			zIndex: -1,
		},
	},
});

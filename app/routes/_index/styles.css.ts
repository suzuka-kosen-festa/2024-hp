import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";

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

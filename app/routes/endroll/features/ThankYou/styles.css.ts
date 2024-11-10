import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			backgroundColor: "rgb(0 0 0 / 0.6)",
			display: "flex",
			height: "100%",
			justifyContent: "center",
			minHeight: "100svh",
			width: "100%",
		},
	},
});

export const title = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "3rem",
				},
			},
			"color": vars.color.white,
			"fontFamily": vars.typography.fontFamily.jura,
			"fontSize": "2rem",
			"hangingPunctuation": "allow-end",
			"lineBreak": "strict",
			"overflowWrap": "anywhere",
			"position": "relative",
			"textAlign": "center",
			"wordBreak": "keep-all",
		},
	},
});

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
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
					fontSize: "clamp(3rem, calc(0.6585365853658534rem + 4.878048780487805vw), 4.5rem)",
					letterSpacing: "0.9rem",
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

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

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

export const hr = style({
	"@layer": {
		[layers.page]: {
			background: `linear-gradient(to bottom, ${vars.color.black}, rgb(0 0 0 / 0.8))`,
			height: "10svh",
			width: "100%",
		},
	},
});

export const endroll = style({
	"@layer": {
		[layers.page]: {
			alignItems: "center",
			backgroundColor: "rgb(0 0 0 / 0.8)",
			display: "flex",
			flexDirection: "column",
			paddingBottom: "5rem",
			rowGap: "1.75rem",
		},
	},
});

export const final = style({
	"@layer": {
		[layers.page]: {
			background: "linear-gradient(to bottom, rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.6))",
			height: "10svh",
			width: "100%",
		},
	},
});

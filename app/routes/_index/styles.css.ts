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

export const eyeWrapper = style({
	"@layer": {
		[layers.page]: {
			height: "100%",
			left: 0,
			minHeight: "100svh",
			overflow: "hidden",
			position: "absolute",
			top: 0,
			width: "100%",
		},
	},
});

export const eye = style({
	"@layer": {
		[layers.page]: {
			height: "calc(50% + 120px)",
			left: 0,
			position: "absolute",
			width: "100%",
		},
	},
});

export const eyeTop = style({
	"@layer": {
		[layers.page]: {
			backgroundImage: `linear-gradient(${vars.color.black} calc(100% - 120px), transparent)`,
			top: "-101%",
		},
	},
});

export const eyeBottom = style({
	"@layer": {
		[layers.page]: {
			backgroundImage: `linear-gradient(to top, ${vars.color.black} calc(100% - 120px), transparent)`,
			bottom: "-101%",
		},
	},
});

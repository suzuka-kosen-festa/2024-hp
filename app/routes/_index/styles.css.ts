import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const blurredBackground = style({
	"@layer": {
		[layers.page]: {
			display: "none",
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			minHeight: "100svh",
			objectFit: "cover",
			objectPosition: "center",
			filter: "blur(12px)",
			zIndex: -1,
		},
	},
});

export const background = style({
	"@layer": {
		[layers.page]: {
			display: "none",
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			minHeight: "100svh",
			objectFit: "cover",
			objectPosition: "center",
			zIndex: -1,
		},
	},
});

export const eyeWrapper = style({
	"@layer": {
		[layers.page]: {
			display: "none",
			position: "absolute",
			width: "100%",
			height: "100%",
			minHeight: "100svh",
			top: 0,
			left: 0,
			overflow: "hidden",
		},
	},
});

export const eye = style({
	"@layer": {
		[layers.page]: {
			position: "absolute",
			left: 0,
			width: "100%",
			height: "calc(50% + 120px)",
		},
	},
});

export const eyeTop = style({
	"@layer": {
		[layers.page]: {
			top: 0,
			backgroundImage: `linear-gradient(${vars.color.black} calc(100% - 120px), transparent)`,
		},
	},
});

export const eyeBottom = style({
	"@layer": {
		[layers.page]: {
			bottom: 0,
			backgroundImage: `linear-gradient(to top, ${vars.color.black} calc(100% - 120px), transparent)`,
		},
	},
});

export const landingWrapper = style({
	"@layer": {
		[layers.page]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			height: "100%",
			minHeight: "100svh",
			backgroundColor: vars.color.black,
		},
	},
});

export const mainWrapper = style({
	"@layer": {
		[layers.page]: {
			display: "none",
		},
	},
});

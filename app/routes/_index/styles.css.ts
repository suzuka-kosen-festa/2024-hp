import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const blurredBackground = style({
	"@layer": {
		[layers.page]: {
			display: "none",
			filter: "blur(12px)",
			height: "100%",
			left: 0,
			minHeight: "100svh",
			objectFit: "cover",
			objectPosition: "center",
			position: "fixed",
			top: 0,
			width: "100%",
			zIndex: -1,
		},
	},
});

export const background = style({
	"@layer": {
		[layers.page]: {
			display: "none",
			height: "100%",
			left: 0,
			minHeight: "100svh",
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
			display: "none",
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
			top: 0,
		},
	},
});

export const eyeBottom = style({
	"@layer": {
		[layers.page]: {
			backgroundImage: `linear-gradient(to top, ${vars.color.black} calc(100% - 120px), transparent)`,
			bottom: 0,
		},
	},
});

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

export const mainWrapper = style({
	"@layer": {
		[layers.page]: {
			display: "none",
		},
	},
});

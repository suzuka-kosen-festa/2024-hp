import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					padding: "6rem 4rem 0",
				},
			},
			"backgroundColor": "rgba(0, 0, 0, 0.8)",
			"display": "grid",
			"gridTemplateRows": "auto 1fr",
			"minHeight": "100vh",
			"paddingInline": "1rem",
			"paddingTop": "6rem",
			"placeItems": "center",
			"position": "relative",
			"width": "100%",
		},
	},
});

export const background = style({
	"@layer": {
		[layers.feature]: {
			height: "100%",
			left: "50%",
			overflow: "hidden",
			position: "absolute",
			top: 0,
			transform: "translateX(-50%)",
			width: "100%",
		},
	},
});

export const box = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					height: "45.25rem",
				},
			},
			"height": "20rem",
			"position": "relative",
			"width": "100%",
		},
	},
});

export const content = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					padding: "4rem",
				},
			},
			"display": "flex",
			"flexDirection": "column",
			"height": "100%",
			"justifyContent": "center",
			"marginInline": "auto",
			"position": "absolute",
			"textAlign": "center",
			"width": "100%",
			"zIndex": 1,
		},
	},
});

export const lattice = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					backgroundSize: "10.25rem 7rem",
				},
			},
			"backgroundImage": `linear-gradient(0deg, transparent 0, transparent calc(100% - 1px), ${vars.color.borderRed} calc(100% - 1px), ${vars.color.borderRed} 100%),
        linear-gradient(90deg, transparent 0, transparent calc(100% - 1px), ${vars.color.borderRed} calc(100% - 1px), ${vars.color.borderRed} 100%)`,
			"backgroundPosition": "center",
			"backgroundRepeat": "repeat",
			"backgroundSize": "1.875rem 2.375rem",
			"height": "100%",
			"left": 0,
			"position": "absolute",
			"top": 0,
			"width": "100%",
		},
	},
});

export const headingWrapper = style({
	alignItems: "center",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	padding: "2rem 0",
	position: "relative",
	width: "100%",
});

export const vertical = style({
	backgroundImage: `linear-gradient(to left, ${vars.color.black} 0%, ${vars.color.red} 50%, ${vars.color.black} 100%)`,
	height: "0.25rem",
	left: 0,
	position: "absolute",
	top: "50%",
	transform: "translateY(-50%)",
	width: "100%",
});

export const border = style({
	"@media": {
		[Breakpoints.md]: {
			fontSize: "7.5rem",
			letterSpacing: "1.5rem",
			textShadow: `1rem 1rem 1px ${vars.color.red}`,
		},
	},
	"color": vars.color.white,
	"fontFamily": vars.typography.fontFamily.jura,
	"fontSize": "3rem",
	"fontWeight": 300,
	"letterSpacing": "0.6rem",
	"textAlign": "center",
	"textShadow": `0.5rem 0.5rem 1px ${vars.color.red}`,
	"zIndex": 1,
});

export const textContent = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			width: "100%",
		},
	},
});

export const text = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
					letterSpacing: "0.3rem",
				},
			},
			"color": vars.color.white,
			"fontSize": "1rem",
			"letterSpacing": "0.2rem",
			"lineHeight": "1.5",
			"maxWidth": "60rem",
		},
	},
});

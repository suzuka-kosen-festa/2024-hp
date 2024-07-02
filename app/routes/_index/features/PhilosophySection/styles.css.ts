import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			"display": "flex",
			"flexDirection": "column",
			"rowGap": "4.75rem",
			"width": "100%",
			"height": "100%",
			"minHeight": "100svh",
			"paddingInline": "1rem",
			"paddingTop": "1.5rem",
			"backgroundColor": "rgb(0 0 0 / 0.8)",

			"@media": {
				[Breakpoints.md]: {
					paddingInline: "1.5rem",
					rowGap: "2.875rem",
				},
			},
		},
	},
});

export const box = style({
	"@layer": {
		[layers.feature]: {
			"position": "relative",
			"width": "100%",
			"height": "20rem",

			"@media": {
				[Breakpoints.md]: {
					height: "45.25rem",
				},
			},
		},
	},
});

export const lattice = style({
	"@layer": {
		[layers.feature]: {
			"position": "absolute",
			"top": 0,
			"left": "50%",
			"transform": "translateX(-50%)",
			"width": "100%",
			"maxWidth": "72.5rem",
			"height": "100%",
			"backgroundImage": `linear-gradient(0deg, transparent 0, transparent calc(100% - 1px), ${vars.color.borderRed} calc(100% - 1px), ${vars.color.borderRed} 100%),
				linear-gradient(90deg, transparent 0, transparent calc(100% - 1px), ${vars.color.borderRed} calc(100% - 1px), ${vars.color.borderRed} 100%)`,
			"backgroundRepeat": "repeat",
			"backgroundSize": "1.875rem 2.375rem",
			"backgroundPosition": "center center",

			"@media": {
				[Breakpoints.md]: {
					backgroundSize: "10.25rem 7rem",
				},
			},
		},
	},
});

export const vertical = style({
	"@layer": {
		[layers.feature]: {
			position: "absolute",
			top: "50%",
			left: 0,
			transform: "translateY(-50%)",
			width: "100%",
			height: "0.25rem",
			backgroundImage: `linear-gradient(to left, ${vars.color.black} 0%, ${vars.color.red} 50%, ${vars.color.black} 100%)`,
		},
	},
});

export const border = style({
	"@layer": {
		[layers.feature]: {
			"position": "absolute",
			"top": "48%",
			"left": "50%",
			"transform": "translate(-48%, -50%)",
			"color": vars.color.white,
			"fontSize": "3rem",
			"letterSpacing": "0.6rem",
			"textShadow": `0.5rem 0.5rem 1px ${vars.color.red}`,
			"fontFamily": vars.typography.fontFamily.jura,
			"fontWeight": 300,
			"fontStyle": "normal",
			"textAlign": "center",

			"@media": {
				[Breakpoints.md]: {
					fontSize: "7.5rem",
					letterSpacing: "1.5rem",
					textShadow: `1rem 1rem 1px ${vars.color.red}`,
				},
			},
		},
	},
});

export const text = style({
	"@layer": {
		[layers.feature]: {
			"position": "relative",
			"top": "100%",
			"color": vars.color.white,
			"fontSize": "1rem",
			"letterSpacing": "0.2rem",
			"textAlign": "center",
			"wordBreak": "keep-all",
			"lineBreak": "strict",
			"hangingPunctuation": "allow-end",
			"overflowWrap": "anywhere",

			"@media": {
				[Breakpoints.md]: {
					top: "70%",
					transform: "translateY(-70%)",
					fontSize: "1.5rem",
					letterSpacing: "0.3rem",
				},
			},
		},
	},
});

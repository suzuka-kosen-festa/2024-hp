import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					paddingInline: "1.5rem",
					rowGap: "2.875rem",
				},
			},
			"backgroundColor": "rgb(0 0 0 / 0.8)",
			"display": "flex",
			"flexDirection": "column",
			"height": "100%",
			"minHeight": "100svh",
			"paddingInline": "1rem",
			"paddingTop": "1.5rem",
			"rowGap": "4.75rem",

			"width": "100%",
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
			"backgroundPosition": "center center",
			"backgroundRepeat": "repeat",
			"backgroundSize": "1.875rem 2.375rem",
			"height": "100%",
			"left": "50%",
			"maxWidth": "72.5rem",
			"position": "absolute",
			"top": 0,
			"transform": "translateX(-50%)",

			"width": "100%",
		},
	},
});

export const vertical = style({
	"@layer": {
		[layers.feature]: {
			backgroundImage: `linear-gradient(to left, ${vars.color.black} 0%, ${vars.color.red} 50%, ${vars.color.black} 100%)`,
			height: "0.25rem",
			left: 0,
			position: "absolute",
			top: "50%",
			transform: "translateY(-50%)",
			width: "100%",
		},
	},
});

export const border = style({
	"@layer": {
		[layers.feature]: {
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
			"fontStyle": "normal",
			"fontWeight": 300,
			"left": "50%",
			"letterSpacing": "0.6rem",
			"position": "absolute",
			"textAlign": "center",
			"textShadow": `0.5rem 0.5rem 1px ${vars.color.red}`,
			"top": "48%",

			"transform": "translate(-48%, -50%)",
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
					top: "70%",
					transform: "translateY(-70%)",
				},
			},
			"color": vars.color.white,
			"fontSize": "1rem",
			"hangingPunctuation": "allow-end",
			"letterSpacing": "0.2rem",
			"lineBreak": "strict",
			"overflowWrap": "anywhere",
			"position": "relative",
			"textAlign": "center",
			"top": "100%",

			"wordBreak": "keep-all",
		},
	},
});

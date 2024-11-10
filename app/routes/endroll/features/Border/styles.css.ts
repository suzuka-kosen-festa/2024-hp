import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			backdropFilter: "blur(8px)",
			backgroundColor: "rgb(0 0 0 / 0.6)",
			display: "flex",
			height: "100%",
			justifyContent: "center",
			minHeight: "100svh",
			width: "100%",
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

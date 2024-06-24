import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const text = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			textAlign: "center",
			fontFamily: vars.typography.fontFamily.dot,
			WebkitTextStrokeWidth: "1px",
			WebkitTextStrokeColor: vars.color.black,
			fontSize: "2rem",
			letterSpacing: "0.4rem",
		},
	},
});

export const box = style({
	"@layer": {
		[layers.feature]: {
			border: `4px solid ${vars.color.red}`,
			borderRadius: "1.25rem",
			boxShadow: "0 0 80px rgba(200, 26, 84, 0.5)",
			flexShrink: 0,
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: "7.25rem 16rem 7.5rem",
		},
	},
});

export const border = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "5rem",
			textAlign: "center",
			fontFamily: vars.typography.fontFamily.dot,
			textShadow: `0px 6px 0 ${vars.color.red}`,
			letterSpacing: "1rem",
			WebkitTextStrokeWidth: "1px",
			WebkitTextStrokeColor: vars.color.black,
			marginBottom: "1.5rem",
		},
	},
},
);

export const countdown = style({
	"@layer": {
		[layers.feature]: {
			marginBottom: "4.5rem",
		},
	},
});

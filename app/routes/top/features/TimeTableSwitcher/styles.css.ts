import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const gridTemplateColumns = createVar();
export const width = createVar();
export const transform = createVar();

export const radioGroup = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			backgroundColor: vars.color.gray,
			borderRadius: "1.25rem",
			boxSizing: "border-box",
			display: "grid",
			gap: "0.5rem",
			gridTemplateColumns,
			padding: "0.5rem",
			position: "relative",
			width: "fit-content",
		},
	},
});

export const indicator = style({
	backgroundColor: vars.color.red,
	borderRadius: "0.75rem",
	bottom: "0.5rem",
	boxShadow: `0px 0px 30px 0px ${vars.color.red}`,
	content: "",
	height: "auto",
	left: 0,
	position: "absolute",
	top: "0.5rem",
	transform,
	transition: "transform 0.35s ease",
	width,
});

export const button = style({
	backgroundColor: "transparent",
	border: "none",
	boxSizing: "border-box",
	color: "rgba(255, 255, 255, 0.5)",
	cursor: "pointer",
	fontFamily: vars.typography.fontFamily.mono,
	fontSize: "1.5rem",
	height: "100%",
	minWidth: "0",
	padding: "0.5rem 2rem",
	position: "relative",
	selectors: {
		"&[aria-checked='true']": {
			color: vars.color.white,
			cursor: "inherit",
		},
	},
	transition:
    "font-weight 0.35s ease, color 0.35s ease, background-color 0.15s ease",
});

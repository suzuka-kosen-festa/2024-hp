import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			backgroundColor: vars.color.white,
			borderRadius: "0.75rem",
			color: vars.color.black,
			fontSize: "1.5rem",
			fontWeight: 600,
			padding: "2rem",
			width: "100%",
			height: "auto",
		},
	},
});


export const heading = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.black,
			fontSize: "2rem",
			fontWeight: 700,
			textAlign: "center",
			marginBottom: "1.5rem",
		},
	},
});

export const grid = style({
	display: "grid",
	gridTemplateColumns: "1fr",
	gap: "1.5rem",
	"@media": {
		[Breakpoints.sm]: {
			gridTemplateColumns: "50% 50%",
		},
	},
});

export const image = style({
	width: "100%",
	height: "auto",
	objectFit: "cover",
	display: "block",
	alignItems: "center",
	borderRadius: "0.2rem",
	margin: "0 auto",
});

export const details = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "1rem",
	textAlign: "left",
	fontSize: "1rem",
	"@media": {
		[Breakpoints.md]: {
			paddingTop: "2rem",
		},
	},
});

export const text = style({
		wordWrap: "break-word",
		overflowWrap: "break-word",
});

export const tel = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "0.5rem",
	color: vars.color.blue,
	fontSize: "1rem",
	marginBottom: "2rem",
});



export const icon = style({
	fontSize: "1.125rem",
});

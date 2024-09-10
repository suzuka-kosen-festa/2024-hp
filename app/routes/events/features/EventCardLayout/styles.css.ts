import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const container = style({
	"@layer": {
		[layers.feature]: {
			backdropFilter: "blur(32px)",
			backgroundImage: "linear-gradient(104deg, rgb(255 255 255 / 0.09) 0%, rgb(255 255 255 / 0.03) 100%)",
			border: `1px solid ${vars.color.white}`,
			borderRadius: "1.25rem",
			display: "flex",
			flexDirection: "column",
			padding: "1rem",
			rowGap: "1rem",
		},
	},
});

export const innerContainer = style({
	"@layer": {
		[layers.feature]: {
			flexBasis: 0,
			flexGrow: 1,
			flexShrink: 0,
		},
	},
});

export const icon = style({
	"@layer": {
		[layers.feature]: {
			alignSelf: "flex-end",
			color: vars.color.white,
			height: "1.5rem",
			width: "1.5rem",
		},
	},
});

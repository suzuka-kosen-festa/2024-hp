import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			padding: "1rem",
			borderRadius: "0.75rem",
			border: `2px solid ${vars.color.red}`,
			backgroundColor: "rgb(60 60 60 / 0.8)",
		},
	},
});

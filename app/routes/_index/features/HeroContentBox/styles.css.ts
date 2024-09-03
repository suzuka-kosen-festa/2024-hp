import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "flex-start",
			backgroundColor: "rgb(60 60 60 / 0.8)",
			border: `2px solid ${vars.color.red}`,
			borderRadius: "0.75rem",
			display: "flex",
			flexDirection: "column",
			padding: "1rem",
		},
	},
});

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			position: "relative",
			padding: "1rem",
			borderRadius: "1.25rem",
			background: "linear-gradient(154deg, rgb(255 255 255 / 0.09) 0%, rgb(255 255 255 / 0.03) 100%)",
			backdropFilter: "blur(32px)",
			boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 0.20)",
		},
	},
});

export const title = style({
	"@layer": {
		[layers.feature]: {
			position: "absolute",
			top: "-0.625rem",
			left: "-0.625rem",
			padding: "0.5rem 0.75rem",
			backgroundColor: vars.color.blue,
			boxShadow: `4px 4px 4px 0px ${vars.color.blueShadow}`,
			color: vars.color.white,
			textAlign: "center",
			fontSize: "1rem",
			letterSpacing: "0.2rem",
			fontWeight: 200,
		},
	},
});

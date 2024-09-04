import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			backdropFilter: "blur(32px)",
			backgroundImage: "linear-gradient(154deg, rgb(255 255 255 / 0.09) 0%, rgb(255 255 255 / 0.03) 100%)",
			borderRadius: "1.25rem",
			boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 0.20)",
			padding: "1rem",
			position: "relative",
		},
	},
});

export const title = style({
	"@layer": {
		[layers.feature]: {
			backgroundColor: vars.color.blue,
			boxShadow: `4px 4px 4px 0px ${vars.color.blueShadow}`,
			color: vars.color.white,
			fontSize: "1rem",
			fontWeight: 200,
			left: "-0.625rem",
			letterSpacing: "0.2rem",
			padding: "0.5rem 0.75rem",
			position: "absolute",
			textAlign: "center",
			top: "-0.625rem",
		},
	},
});

import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";

export const footer = style({
	"@layer": {
		[layers.component]: {
			backgroundColor: vars.color.black,
            bottom: 0,
            width: "100%",
            position: "fixed",

            color: vars.color.white,
            textAlign: "center",
            fontSize: "16px",
            
            paddingBottom: "16px",
            paddingTop: "32px",
		},
	},
});

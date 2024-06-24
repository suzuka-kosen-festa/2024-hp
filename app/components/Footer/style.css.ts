import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const footer = style({
	"@layer": {
		[layers.component]: {
			backgroundColor: vars.color.gray,
            bottom: 0,
            width: "100%",
            position: "fixed",

            color: vars.color.white,
            textAlign: "center",
            fontSize: "0.7rem",
            
            paddingBottom: "1.05rem",
            paddingTop: "2.45rem",

            "@media":{
                [Breakpoints.md]: {
                    fontSize: "1rem",
                    paddingBottom: "1.5rem",
                    paddingTop: "3.5rem",
                }
            }
		},
	},
});

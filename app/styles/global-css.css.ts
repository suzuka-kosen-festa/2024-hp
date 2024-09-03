import { globalStyle } from "@vanilla-extract/css";
import * as layers from "./layers.css";
import { vars } from "./theme.css";

globalStyle("body", {
	"@layer": {
		[layers.base]: {
			backgroundColor: vars.color.black,
			fontFamily: "Inter, \"Noto Sans JP\", \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif",
			MozOsxFontSmoothing: "grayscale",
			WebkitFontSmoothing: "antialiased",
		},
	},
});

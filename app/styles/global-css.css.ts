import { globalStyle } from "@vanilla-extract/css";
import * as layers from "./layers.css";

globalStyle("body", {
	"@layer": {
		[layers.base]: {
			fontFamily: "Inter, \"Noto Sans JP\", \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif",
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
		},
	},
});

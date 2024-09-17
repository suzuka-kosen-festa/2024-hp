import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			display: "grid",
			rowGap: "2rem",
			width: "100%",
		},
	},
});

export const list = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				"(min-width: 768px)": {
					gridTemplateColumns: "repeat(auto-fill, minmax(43.5rem, 1fr))",
				},
			},
			"display": "grid",
			"gap": "1rem",
			"gridTemplateColumns": "1fr",
		},
	},
});

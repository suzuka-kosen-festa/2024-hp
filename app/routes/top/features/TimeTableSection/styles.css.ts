import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			display: "flex",
			flexDirection: "column",
			marginBottom: "2rem",
			rowGap: "2rem",
		},
	},
});

export const frame = style({
	"@layer": {
		[layers.feature]: {
			columnGap: "2rem",
			display: "flex",
			width: "100%",
		},
	},
});

export const times = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "flex-start",
			display: "flex",
			flexDirection: "column",
			padding: "4.5rem 0.125rem 0rem 0.125rem;",
			position: "sticky",
			rowGap: "6rem",
		},
	},
});

export const time = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
				},
			},
			"color": vars.color.white,
			"fontFamily": vars.typography.fontFamily.mono,
			"fontSize": "1.25rem",
			"lineHeight": 0,
		},
	},
});

export const timetables = style({
	"@layer": {
		[layers.feature]: {
			columnGap: "2rem",
			display: "flex",
			overflowX: "auto",
		},
	},
});

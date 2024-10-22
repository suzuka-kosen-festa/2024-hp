import { style } from "@vanilla-extract/css";
import { title } from "./../GameEventCard/styles.css";
import * as layers from "@/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const section = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			display: "flex",
			flexDirection: "column",
			gap: "2rem",
		},
	},
});

export const container = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.lg]: {
					display: "grid",
					gap: "2rem",
					gridTemplateColumns: "repeat(2,1fr)",
				},
				[Breakpoints.xxl]: {
					maxWidth: "88rem",
				},
			},
			"display": "grid",
			"gap": "2rem",
			"placeItems": "center",
		},
	},
});

export const box = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.sm]: {
					gridTemplateColumns: "repeat(2,1fr)",
					gridTemplateRows: "repeat(2,1fr)",
				},
			},
			"display": "grid",
			"gap": "1rem",
		},
	},
});

const card = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			border: `1px solid ${vars.color.cyan}`,
			borderRadius: "20px",
			display: "grid",
			gap: "0.5rem",
			gridTemplateAreas: `
      'icon title'
      '. text'
      `,
			gridTemplateColumns: "auto 1fr",
			padding: "1rem",
		},
	},
});

export const largeCard = style([
	card,
	{
		"@layer": {
			[layers.feature]: {
				"@media": {
					[Breakpoints.sm]: {
						gridColumn: "span 2",
						gridRow: "span 1",
					},
				},
			},
		},
	},
]);

export const smallCard = style([
	card,
	{
		"@layer": {
			[layers.feature]: {
				"@media": {
					[Breakpoints.sm]: {
						gridColumn: "span 1",
						gridRow: "span 1",
					},
				},
			},
		},
	},
]);

export const formCard = style([
	card,
	{
		"@layer": {
			[layers.feature]: {
				"@media": {
					[Breakpoints.sm]: {
						gridColumn: "span 1",
						gridRow: "span 1",
					},
				},
				"gridTemplateAreas": `
        'icon title'
        '. text'
        '. form'
        `,
			},
		},
	},
]);

export const icon = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "1.5rem",
			gridArea: "icon",
			height: "1.5rem",
			width: "1.5rem",
		},
	},
});

export const cardTitle = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "1.5rem",
			fontWeight: "600",
			gridArea: "title",
		},
	},
});

export const cardText = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "1rem",
			gridArea: "text",
		},
	},
});

export const linkBox = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			display: "inline-flex",
			gridArea: "form",
			justifyContent: "flex-end",
			padding: "0.5rem 0",
			rowGap: "0.5rem",
		},
	},
});

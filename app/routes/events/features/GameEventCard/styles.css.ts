import { style } from "@vanilla-extract/css";
import * as layers from "app/styles/layers.css";
import { vars } from "@/styles/theme.css";
import { Breakpoints } from "@/styles/media.css";

export const box = style({
	"@layer": {
		[layers.feature]: {
			display: "flex",
			flexDirection: "column",
			rowGap: "1rem",
		},
	},
});

export const day = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.textGray,
			fontSize: "1.25rem",
			fontWeight: 600,
			marginBottom: "0.25rem",
		},
	},
});

export const title = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "1.5rem",
			fontWeight: 600,
			textAlign: "center",
		},
	},
});

export const metas = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					flexDirection: "row",
				},
			},
			"alignSelf": "center",
			"columnGap": "1rem",
			"display": "flex",
			"flexDirection": "column",
		},
	},
});

export const meta = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					justifyContent: "normal",
				},
			},
			"alignContent": "center",
			"color": vars.color.white,
			"columnGap": "0.5rem",
			"display": "inline-flex",
			"fontSize": "1rem",
			"fontWeight": 600,
			"justifyContent": "center",
			"letterSpacing": "0.1em",
			"padding": "1rem 0.5rem",
		},
	},
});

export const icon = style({
	"@layer": {
		[layers.feature]: {
			height: "1.5rem",
			width: "1.5rem",
		},
	},
});

export const links = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					flexDirection: "row",
				},
			},
			"alignSelf": "center",
			"display": "flex",
			"flexDirection": "column",
		},
	},
});

export const link = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			display: "inline-flex",
			padding: "0.5rem 1rem",
			rowGap: "0.5rem",
		},
	},
});

export const hr = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					height: "auto",
					margin: "0 0.75rem",
					width: "1px",
				},
			},
			"backgroundColor": vars.color.white,
			"height": "1px",
			"margin": "0.75rem 0",
			"width": "auto",
		},
	},
});

export const span = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			fontSize: "0.875rem",
			fontWeight: 600,
		},
	},
});

export const arrow = style({
	"@layer": {
		[layers.feature]: {
			color: vars.color.white,
			height: "1.125rem",
			selectors: {
				[`${link}:hover &`]: {
					transform: "scale(1.5)",
				},
			},
			transition: "transform 0.3s ease-in",
			width: "1.125rem",
		},
	},
});

export const schedule = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.25rem",
					letterSpacing: "0.125rem",
				},
			},
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontWeight": 600,
			"letterSpacing": "0.rem",
			"marginBottom": "0.25rem",
		},
	},
});

export const schedules = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					rowGap: "1.25rem",
				},
			},
			"display": "flex",
			"flexDirection": "column",
			"rowGap": "0.5rem",
		},
	},
});

export const scheduleRow = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			border: `2px solid ${vars.color.green}`,
			borderRadius: "0.75rem",
			columnGap: "1rem",
			display: "inline-flex",
			overflow: "hidden",
		},
	},
});

export const scheduleTime = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.25rem",
					width: "9.125rem",
				},
			},
			"borderRight": `2px solid ${vars.color.green}`,
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontWeight": 600,
			"padding": "0.625rem 1rem",
			"textAlign": "center",
			"width": "7.6875rem",
		},
	},
});

export const scheduleValue = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.25rem",
				},
			},
			"color": vars.color.white,
			"fontSize": "1rem",
			"fontWeight": 600,
		},
	},
});

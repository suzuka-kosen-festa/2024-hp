import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const header = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "flex-start",
			display: "flex",
			justifyContent: "space-between",
			padding: "0.75rem 1rem",
			width: "100%",
		},
	},
});

export const logo = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					height: "6rem",
					width: "3.643125rem",
				},
			},
			"height": "2.75rem",

			"width": "1.669375rem",
		},
	},
});

export const visible = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					display: "inline",
				},
			},

			"display": "none",
		},
	},
});

export const dropdownContent = style({
	"@layer": {
		[layers.feature]: {
			alignItems: "center",
			display: "inline-flex",
			flexDirection: "column",
		},
	},
});

export const bookOpen = style({
	"@layer": {
		[layers.feature]: {
			alignSelf: "flex-end",
			color: vars.color.white,
			height: "2rem",
			marginBottom: "1rem",
			width: "2rem",
		},
	},
});

export const link = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
				},
			},
			"color": vars.color.white,
			"fontFamily": vars.typography.fontFamily.dot,
			"fontSize": "1rem",

			"position": "relative",

			"selectors": {
				"&::after": {
					backgroundColor: vars.color.white,
					bottom: "-1px",
					content: "''",
					height: "2px",
					left: 0,
					position: "absolute",
					transform: "scale(0, 1)",
					transformOrigin: "right top",
					transition: "transform 0.3s",
					width: "100%",
				},
				"&:hover::after": {
					transform: "scale(1, 1)",
					transformOrigin: "left top",
				},
			},
		},
	},
});

export const hr = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					width: "12.875rem",
				},
			},
			"backgroundColor": vars.color.white,
			"height": "1px",
			"margin": "1rem 0",

			"width": "100%",
		},
	},
});

export const sns = style({
	"@layer": {
		[layers.feature]: {
			display: "flex",
			gap: "0.75rem",
		},
	},
});

export const icon = style({
	"@layer": {
		[layers.feature]: {
			":hover": {
				transform: "scale(1.1)",
			},
			"color": vars.color.white,
			"height": "2rem",

			"transition": "transform 0.3s ease-in",

			"width": "2rem",
		},
	},
});

export const half = style({
	"@layer": {
		[layers.feature]: {
			marginBottom: "0.5rem",
		},
	},
});

export const triggerWrapper = style({
	"@layer": {
		[layers.feature]: {
			"@media": {
				[Breakpoints.md]: {
					display: "none",
				},
			},

			"display": "inline-box",
		},
	},
});

export const trigger = style({
	"@layer": {
		[layers.feature]: {
			":hover": {
				transform: "scale(1.05)",
			},
			"height": "2.75rem",
			"padding": "0.5rem",
			"transition": "transform 0.3s ease-in",

			"width": "2.75rem",
		},
	},
});

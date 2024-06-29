import { style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";
import { Breakpoints } from "@/styles/media.css";
import { vars } from "@/styles/theme.css";

export const header = style({
	"@layer": {
		[layers.feature]: {
			display: "flex",
			alignItems: "flex-start",
			justifyContent: "space-between",
			width: "100%",
			padding: "0.75rem 1rem",
		},
	},
});

export const logo = style({
	"@layer": {
		[layers.feature]: {
			"width": "1.669375rem",
			"height": "2.75rem",

			"@media": {
				[Breakpoints.md]: {
					width: "3.643125rem",
					height: "6rem",
				},
			},
		},
	},
});

export const visible = style({
	"@layer": {
		[layers.feature]: {
			"display": "none",

			"@media": {
				[Breakpoints.md]: {
					display: "inline",
				},
			},
		},
	},
});

export const dropdownContent = style({
	"@layer": {
		[layers.feature]: {
			display: "inline-flex",
			flexDirection: "column",
			alignItems: "center",
		},
	},
});

export const bookOpen = style({
	"@layer": {
		[layers.feature]: {
			alignSelf: "flex-end",
			width: "2rem",
			height: "2rem",
			marginBottom: "1rem",
			color: vars.color.white,
		},
	},
});

export const link = style({
	"@layer": {
		[layers.feature]: {
			"position": "relative",
			"fontFamily": vars.typography.fontFamily.dot,
			"fontSize": "1rem",
			"color": vars.color.white,

			"selectors": {
				"&::after": {
					position: "absolute",
					left: 0,
					bottom: "-1px",
					width: "100%",
					height: "2px",
					backgroundColor: vars.color.white,
					content: "''",
					transform: "scale(0, 1)",
					transformOrigin: "right top",
					transition: "transform 0.3s",
				},
				"&:hover::after": {
					transform: "scale(1, 1)",
					transformOrigin: "left top",
				},
			},

			"@media": {
				[Breakpoints.md]: {
					fontSize: "1.5rem",
				},
			},
		},
	},
});

export const hr = style({
	"@layer": {
		[layers.feature]: {
			"width": "100%",
			"height": "1px",
			"backgroundColor": vars.color.white,
			"margin": "1rem 0",

			"@media": {
				[Breakpoints.md]: {
					width: "12.875rem",
				},
			},
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
			"width": "2rem",
			"height": "2rem",
			"color": vars.color.white,

			"transition": "transform 0.3s ease-in",

			":hover": {
				transform: "scale(1.1)",
			},
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

export const trigger = style({
	"@layer": {
		[layers.feature]: {
			"width": "2.75rem",
			"height": "2.75rem",
			"padding": "0.5rem",
			"display": "inline-box",
			"transition": "transform 0.3s ease-in",

			":hover": {
				transform: "scale(1.05)",
			},

			"@media": {
				[Breakpoints.md]: {
					display: "none",
				},
			},
		},
	},
});

import { createVar, style } from "@vanilla-extract/css";
import * as layers from "@/styles/layers.css";

export const triggerContainer = style({
	"@layer": {
		[layers.component]: {
			display: "inline-block",
		},
	},
});

export const scrollAreaContainer = style({
	"@layer": {
		[layers.component]: {
			flex: "1 1 auto",
			overflowY: "auto",
		},
	},
});

export const contentInnerVisibility = createVar();
export const contentInnerInsetBlockStart = createVar();
export const contentInnerInsetInlineStart = createVar();
export const contentInnerInsetInlineEnd = createVar();
export const contentInnerMaxWidth = createVar();

export const contentInnerWrapper = style({
	"@layer": {
		[layers.component]: {
			position: "absolute",
			zIndex: 10_000,
			visibility: contentInnerVisibility,
			insetBlockStart: contentInnerInsetBlockStart,
			insetInlineStart: contentInnerInsetInlineStart,
			insetInlineEnd: contentInnerInsetInlineEnd,
			maxWidth: contentInnerMaxWidth,
		},
	},
});

export const controllableMaxHeight = createVar();

export const controllableWrapper = style({
	"@layer": {
		[layers.component]: {
			display: "flex",
			flexDirection: "column",
			maxHeight: controllableMaxHeight,
		},
	},
});

export const closerMaxHeight = createVar();

export const closer = style({
	"@layer": {
		[layers.component]: {
			display: "flex",
			flexDirection: "column",
			maxHeight: closerMaxHeight,
		},
	},
});

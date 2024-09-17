// eslint-disable-next-line unused-imports/no-unused-vars
const BREAKPOINT = [
	["sm", "(min-width: 640px)"],
	["md", "(min-width: 768px)"],
	["lg", "(min-width: 1024px)"],
	["xl", "(min-width: 1280px)"],
	["xxl", "(min-width: 1536px)"],
];

export const Breakpoints = {
	lg: "(min-width: 1024px)",
	md: "(min-width: 768px)",
	sm: "(min-width: 640px)",
	xl: "(min-width: 1280px)",
	xxl: "(min-width: 1536px)",
} as const satisfies Record<typeof BREAKPOINT[number][0], typeof BREAKPOINT[number][1]>;

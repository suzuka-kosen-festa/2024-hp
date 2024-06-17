const BREAKPOINT = [
	["sm", "(min-width: 640px)"],
	["md", "(min-width: 768px)"],
	["lg", "(min-width: 1024px)"],
	["xl", "(min-width: 1280px)"],
];

export const Breakpoints = {
	sm: "(min-width: 640px)",
	md: "(min-width: 768px)",
	lg: "(min-width: 1024px)",
	xl: "(min-width: 1280px)",
} as const satisfies Record<typeof BREAKPOINT[number][0], typeof BREAKPOINT[number][1]>;

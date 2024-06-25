import type { MutableRefObject, ReactNode } from "react";
import { createContext, createRef, lazy } from "react";
import type { Rect } from "./helper";
import { initialRect } from "./helper";

const DropdownCloser = lazy(() => import("./DropdownCloser").then(mod => ({ default: mod.DropdownCloser })));
const DropdownContent = lazy(() => import("./DropdownContent").then(mod => ({ default: mod.DropdownContent })));
const DropdownRoot = lazy(() => import("./DropdownRoot").then(mod => ({ default: mod.DropdownRoot })));
const DropdownScrollArea = lazy(() => import("./DropdownScrollArea").then(mod => ({ default: mod.DropdownScrollArea })));
const DropdownTrigger = lazy(() => import("./DropdownTrigger").then(mod => ({ default: mod.DropdownTrigger })));

interface DropdownContextType {
	active: boolean;
	triggerRect: Rect;
	triggerElementRef: MutableRefObject<HTMLDivElement | null>;
	rootTriggerRef: MutableRefObject<HTMLDivElement | null> | null;
	onClickTrigger: (rect: Rect) => void;
	onClickCloser: () => void;
	DropdownContentRoot: ({ children }: { children: ReactNode }) => ReactNode;
	contentId: string;
}

export const DropdownContext = createContext<DropdownContextType>({
	active: false,
	triggerRect: initialRect,
	triggerElementRef: createRef(),
	rootTriggerRef: null,
	onClickTrigger: () => {
		/* noop */
	},
	onClickCloser: () => {
		/* noop */
	},
	DropdownContentRoot: () => null,
	contentId: "",
});

interface DropdownBase {
	Trigger: typeof DropdownTrigger;
	Content: typeof DropdownContent;
	Closer: typeof DropdownCloser;
	Root: typeof DropdownRoot;
	ScrollArea: typeof DropdownScrollArea;
};

export const Dropdown = new Proxy<DropdownBase>({} as DropdownBase, {
	get: (_target, prop, _receiver) => {
		if (prop === "Trigger")
			return DropdownTrigger;
		else if (prop === "Content")
			return DropdownContent;
		else if (prop === "Closer")
			return DropdownCloser;
		else if (prop === "Root")
			return DropdownRoot;
		else if (prop === "ScrollArea")
			return DropdownScrollArea;
		else
			throw new Error(`Unknown property: ${String(prop)}`);
	},
});

import type { MutableRefObject, ReactNode } from "react";
import { createContext, createRef } from "react";
import type { Rect } from "./helper";
import { initialRect } from "./helper";

interface DropdownContentInnerContextType {
	maxHeight: string;
}

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

export const DropdownContentContext = createContext<{
	onClickCloser: () => void;
	controllable: boolean;
	scrollable: boolean;
}>({
			onClickCloser: () => {
				/* noop */
			},
			controllable: false,
			scrollable: true,
		});

export const DropdownContentInnerContext = createContext<DropdownContentInnerContextType>({
	maxHeight: "",
});

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

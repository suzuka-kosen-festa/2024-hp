import type { MutableRefObject, ReactNode } from "react";
import { createContext, createRef } from "react";
import type { Rect } from "./helper";
import { initialRect } from "./helper";

interface DropdownContentInnerContextType {
	maxHeight: string;
}

export interface DropdownContextType {
	active: boolean;
	contentId: string;
	DropdownContentRoot: ({ children }: { children: ReactNode }) => ReactNode;
	onClickCloser: () => void;
	onClickTrigger: (rect: Rect) => void;
	rootTriggerRef: MutableRefObject<HTMLDivElement | null> | null;
	triggerElementRef: MutableRefObject<HTMLDivElement | null>;
	triggerRect: Rect;
}

export const DropdownContentContext = createContext<{
	controllable: boolean;
	onClickCloser: () => void;
	scrollable: boolean;
}>({
			controllable: false,
			onClickCloser: () => {
				/* noop */
			},
			scrollable: true,
		});

export const DropdownContentInnerContext = createContext<DropdownContentInnerContextType>({
	maxHeight: "",
});

export const DropdownContext = createContext<DropdownContextType>({
	active: false,
	contentId: "",
	DropdownContentRoot: () => null,
	onClickCloser: () => {
		/* noop */
	},
	onClickTrigger: () => {
		/* noop */
	},
	rootTriggerRef: null,
	// eslint-disable-next-line react/no-create-ref
	triggerElementRef: createRef(),
	triggerRect: initialRect,
});

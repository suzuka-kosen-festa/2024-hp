import type { RefObject } from "react";
import { Children, isValidElement } from "react";

const candidateSelectors = [
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"a[href]",
	"button:not([disabled])",
	"[tabindex]",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]:not([contenteditable=\"false\"])",
	"details>summary",
];

const candidateSelector = candidateSelectors.join(",");

const defaultOption: Option = {
	shouldIgnoreVisibility: false,
};

export const initialRect: Rect = { bottom: 0, left: 0, right: 0, top: 0 };

interface Option {
	shouldIgnoreVisibility: boolean;
}

interface Size {
	height: number;
	width: number;
}

export interface Rect {
	bottom: number;
	left: number;
	right: number;
	top: number;
}

export interface ContentBoxStyle {
	maxHeight: string;
	top: string;
	left?: string;
	right?: string;
}

export function isEventFromChild(e: Event, parent: Element | null): boolean {
	const path = e.composedPath();
	if (path.length === 0 || !parent)
		return false;
	return path.includes(parent);
}

function isHidden(node: Element) {
	if (getComputedStyle(node).visibility === "hidden")
		return true;
	if (isDisplayNone(node))
		return true;

	return false;
}

function isDisplayNone(node: Element | null): boolean {
	if (!node)
		return false;

	if (getComputedStyle(node).display === "none")
		return true;
	return isDisplayNone(node.parentElement);
}

export function tabbable(el: HTMLElement, option?: Partial<Option>) {
	const mergedOption = {
		...defaultOption,
		...option,
	};
	const candidates = [
		...el.querySelectorAll<HTMLElement>(candidateSelector),
	].filter(element => element.tabIndex >= 0);
	if (mergedOption.shouldIgnoreVisibility)
		return candidates;

	return candidates.filter(candidate => !isHidden(candidate));
}

export function getFirstTabbable(ref: RefObject<HTMLElement>) {
	if (ref.current) {
		const tabbables = tabbable(ref.current);
		const firstTabbable = tabbables[0];
		return firstTabbable;
	}
	return null;
}

export function includeDisabledTrigger(trigger: React.ReactNode) {
	// eslint-disable-next-line react/no-children-map
	return Children.map(trigger, t => isValidElement(t) && t.props.disabled)?.some(
		(bool: boolean) => bool,
	);
}

export function getContentBoxStyle(
	triggerRect: Rect,
	contentSize: Size,
	windowSize: Size,
	scroll: {
		left: number;
		top: number;
	},
) {
	const contentBox: ContentBoxStyle = {
		maxHeight: "",
		top: "auto",
	};

	if (triggerRect.bottom + contentSize.height <= windowSize.height) {
		// ドロップダウンのサイズがトリガの下側の領域に収まる場合
		contentBox.top = `${scroll.top + triggerRect.bottom - 5}px`;
	}
	else if (triggerRect.top - contentSize.height >= 0) {
		// ドロップダウンのサイズがトリガの上川の領域に収まる場合
		contentBox.top = `${
			scroll.top + triggerRect.top - contentSize.height + 5
		}px`;
	}
	else {
		const padding = 10;
		const triggerHeight = triggerRect.bottom - triggerRect.top;

		if (triggerRect.top + triggerHeight / 2 < windowSize.height / 2) {
			// 下側の領域のほうが広い場合
			contentBox.top = `${scroll.top + triggerRect.bottom - 5}px`;
			contentBox.maxHeight = `${
				windowSize.height - triggerRect.bottom - padding
			}px`;
		}
		else {
			// 上側の領域のほうが広い場合
			contentBox.top = `${scroll.top + padding + 5}px`;
			contentBox.maxHeight = `${triggerRect.top - padding}px`;
		}
	}

	const triggerAlignCenter
		= triggerRect.left + (triggerRect.right - triggerRect.left) / 2;

	if (triggerAlignCenter <= windowSize.width / 2) {
		// トリガが画面左寄りの場合
		contentBox.left = `${scroll.left + triggerRect.left - 5}px`;
	}
	else {
		// トリガが画面右寄りの場合
		contentBox.right = `${
			windowSize.width - triggerRect.right - scroll.left - 5
		}px`;
	}

	return contentBox;
}

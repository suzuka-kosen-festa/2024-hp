import type {
	ComponentProps,
	PropsWithChildren,
	ReactNode,
} from "react";
import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { DropdownCloser } from "./DropdownCloser";
import type { ContentBoxStyle, Rect } from "./helper";
import { getContentBoxStyle } from "./helper";
import { useKeyboardNavigation } from "./useKeyboardNavigation";
import * as styles from "./styles.css";

type Props = PropsWithChildren<{
	triggerRect: Rect;
	scrollable: boolean;
	controllable: boolean;
}>;

export type ElementProps = Omit<ComponentProps<"div">, keyof Props>;

interface DropdownContentInnerContextType {
	maxHeight: string;
}

export const DropdownContentInnerContext
	= createContext<DropdownContentInnerContextType>({
		maxHeight: "",
	});

export function DropdownContentInner({
	triggerRect,
	scrollable,
	children,
	className,
	controllable,
	...props
}: Props & ElementProps): ReactNode {
	const [isActive, setIsActive] = useState(false);
	const [contentBox, setContentBox] = useState<ContentBoxStyle>({
		top: "auto",
		maxHeight: "",
	});
	const wrapperRef = useRef<HTMLDivElement>(null);
	const focusTargetRef = useRef<HTMLDivElement>(null);

	const wrapperStyleProps = useMemo(() => {
		const leftMargin
			= contentBox.left === undefined
				? "0.5rem"
				: `max(${contentBox.left}, 0px)`;
		const rightMargin
			= contentBox.right === undefined
				? "0.5rem"
				: `max(${contentBox.right}, 0px)`;
		const maxWidthStyle = `calc(100% - ${leftMargin} - ${rightMargin})`;

		return {
			className: clsx(styles.contentInnerWrapper, className),
			style: assignInlineVars({
				[styles.contentInnerVisibility]: isActive ? "visible" : "hidden",
				[styles.contentInnerInsetBlockStart]: contentBox.top,
				[styles.contentInnerInsetInlineStart]: contentBox.left || undefined,
				[styles.contentInnerInsetInlineEnd]: contentBox.right || undefined,
				[styles.contentInnerMaxWidth]: maxWidthStyle,
			}),
		};
	}, [
		className,
		contentBox.left,
		contentBox.right,
		contentBox.top,
		isActive,
	]);
	const controllableWrapperStyleProps = useMemo(
		() => ({
			className: styles.controllableWrapper,
			style: assignInlineVars({
				[styles.controllableMaxHeight]: contentBox.maxHeight && scrollable ? contentBox.maxHeight : "initial",
			}),
		}),
		[contentBox.maxHeight, scrollable],
	);

	useEffect(() => {
		if (wrapperRef.current) {
			setContentBox(
				getContentBoxStyle(
					triggerRect,
					{
						width: wrapperRef.current.offsetWidth,
						height: wrapperRef.current.offsetHeight,
					},
					{
						width: document.body.clientWidth,
						height: innerHeight,
					},
					{
						top: scrollY,
						left: scrollX,
					},
				),
			);
			setIsActive(true);
		}
	}, [triggerRect]);

	useEffect(() => {
		if (isActive)
			focusTargetRef.current?.focus();
	}, [isActive]);

	useKeyboardNavigation(wrapperRef, focusTargetRef);

	return (
		<div {...props} {...wrapperStyleProps} ref={wrapperRef}>
			{/* dummy element for focus management. */}
			<div tabIndex={-1} ref={focusTargetRef} />
			{controllable
				? (
					<div {...controllableWrapperStyleProps}>{children}</div>
					)
				: (
					<DropdownContentInnerContext.Provider
						value={{ maxHeight: contentBox.maxHeight }}
					>
						<DropdownCloser>{children}</DropdownCloser>
					</DropdownContentInnerContext.Provider>
					)}
		</div>
	);
}

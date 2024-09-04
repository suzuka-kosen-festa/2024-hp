import type {
	ComponentProps,
	PropsWithChildren,
	ReactNode,
} from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { DropdownCloser } from "./DropdownCloser";
import type { ContentBoxStyle, Rect } from "./helper";
import { getContentBoxStyle } from "./helper";
import { useKeyboardNavigation } from "./useKeyboardNavigation";
import * as styles from "./styles.css";
import { DropdownContentInnerContext } from "./contexts";

type Props = PropsWithChildren<{
	controllable: boolean;
	scrollable: boolean;
	triggerRect: Rect;
}>;

export type ElementProps = Omit<ComponentProps<"div">, keyof Props>;

export function DropdownContentInner({
	children,
	className,
	controllable,
	scrollable,
	triggerRect,
	...props
}: ElementProps & Props): ReactNode {
	const [isActive, setIsActive] = useState(false);
	const [contentBox, setContentBox] = useState<ContentBoxStyle>({
		maxHeight: "",
		top: "auto",
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
				[styles.contentInnerInsetBlockStart]: contentBox.top,
				[styles.contentInnerInsetInlineEnd]: contentBox.right || undefined,
				[styles.contentInnerInsetInlineStart]: contentBox.left || undefined,
				[styles.contentInnerMaxWidth]: maxWidthStyle,
				[styles.contentInnerVisibility]: isActive ? "visible" : "hidden",
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
						height: wrapperRef.current.offsetHeight,
						width: wrapperRef.current.offsetWidth,
					},
					{
						height: innerHeight,
						width: document.body.clientWidth,
					},
					{
						left: scrollX,
						top: scrollY,
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
			<div ref={focusTargetRef} tabIndex={-1} />
			{controllable
				? (
						<div {...controllableWrapperStyleProps}>{children}</div>
					)
				: (
						<DropdownContentInnerContext.Provider
							// eslint-disable-next-line react/no-unstable-context-value
							value={{ maxHeight: contentBox.maxHeight }}
						>
							<DropdownCloser>{children}</DropdownCloser>
						</DropdownContentInnerContext.Provider>
					)}
		</div>
	);
}

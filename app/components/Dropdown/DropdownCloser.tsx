import type {
	ComponentProps,
	PropsWithChildren,
	ReactNode,
} from "react";
import { useContext, useMemo } from "react";
import { clsx } from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./styles.css";
import { DropdownContentContext, DropdownContentInnerContext } from "./contexts";

type Props = PropsWithChildren<ComponentProps<"div">>;

export function DropdownCloser({
	children,
	className,
}: Props): ReactNode {
	const { onClickCloser, controllable, scrollable } = useContext(
		DropdownContentContext,
	);
	const { maxHeight } = useContext(DropdownContentInnerContext);

	const styleProps = useMemo(() => {
		const maxHeightStyle = !controllable && scrollable ? maxHeight : undefined;
		return {
			className: clsx(controllable && styles.closer, className),
			style: assignInlineVars({
				[styles.closerMaxHeight]: maxHeightStyle,
			}),
		};
	}, [className, controllable, maxHeight, scrollable]);

	return (
		<div {...styleProps} onClick={onClickCloser}>
			{children}
		</div>
	);
}

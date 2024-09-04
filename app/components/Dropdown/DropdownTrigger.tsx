import { clsx } from "clsx";
import type {
	ComponentProps,
	MouseEvent,
	PropsWithChildren,
	ReactElement,
	ReactNode,
} from "react";
import {
	Children,
	cloneElement,
	isValidElement,
	useContext,
	useEffect,
} from "react";
import * as styles from "./styles.css";
import { includeDisabledTrigger, tabbable } from "./helper";
import { DropdownContext } from "./contexts";

type Props = PropsWithChildren<ComponentProps<"div">>;

export function DropdownTrigger({
	children,
	className,
}: Props): ReactNode {
	const { active, contentId, onClickTrigger, triggerElementRef }
		= useContext(DropdownContext);

	useEffect(() => {
		if (!triggerElementRef.current)
			return;

		const triggers = tabbable(triggerElementRef.current, {
			shouldIgnoreVisibility: true,
		});
		for (const trigger of triggers) {
			trigger.setAttribute("aria-expanded", String(active));
			trigger.setAttribute("aria-controls", contentId);
		}
	}, [triggerElementRef, active, contentId]);

	let foundFirstElement = false;

	return (
		<div
			className={clsx(styles.triggerContainer, className)}
			ref={triggerElementRef}
		>
			{/* eslint-disable-next-line react/no-children-map */}
			{Children.map(children, (child) => {
				if (foundFirstElement || !isValidElement(child))
					return child;

				foundFirstElement = true;

				// eslint-disable-next-line react/no-clone-element
				return cloneElement(child as ReactElement, {
					onClick: (e: MouseEvent) => {
						// 引き金となる要素が disabled な場合は発火させない
						if (includeDisabledTrigger(children))
							return;

						const { bottom, left, right, top }
							= e.currentTarget.getBoundingClientRect();
						onClickTrigger({ bottom, left, right, top });

						if (child.props.onClick)
							child.props.onClick(e);
					},
				});
			})}
		</div>
	);
}

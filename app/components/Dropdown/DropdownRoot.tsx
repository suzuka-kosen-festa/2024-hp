import type { FC, ReactNode } from "react";
import { useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import type { Rect } from "./helper";
import { getFirstTabbable, initialRect, isEventFromChild } from "./helper";
import { usePortal } from "./usePortal";
import { DropdownContext } from "./contexts";

export function DropdownRoot({ children }: { children: ReactNode }): ReactNode {
	const [active, setActive] = useState(false);
	const [triggerRect, setTriggerRect] = useState<Rect>(initialRect);

	const { rootTriggerRef } = useContext(DropdownContext);
	const { createPortal, portalRoot, isChildPortal, PortalParentProvider }
		= usePortal();

	const triggerElementRef = useRef<HTMLDivElement>(null);
	const contentId = useId();

	if (portalRoot)
		portalRoot.setAttribute("id", contentId);

	useEffect(() => {
		const onClickBody = (e: any) => {
			// ignore events from events within DropdownTrigger and DropdownContent
			if (
				isEventFromChild(e, triggerElementRef.current)
				|| isChildPortal(e.target)
			)
				return;

			setActive(false);
		};
		document.body.addEventListener("click", onClickBody, false);

		return () => {
			document.body.removeEventListener("click", onClickBody, false);
		};
	}, [isChildPortal, portalRoot]);

	// DOMツリーの外側にあるドロップダウンコンテンツのルートコンテナ
	const DropdownContentRoot = useMemo<FC<{ children: ReactNode }>>(
		() => (props) => {
			if (!active)
				return null;
			return createPortal(props.children);
		},
		[active, createPortal],
	);
	DropdownContentRoot.displayName = "DropdownContentRoot";

	return (
		<PortalParentProvider>
			<DropdownContext.Provider
				value={{
					active,
					triggerRect,
					triggerElementRef,
					rootTriggerRef: (rootTriggerRef ?? triggerElementRef) || null,
					onClickTrigger: (rect) => {
						const newActive = !active;
						setActive(newActive);
						if (newActive)
							setTriggerRect(rect);
					},
					onClickCloser: () => {
						setActive(false);
						const trigger = getFirstTabbable(triggerElementRef);
						if (trigger)
							trigger.focus();
					},
					DropdownContentRoot,
					contentId,
				}}
			>
				{children}
			</DropdownContext.Provider>
		</PortalParentProvider>
	);
}

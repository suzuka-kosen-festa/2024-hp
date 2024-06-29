import type { FC, ReactNode } from "react";
import { createContext, useCallback, useContext, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { useEnhancedEffect } from "@/hooks/useEnhancedEffect";

interface ParentContextValue {
	seqs: number[];
}

// eslint-disable-next-line react-refresh/only-export-components
const ParentContext = createContext<ParentContextValue>({
	seqs: [],
});

let portalSeq = 0;

export function usePortal() {
	const portalRoot = useRef<HTMLDivElement | null>(
		typeof document === "undefined" ? null : document.createElement("div"),
	).current;
	const currentSeq = useMemo(() => ++portalSeq, []);
	const parent = useContext(ParentContext);
	const parentSeqs = [...parent.seqs, currentSeq];

	useEnhancedEffect(() => {
		if (!portalRoot)
			return;

		portalRoot.dataset.portalChildOf = parentSeqs.join(",");
		document.body.appendChild(portalRoot);
		return () => {
			document.body.removeChild(portalRoot);
		};
	}, [...parentSeqs]);

	const isChildPortal = useCallback(
		(element: HTMLElement | null) => _isChildPortal(element, currentSeq),
		[currentSeq],
	);

	const PortalParentProvider: FC<{ children: ReactNode }> = useCallback(
		({ children }) => {
			const value: ParentContextValue = {
				seqs: parentSeqs,
			};
			return (
				<ParentContext.Provider value={value}>
					{children}
				</ParentContext.Provider>
			);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[...parentSeqs],
	);

	const wrappedCreatePortal = useCallback(
		(children: ReactNode) => {
			if (portalRoot === null)
				return null;

			return createPortal(children, portalRoot);
		},
		[portalRoot],
	);

	return {
		portalRoot,
		isChildPortal,
		PortalParentProvider,
		createPortal: wrappedCreatePortal,
	};
}

function _isChildPortal(
	element: HTMLElement | SVGElement | null,
	parentPortalSeq: number,
): boolean {
	if (!element)
		return false;
	const childOf = element.dataset.portalChildOf ?? "";
	const includesSeq = childOf.split(",").includes(String(parentPortalSeq));
	return includesSeq || _isChildPortal(element.parentElement, parentPortalSeq);
}

import type { RefObject } from "react";
import { useCallback, useContext, useEffect } from "react";
import { getFirstTabbable, tabbable } from "./helper";
import { DropdownContext } from "./contexts";

export function useKeyboardNavigation(
	wrapperRef: RefObject<HTMLDivElement>,
	dummyFocusRef: RefObject<HTMLElement>,
) {
	const { onClickCloser, rootTriggerRef, triggerElementRef }
		= useContext(DropdownContext);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Tab") {
				if (
					!wrapperRef.current
					|| !triggerElementRef.current
					|| !rootTriggerRef?.current
				) {
					return;
				}

				const tabbablesInContent = tabbable(wrapperRef.current);
				if (tabbablesInContent.length === 0)
					return;

				const triggers = tabbable(triggerElementRef.current);
				const trigger = triggers[triggers.length - 1];
				const firstTabbable = tabbablesInContent[0];
				const lastTabbable = tabbablesInContent[tabbablesInContent.length - 1];

				if (e.target === trigger) {
					if (e.shiftKey) {
						// フォーカスをトリガーの前に移動
						return;
					}
					// ドロップダウンの中の最初のタブ可能な要素にフォーカスを移動
					e.preventDefault();
					firstTabbable?.focus();
				}
				else if (
					e.shiftKey
					&& (e.target === firstTabbable || e.target === dummyFocusRef.current)
				) {
					// トリガーをフォーカスする
					e.preventDefault();
					trigger?.focus();
				}
				else if (!e.shiftKey && e.target === lastTabbable) {
					// トリガーの次にフォーカスを移動
					const rootTriggers = tabbable(rootTriggerRef.current);
					const rootTrigger = rootTriggers[rootTriggers.length - 1];
					if (rootTrigger)
						rootTrigger.focus();
				}
			}
			else if (e.key === "Escape" || e.key === "Esc") {
				if (triggerElementRef.current) {
					const trigger = getFirstTabbable(triggerElementRef);
					if (trigger && e.target === trigger) {
						// トリガーがフォーカスされていてEscキーが押されたらドロップダウンを閉じる
						onClickCloser();
						return;
					}
				}

				if (e.target && e.target === dummyFocusRef.current) {
					onClickCloser();
					return;
				}

				if (wrapperRef.current) {
					const tabbablesInContent = tabbable(wrapperRef.current);
					tabbablesInContent.some((inner) => {
						if (inner === e.target) {
							// ドロップダウンの中に含まれる要素がフォーカスされていてEscキーが押されたらドロップダウンを閉じる
							onClickCloser();
							return true;
						}
						return false;
					});
				}
			}
		},
		[
			wrapperRef,
			triggerElementRef,
			rootTriggerRef,
			dummyFocusRef,
			onClickCloser,
		],
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);
}

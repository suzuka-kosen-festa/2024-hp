import type { PropsWithChildren, ReactNode } from "react";
import { useContext } from "react";
import type { ElementProps as InnerElementProps } from "./DropdownContentInner";
import { DropdownContentInner } from "./DropdownContentInner";
import { DropdownContentContext, DropdownContext } from "./contexts";

type Props = PropsWithChildren<{
	/**
	 * `true` のとき、ドロップダウン内のコンテンツをクリックしてもドロップダウンが閉じなくなる。。
	 *  この場合は、 `DropdownCloser` を用いてドロップダウンを閉じることができる。
	 *
	 * @defaultValue `false`
	 */
	controllable?: boolean;
	/**
	 * `true` のとき、ウィンドウサイズに応じてドロップダウン内が自動的にスクロール可能になる
	 *
	 * @defaultValue `true`
	 */
	scrollable?: boolean;
}>;

type ElementProps = Omit<InnerElementProps, keyof Props>;

export function DropdownContent({
	controllable = false,
	scrollable = true,
	...props
}: Props & ElementProps): ReactNode {
	const { DropdownContentRoot, triggerRect, onClickCloser }
		= useContext(DropdownContext);

	return (
		<DropdownContentRoot>
			<DropdownContentContext.Provider
				value={{ onClickCloser, controllable, scrollable }}
			>
				<DropdownContentInner
					{...props}
					triggerRect={triggerRect}
					scrollable={scrollable}
					controllable={controllable}
				/>
			</DropdownContentContext.Provider>
		</DropdownContentRoot>
	);
}

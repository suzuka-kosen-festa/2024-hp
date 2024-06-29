import { clsx } from "clsx";
import type { ComponentProps, PropsWithChildren, ReactNode } from "react";
import * as styles from "./styles.css";

type Props = PropsWithChildren<ComponentProps<"div">>;

export function DropdownScrollArea({
	className,
	...props
}: Props): ReactNode {
	return (
		<div
			{...props}
			className={clsx(styles.scrollAreaContainer, className)}
		/>
	);
}

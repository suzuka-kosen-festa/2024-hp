import type { ReactNode } from "react";
import { clsx } from "clsx";
import * as styles from "./styles.css";

interface Props {
	children: ReactNode;
	className?: string;
}

export function HeroContentBox({ children, className }: Props): ReactNode {
	return (
		<div className={clsx(styles.box, className)}>
			{children}
		</div>
	);
}

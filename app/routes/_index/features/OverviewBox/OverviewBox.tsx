import type { ReactNode } from "react";
import { clsx } from "clsx";
import * as styles from "./styles.css";

interface Props {
	children: ReactNode;
	className?: string;
	title?: string;
}

export function OverviewBox({ children, className, title }: Props): ReactNode {
	return (
		<div className={clsx(styles.box, className)}>
			{title && <h2 className={styles.title}>{title}</h2>}
			{children}
		</div>
	);
}

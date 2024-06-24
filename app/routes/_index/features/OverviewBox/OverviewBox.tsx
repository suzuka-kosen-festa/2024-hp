import type { ReactNode } from "react";
import { clsx } from "clsx";
import * as styles from "./styles.css";

interface Props {
	title?: string;
	children: ReactNode;
	className?: string;
}

export function OverviewBox({ title, children, className }: Props): ReactNode {
	return (
		<div className={clsx(styles.box, className)}>
			{title && <h2 className={styles.title}>{title}</h2>}
			{children}
		</div>
	);
}

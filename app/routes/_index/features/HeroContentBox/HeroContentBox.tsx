import type { ReactNode } from "react";
import * as styles from "./styles.css";

interface Props {
	children: ReactNode;
}

export function HeroContentBox({ children }: Props): ReactNode {
	return (
		<div className={styles.box}>
			{children}
		</div>
	);
}

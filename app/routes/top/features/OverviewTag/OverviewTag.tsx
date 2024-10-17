import type { ReactNode } from "react";
import * as styles from "./styles.css";

interface Props {
	children: string;
}

export function OverviewTag({ children }: Props): ReactNode {
	return <h2 className={styles.tag}>{children}</h2>;
}

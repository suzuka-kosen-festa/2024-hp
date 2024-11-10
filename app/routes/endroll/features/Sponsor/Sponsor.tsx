import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Sponsor(): ReactNode {
	return (
		<div className={styles.box}>
			<p className={styles.title}>
				協賛してくださった皆様
			</p>
		</div>
	);
}

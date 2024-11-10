import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function ThankYou(): ReactNode {
	return (
		<div className={styles.box}>
			<p className={styles.title}>
				Thank you for coming
			</p>
		</div>
	);
}

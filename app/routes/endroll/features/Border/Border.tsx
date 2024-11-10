import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Border(): ReactNode {
	return (
		<div className={styles.box}>
			<div className={styles.headingWrapper}>
				<h2 className={styles.border}>BORDER</h2>
				<span className={styles.vertical} role="presentation" />
			</div>
		</div>
	);
}

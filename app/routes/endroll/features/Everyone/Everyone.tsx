import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Everyone(): ReactNode {
	return (
		<div className={styles.box}>
			<p className={styles.title}>
				そして、
				<wbr />
				来場してくださった
				<wbr />
				あなた
			</p>
		</div>
	);
}

import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Title(): ReactNode {
	return (
		<div className={styles.box}>
			<h1 className={styles.title}>
				第59回鈴鹿高専祭
				<wbr />
				実行委員会
			</h1>
		</div>
	);
}

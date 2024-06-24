import type { ReactNode } from "react";
import * as styles from "./style.css";

export function Footer(): ReactNode {
	return (
		<footer className={styles.footer}>
			<h1>鈴鹿工業高等専門学校 高専祭実行委員</h1>
		</footer>
	);
}

import type { ReactNode } from "react";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

export function PhilosophySection(): ReactNode {
	return (
		<section className={styles.section} aria-label="philosophy section">
			<SectionTitle variant="red" icon="message" />
			<div className={styles.box}>
				<span
					role="presentation"
					className={styles.lattice}
				/>
				<span
					role="presentation"
					className={styles.vertical}
				/>
				<h2 className={styles.border}>BORDER</h2>
				<p className={styles.text}>
					今年の高専祭のテーマは
					<wbr />
					「BORDER」です。
					<br />
					現実と非日常の境界となるような
					<wbr />
					高専祭をお届けします。
				</p>
			</div>
		</section>
	);
}

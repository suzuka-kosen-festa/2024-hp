import type { ReactNode } from "react";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

export function PhilosophySection(): ReactNode {
	return (
		<section className={styles.section} aria-label="philosophy section" id="philosophy">
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
					高専祭に関わるすべての人が
					<wbr />
					”境界”を越えて協力し、
					<br />
					高専祭を日常と非日常の“境界”にする。
					<wbr />
					という想いが込められています。
				</p>
			</div>
		</section>
	);
}

import type { ReactNode } from "react";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

export function PhilosophySection(): ReactNode {
	return (
		<section
			aria-label="philosophy section"
			className={styles.section}
			id="philosophy"
		>
			<SectionTitle icon="message" variant="red" />
			<div className={styles.box}>
				<div className={styles.background}>
					<span className={styles.lattice} role="presentation" />
				</div>
				<div className={styles.content}>
					<div className={styles.headingWrapper}>
						<h2 className={styles.border}>BORDER</h2>
						<span className={styles.vertical} role="presentation" />
					</div>
					<div className={styles.textContent}>
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
				</div>
			</div>
		</section>
	);
}

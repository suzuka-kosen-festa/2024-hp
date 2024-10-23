import type { ReactNode } from "react";
import { PrologueSection } from "../PrologueSection";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

export function PhilosophySection(): ReactNode {
	const { displayText, sectionRef } = PrologueSection();
	return (
		<section aria-label="philosophy section" className={styles.section} id="philosophy">
			<SectionTitle icon="message" variant="red" />
			<div className={styles.box}>
				<span
					className={styles.lattice}
					role="presentation"
				/>
				<span
					className={styles.vertical}
					role="presentation"
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
				<div className={styles.typingText} ref={sectionRef}>
					{displayText}
				</div>
			</div>
		</section>
	);
}

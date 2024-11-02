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

						<p className={styles.prologueText}>
							ここは、鈴鹿工業高等専門学校
							<wbr />
							この学校の校門は、
							<br />
							年に2日間だけ「異世界へ繋がる門」に姿を変えるという。
							<br />
							その先に広がっているのは未知の国、ボーダー王国。
							<br />
							"日常"を飛び出して、
							<wbr />
							心躍る冒険が待つ"非日常"の世界へ。
							<br />
							さあ、門をくぐって、君だけの物語を始めよう！
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

import type { ReactNode } from "react";
import { OverviewBox } from "../OverviewBox";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

export function OverviewSection(): ReactNode {
	return (
		<section aria-label="overview section" className={styles.section} id="overview">
			<SectionTitle icon="info" variant="blue" />
			<div className={styles.box}>
				<OverviewBox className={styles.date} title="開催日時">
					<p>
						2024年
						<wbr />
						11月2日(土)
					</p>
					<p>
						2024年
						<wbr />
						11月3日(日)
					</p>
				</OverviewBox>
				<OverviewBox className={styles.place} title="開催場所">
					<p className={styles.placeContent}>鈴鹿工業高等専門学校</p>
					<a
						className={styles.placeLink}
						href="https://maps.app.goo.gl/VDg3tuqMG3iYxfhx9"
						rel="noreferrer"
						target="_brank"
					>
						Google Mapで確認する
					</a>
				</OverviewBox>
				<OverviewBox className={styles.comingsoon}>
					<p>Coming soon...</p>
				</OverviewBox>
			</div>
		</section>
	);
}

import type { ReactNode } from "react";
import { OverviewBox } from "../OverviewBox";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

export function OverviewSection(): ReactNode {
	return (
		<section className={styles.section} aria-label="overview section" id="overview">
			<SectionTitle variant="blue" icon="info" />
			<div className={styles.box}>
				<OverviewBox title="開催日時" className={styles.date}>
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
				<OverviewBox title="開催場所" className={styles.place}>
					<p className={styles.placeContent}>鈴鹿工業高等専門学校</p>
					<a
						href="https://maps.app.goo.gl/VDg3tuqMG3iYxfhx9"
						target="_brank"
						rel="noreferrer"
						className={styles.placeLink}
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

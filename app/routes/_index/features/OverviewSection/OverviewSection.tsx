import type { ReactNode } from "react";
import { OverviewTag } from "../OverviewTag";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

export function OverviewSection(): ReactNode {
	return (
		<section aria-label="overview section" className={styles.section} id="overview">
			<SectionTitle icon="info" variant="blue" />
			<div className={styles.box}>
				<section>
					<OverviewTag>開催日時</OverviewTag>
					<p className={styles.text}>2024年11月2日(土)~11月3日(日)</p>
				</section>
				<section className={styles.place}>
					<OverviewTag>開催場所</OverviewTag>
					<p className={styles.text}>鈴鹿工業高等専門学校</p>
					<a
						className={styles.googleMap}
						href="https://maps.app.goo.gl/VDg3tuqMG3iYxfhx9"
						rel="noreferrer"
						target="_brank"
					>
						Google Map
					</a>
				</section>
			</div>
		</section>
	);
}

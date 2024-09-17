import type { ReactNode } from "react";
import { OverviewTag } from "../OverviewTag";
import { EventCard } from "../EventCard";
import { DetailCard } from "../DetailCard";
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
				<section>
					<OverviewTag>開催場所</OverviewTag>
					<p className={styles.text}>鈴鹿工業高等専門学校</p>
					<span className={styles.span}>
						<a
							className={styles.googleMap}
							href="https://maps.app.goo.gl/VDg3tuqMG3iYxfhx9"
							rel="noreferrer"
							target="_brank"
						>
							Google Map
						</a>
					</span>
				</section>
			</div>
			<section className={styles.eventSection}>
				<h2 className={styles.eventTitle}>当日開催されるイベントについて</h2>
				<section className={styles.eventLinks}>
					<EventCard hash="stage" title="ステージイベント">屋外のメインステージで開催されるイベントについて</EventCard>
					<EventCard hash="live" title="ライブステージ">第一体育館内で行われるライブの出演者情報など</EventCard>
					<EventCard hash="game" title="ゲームイベント">第二合併講義室で行われるゲームイベントについて</EventCard>
				</section>
				<h2 className={styles.eventTitle}>中学生の皆様へ</h2>
				<section>
					<DetailCard title="進路説明会について" url="https://www.suzuka-ct.ac.jp/admission/admission_index/explanation/">来訪される中学生の方々で、進路説明会に出席をご希望される方は詳細をご覧ください。</DetailCard>
				</section>
			</section>
		</section>
	);
}

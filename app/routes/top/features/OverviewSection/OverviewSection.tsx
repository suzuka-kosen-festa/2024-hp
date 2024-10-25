import type { ReactNode } from "react";
import type { TimeTable } from "content-collections";
import { OverviewTag } from "../OverviewTag";
import { EventCard } from "../EventCard";
import { DetailCard } from "../DetailCard";
import { TimeTableSection } from "../TimeTableSection";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

interface Props {
	day1: {
		game: TimeTable[];
		live: TimeTable[];
		main: TimeTable[];
		sub: TimeTable[];
	};
	day2: {
		game: TimeTable[];
		live: TimeTable[];
		main: TimeTable[];
		sub: TimeTable[];
	};
}

export function OverviewSection({ day1, day2 }: Props): ReactNode {
	return (
		<section aria-label="overview section" className={styles.section} id="overview">
			<SectionTitle icon="info" variant="blue" />
			<div className={styles.box}>
				<section>
					<OverviewTag color="blue">開催日時</OverviewTag>
					<p className={styles.text}>2024年11月2日(土)~11月3日(日)</p>
				</section>
				<section>
					<OverviewTag color="blue">開催場所</OverviewTag>
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
				<section>
					<OverviewTag color="purple">ご来場にあたっての注意事項</OverviewTag>
					<p className={styles.text}>駐車スペースに限りがございますので、公共交通機関でのご来場にご協力ください</p>
				</section>
			</div>
			<section className={styles.eventSection}>
				<h2 className={styles.eventTitle}>タイムテーブル</h2>
				<TimeTableSection day1={day1} day2={day2} />
				<h2 className={styles.eventTitle}>バザー・学科展示</h2>
				<section className={styles.eventLinks}>
					<EventCard hash="bazar" title="バザー">部活やクラスが行うバザー</EventCard>
					<EventCard hash="exhibition" title="学科展示">各学科の展示内容</EventCard>
				</section>
				<h2 className={styles.eventTitle}>当日のイベント</h2>
				<section className={styles.eventLinks}>
					<EventCard hash="stage" title="ステージイベント">屋外のメインステージで開催されるイベント</EventCard>
					<EventCard hash="live" title="ライブステージ">第一体育館内で行われるライブの出演者情報など</EventCard>
					<EventCard hash="game" title="ゲームイベント">第二合併講義室で行われるゲームイベントの情報</EventCard>
					<EventCard hash="ghostHouse" title="お化け屋敷">学生が作成したお化け屋敷の情報</EventCard>
				</section>
				<h2 className={styles.eventTitle}>中学生の皆様へ</h2>
				<section>
					<DetailCard text="本校HPはこちら" title="受験相談会in高専祭" url="https://www.suzuka-ct.ac.jp/admission/admission_index/explanation/">皆様の疑問に可能な限りでお答えいたします！</DetailCard>
				</section>
			</section>
		</section>
	);
}

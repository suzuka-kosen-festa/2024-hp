import type { ReactNode } from "react";
import type { GameEvent } from "content-collections";
import litdate from "lit-date";
import { Temporal } from "temporal-polyfill";
import { EventCardLayout } from "../EventCardLayout";
import * as styles from "./styles.css";
import Time from "~icons/ri/time-line";
import MapPin from "~icons/ri/map-pin-line";
import RightArrow from "~icons/ic/round-play-arrow";

type Props = {
	day: 1 | 2;
} & Omit<GameEvent, "_meta" | "content">;

export function GameEventCard({ date, day, form, guideBook, title, venue }: Props): ReactNode {
	return (
		<EventCardLayout kind="game">
			<div className={styles.box}>
				<p className={styles.day}>{`DAY${day}`}</p>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.metas}>
					<span className={styles.meta}>
						<Time className={styles.icon} />
						<time dateTime={date}>
							{litdate`${"YYYY"}年${"MM"}月${"DD"}日`(Temporal.ZonedDateTime.from(date).epochMilliseconds)}
						</time>
					</span>
					<span className={styles.meta}>
						<MapPin className={styles.icon} />
						<span>{venue}</span>
					</span>
				</div>
				<div className={styles.links}>
					<a
						className={styles.link}
						href={guideBook}
						rel="noreferrer"
						target="_blank"
					>
						<span className={styles.span}>
							ガイドブック
						</span>
						<RightArrow className={styles.arrow} />
					</a>
					<hr className={styles.hr} />
					<a
						className={styles.link}
						href={form}
						rel="noreferrer"
						target="_blank"
					>
						<span className={styles.span}>参加フォーム</span>
						<RightArrow className={styles.arrow} />
					</a>
				</div>
				<h4 className={styles.schedule}>タイムスケジュール</h4>
				<div className={styles.schedules}>
					<ScheduleRow date={date} time="9:30~10:20" value="受付開始" />
					<ScheduleRow date={date} time="10:30" value="試合開始" />
				</div>
			</div>
		</EventCardLayout>
	);
}

function ScheduleRow({ date, time, value }: { date: string; time: string; value: string }): ReactNode {
	return (
		<div className={styles.scheduleRow}>
			<time className={styles.scheduleTime} dateTime={Temporal.ZonedDateTime.from(date).toString()}>{time}</time>
			<p className={styles.scheduleValue}>{value}</p>
		</div>
	);
}

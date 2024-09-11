import type { ReactNode } from "react";
import type { StageEvent } from "content-collections";
import litdate from "lit-date";
import { Temporal } from "temporal-polyfill";
import { clsx } from "clsx";
import { EventCardLayout } from "../EventCardLayout";
import * as styles from "./styles.css";
import Time from "~icons/ri/time-line";
import MapPin from "~icons/ri/map-pin-line";

type Props = Omit<StageEvent, "_meta" | "content">;

export function StageEventCard({ endAt, overview, startAt, title }: Props): ReactNode {
	return (
		<EventCardLayout kind="stage">
			<div className={styles.box}>
				<h3 className={styles.title}>{title}</h3>
				<span className={clsx(styles.meta, styles.time)}>
					<Time className={styles.icon} />
					<time className={styles.text} dateTime={startAt}>
						{`${litdate`${"YYYY"}年${"MM"}月${"DD"}日 ${"HH"}:${"mm"} ~ `(Temporal.ZonedDateTime.from(startAt).epochMilliseconds)}${litdate`${"HH"}:${"mm"}`(Temporal.ZonedDateTime.from(endAt).epochMilliseconds)}`}
					</time>
				</span>
				<span className={clsx(styles.meta, styles.map)}>
					<MapPin className={styles.icon} />
					<span className={styles.text}>メインステージ</span>
				</span>
				<p className={styles.overview}>{overview}</p>
			</div>
		</EventCardLayout>
	);
}

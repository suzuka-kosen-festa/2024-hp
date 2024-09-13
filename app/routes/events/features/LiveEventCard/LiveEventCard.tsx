import type { LiveEvent } from "content-collections";
import type { ReactNode } from "react";
import litdate from "lit-date";
import { Temporal } from "temporal-polyfill";
import { EventCardLayout } from "../EventCardLayout";
import * as styles from "./styles.css";
import Time from "~icons/ri/time-line";
import MapPin from "~icons/ri/map-pin-line";

type Props = Omit<LiveEvent, "_meta" | "content">;

export function LiveEventCard({ endAt, name, overview, press, stage, startAt }: Props): ReactNode {
	return (
		<EventCardLayout kind="live">
			<div>
				<h3 className={styles.name}>{name}</h3>
				<div className={styles.metas}>
					<span className={styles.meta}>
						<Time className={styles.icon} />
						<time dateTime={startAt}>
							{`${litdate`${"YYYY"}年${"MM"}月${"DD"}日 ${"HH"}:${"mm"} ~ `(Temporal.ZonedDateTime.from(startAt).epochMilliseconds)}${litdate`${"HH"}:${"mm"}`(Temporal.ZonedDateTime.from(endAt).epochMilliseconds)}`}
						</time>
					</span>
					<span className={styles.meta}>
						<MapPin className={styles.icon} />
						<span>{stage === "main" ? "メインステージ" : "サブステージ"}</span>
					</span>
				</div>
				<div className={styles.overviewContainer}>
					<img alt={`${name}のアー写`} className={styles.press} height={180} src={press} width={320} />
					<p className={styles.overview}>{overview}</p>
				</div>
			</div>
		</EventCardLayout>
	);
}

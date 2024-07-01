import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Temporal } from "temporal-polyfill";
import { COUNTDOWN_END_AT, COUNTDOWN_INTERVAL } from "./constants";
import * as styles from "./styles.css";
import Close from "~icons/custom/close.svg";
import Heart from "~icons/custom/heart.svg";

interface Props {
	className?: string;
}

export function Countdown({ className }: Props): ReactNode {
	const [diff, setDiff] = useState(Temporal.Duration.from({ seconds: 0 }));

	useEffect(() => {
		const update = () => {
			const now = Temporal.Now.zonedDateTimeISO(Temporal.TimeZone.from("Asia/Tokyo"));
			if (Temporal.ZonedDateTime.compare(now, COUNTDOWN_END_AT) < 0)
				setDiff(now.until(COUNTDOWN_END_AT, { largestUnit: "day" }));
		};

		update();
		const id = setInterval(update, COUNTDOWN_INTERVAL);

		return () => clearInterval(id);
	}, [setDiff]);

	return (
		<section className={className}>
			<h2 className={styles.heading}>
				<span className={styles.heartBox}>
					<Heart className={styles.heart} aria-label="heart" />
					<span className={styles.days}>DAYS</span>
				</span>
				<Close className={styles.close} />
				<time className={styles.time} dateTime={diff.days.toString().padStart(3, "0")} data-test="time">{diff.days.toString().padStart(3, "0")}</time>
			</h2>
		</section>
	);
}

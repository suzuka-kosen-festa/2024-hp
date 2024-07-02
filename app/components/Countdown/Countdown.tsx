import type { ReactNode } from "react";
import { Suspense, useEffect, useState } from "react";
import { Temporal } from "temporal-polyfill";
import { COUNTDOWN_END_AT, COUNTDOWN_INTERVAL } from "./constants";
import * as styles from "./styles.css";
import Close from "~icons/custom/close.svg";
import Heart from "~icons/custom/heart.svg";

interface Props {
	isLanding?: boolean;
	className?: string;
}

function CountdownTime(): ReactNode {
	const initialDiff = () => {
		const now = Temporal.Now.zonedDateTimeISO(Temporal.TimeZone.from("Asia/Tokyo"));
		return Temporal.ZonedDateTime.compare(now, COUNTDOWN_END_AT) < 0
			? now.until(COUNTDOWN_END_AT, { largestUnit: "day" })
			: Temporal.Duration.from({ seconds: 0 });
	};

	const [diff, setDiff] = useState(initialDiff);

	useEffect(() => {
		const update = () => {
			const now = Temporal.Now.zonedDateTimeISO(Temporal.TimeZone.from("Asia/Tokyo"));
			if (Temporal.ZonedDateTime.compare(now, COUNTDOWN_END_AT) < 0)
				setDiff(now.until(COUNTDOWN_END_AT, { largestUnit: "day" }));
		};

		update();
		const id = setInterval(update, COUNTDOWN_INTERVAL);

		return () => clearInterval(id);
	}, []);

	return (
		<time className={styles.time} dateTime={diff.days.toString().padStart(3, "0")} data-test="time">{diff.days.toString().padStart(3, "0")}</time>
	);
}

export function Countdown({ isLanding = false, className }: Props): ReactNode {
	return (
		<section className={className}>
			{isLanding
				? (
					<h1 className={styles.heading}>
						<span className={styles.heartBox}>
							<Heart className={styles.heart} aria-label="heart" />
							<span className={styles.days}>DAYS</span>
						</span>
						<Close className={styles.close} />
						<Suspense fallback={<time>000</time>}>
							<CountdownTime />
						</Suspense>
					</h1>
					)
				: (
					<h2 className={styles.heading}>
						<span className={styles.heartBox}>
							<Heart className={styles.heart} aria-label="heart" />
							<span className={styles.days}>DAYS</span>
						</span>
						<Close className={styles.close} />
						<Suspense fallback={<time>000</time>}>
							<CountdownTime />
						</Suspense>
					</h2>
					)}
		</section>
	);
}

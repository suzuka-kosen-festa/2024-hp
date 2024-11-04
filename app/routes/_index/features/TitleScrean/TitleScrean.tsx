import type { ReactNode } from "react";
import { Suspense, lazy, useEffect, useState } from "react";
import { Temporal } from "temporal-polyfill";
import * as styles from "./styles.css";
import { COUNTDOWN_END_AT, COUNTDOWN_INTERVAL, Countdown } from "@/components/Countdown";

const PixelarticonsChevronRight = lazy(() => import("~icons/pixelarticons/chevron-right"));

export function TitleScrean(): ReactNode {
	return (
		<div className={styles.box}>
			<h2 className={styles.border}>BORDER</h2>
			<Suspense fallback={null}>
				<TitleImpl />
			</Suspense>
		</div>
	);
}

function TitleImpl(): ReactNode {
	const [isOnTheDay, setisOnTheDay] = useState(false);
	useEffect(() => {
		const update = () => {
			const now = Temporal.Now.zonedDateTimeISO(Temporal.TimeZone.from("Asia/Tokyo"));
			if (Temporal.ZonedDateTime.compare(now, COUNTDOWN_END_AT) >= 0) {
				setisOnTheDay(true);
			}
		};

		update();
		const id = setInterval(update, COUNTDOWN_INTERVAL);

		return () => clearInterval(id);
	}, []);

	return isOnTheDay
		? (
				<div className={styles.menu}>
					<p className={styles.menuText}>Continue ?</p>
					<div className={styles.menuItems}>
						<span className={styles.menuItem}>
							<PixelarticonsChevronRight className={styles.arrow} />
							<span className={styles.menuText}>Yes</span>
						</span>
						<span className={styles.menuItem}>
							<PixelarticonsChevronRight className={styles.arrow} />
							<span className={styles.menuText}>No</span>
						</span>
					</div>
				</div>
			)
		: (
				<>
					<Countdown isLanding className={styles.countdown} />
					<p className={styles.text}>-TAP TO START-</p>
				</>
			);
}

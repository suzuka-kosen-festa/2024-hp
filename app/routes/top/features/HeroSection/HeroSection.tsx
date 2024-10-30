import type { ReactNode } from "react";
import { Temporal } from "temporal-polyfill";
import { Suspense, lazy, useEffect, useState } from "react";
import { HeroContentBox } from "../HeroContentBox";
import * as styles from "./styles.css";
import { Header } from "@/routes/top/features/Header";
import { COUNTDOWN_END_AT, COUNTDOWN_INTERVAL } from "@/components/Countdown";

const LazyCountdown = lazy(() => import("@/components/Countdown").then(mod => ({ default: mod.Countdown })));

export function HeroSection(): ReactNode {
	return (
		<section aria-label="hero section" className={styles.section}>
			<Header />
			<Suspense fallback={null}>
				<Countdown />
			</Suspense>
			<div className={styles.bottom}>
				<h1 className={styles.title}>
					第59回
					<wbr />
					鈴鹿高専祭
				</h1>
				<HeroContentBox className={styles.dateBox}>
					<p className={styles.date}>2024年11月2日</p>
					<p className={styles.date}>2024年11月3日</p>
				</HeroContentBox>
			</div>
		</section>
	);
}

function Countdown(): ReactNode {
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

	return !isOnTheDay
		? <div />
		: (
				<HeroContentBox className={styles.contentBox}>
					<LazyCountdown />
				</HeroContentBox>
			);
}

import type { ReactNode } from "react";
import { Header } from "../Header";
import { HeroContentBox } from "../HeroContentBox";
import * as styles from "./styles.css";
import { Countdown } from "@/components/Countdown";

export function HeroSection(): ReactNode {
	return (
		<section className={styles.section} aria-label="hero section">
			<Header />
			<HeroContentBox className={styles.contentBox}>
				<Countdown />
			</HeroContentBox>
			<div className={styles.bottom}>
				<h1 className={styles.title}>第59回高専祭</h1>
				<HeroContentBox className={styles.dateBox}>
					<p className={styles.date}>2024年11月2日</p>
					<p className={styles.date}>2024年11月3日</p>
				</HeroContentBox>
			</div>
		</section>
	);
}

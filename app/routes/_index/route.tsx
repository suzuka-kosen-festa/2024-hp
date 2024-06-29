import { HeroSection } from "./features/HeroSection";
import { OverviewSection } from "./features/OverviewSection";
import { PhilosophySection } from "./features/PhilosophySection";
import { TitleScrean } from "./features/TitleScrean";
import * as styles from "./styles.css";

export default function Page() {
	return (
		<>
			<div className={styles.splashWrapper} id="splash">
				<TitleScrean />
			</div>
			<div id="top">
				<picture>
					<source media="(min-height: 2160px)" srcSet="/images/background@7x.webp" type="image/webp" />
					<source media="(min-height: 1800px)" srcSet="/images/background@6x.webp" type="image/webp" />
					<source media="(min-height: 1440px)" srcSet="/images/background@5x.webp" type="image/webp" />
					<source media="(min-height: 1152px)" srcSet="/images/background@4x.webp" type="image/webp" />
					<source media="(min-height: 1080px)" srcSet="/images/background@3x.webp" type="image/webp" />
					<source media="(min-height: 768px)" srcSet="/images/background@2x.webp" type="image/webp" />
					<img className={styles.background} src="/images/background.webp" alt="" />
				</picture>
				<HeroSection />
				<PhilosophySection />
				<OverviewSection />
			</div>
		</>
	);
}

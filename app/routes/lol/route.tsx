import type { ReactNode } from "react";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { loader } from "../top/handlers";
import { HeroSection } from "../top/features/HeroSection";
import { OverviewSection } from "../top/features/OverviewSection";
import { PhilosophySection } from "../top/features/PhilosophySection";
import { SponsorSection } from "../top/features/SponsorSection";
import * as styles from "./styles.css";
import { Footer } from "@/components/Footer";

export default function Page(): ReactNode {
	const { day1, day2, personalSponsors, sponsors } = useLoaderData<typeof loader>();

	return (
		<>
			<picture>
				<source media="(min-height: 2160px)" srcSet="/images/background@7x.webp" type="image/webp" />
				<source media="(min-height: 1800px)" srcSet="/images/background@6x.webp" type="image/webp" />
				<source media="(min-height: 1440px)" srcSet="/images/background@5x.webp" type="image/webp" />
				<source media="(min-height: 1152px)" srcSet="/images/background@4x.webp" type="image/webp" />
				<source media="(min-height: 1080px)" srcSet="/images/background@3x.webp" type="image/webp" />
				<source media="(min-height: 768px)" srcSet="/images/background@2x.webp" type="image/webp" />
				<img alt="" className={styles.background} src="/images/background.webp" />
			</picture>
			<div>
				<HeroSection />
				<PhilosophySection />
				<OverviewSection day1={day1} day2={day2} />
				<SponsorSection personalSponsors={personalSponsors} sponsors={sponsors} />
				<Footer />
			</div>
		</>
	);
}

export const meta: MetaFunction = () => [
	{ content: "noindex, nofollow", name: "robots" },
];

export { loader };

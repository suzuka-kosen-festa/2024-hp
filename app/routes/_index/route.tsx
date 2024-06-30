import { useCallback, useEffect, useRef } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HeroSection } from "./features/HeroSection";
import { OverviewSection } from "./features/OverviewSection";
import { PhilosophySection } from "./features/PhilosophySection";
import { TitleScrean } from "./features/TitleScrean";
import * as styles from "./styles.css";

export default function Page(): ReactNode {
	const landingRef = useRef<HTMLDivElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);

	const { context } = useGSAP();

	useEffect(() => {
		const elm = mainRef.current;

		if (elm)
			elm.style.display = "none";

		return () => {
			if (elm)
				elm.style.display = "";
		};
	}, []);

	const handleClick = useCallback(() => {
		context.add(() => {
			const tl = gsap.timeline();

			tl.to(landingRef.current, {
				opacity: 0,
				duration: 3,
			})
				.set(landingRef.current, {
					display: "none",
				})
				.fromTo(
					mainRef.current,
					{ opacity: 0 },
					{
						opacity: 1,
						duration: 2,
						onStart() {
							if (mainRef.current)
								mainRef.current.style.display = "";
						},
					},
				);
		});
	}, [context]);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent<HTMLDivElement>) => {
			if (event.key === "Enter")
				handleClick();
		},
		[handleClick],
	);

	return (
		<>
			<div data-test="splash" onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={0} ref={landingRef} className={styles.landingWrapper}>
				<TitleScrean />
			</div>
			<picture>
				<source media="(min-height: 2160px)" srcSet="/images/background@7x.webp" type="image/webp" />
				<source media="(min-height: 1800px)" srcSet="/images/background@6x.webp" type="image/webp" />
				<source media="(min-height: 1440px)" srcSet="/images/background@5x.webp" type="image/webp" />
				<source media="(min-height: 1152px)" srcSet="/images/background@4x.webp" type="image/webp" />
				<source media="(min-height: 1080px)" srcSet="/images/background@3x.webp" type="image/webp" />
				<source media="(min-height: 768px)" srcSet="/images/background@2x.webp" type="image/webp" />
				<img className={styles.background} src="/images/background.webp" alt="" />
			</picture>
			<div ref={mainRef}>
				<HeroSection />
				<PhilosophySection />
				<OverviewSection />
			</div>
		</>
	);
}

import { useCallback, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HeroSection } from "./features/HeroSection";
import { OverviewSection } from "./features/OverviewSection";
import { PhilosophySection } from "./features/PhilosophySection";
import { TitleScrean } from "./features/TitleScrean";
import * as styles from "./styles.css";
import { Footer } from "@/components/Footer";

export default function Page(): ReactNode {
	const landingRef = useRef<HTMLDivElement>(null);
	const imgRef = useRef<HTMLImageElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);

	const { context } = useGSAP();

	const animation = useCallback(() => {
		context.add(() => {
			const tl = gsap.timeline();

			tl.set(imgRef.current, {
				display: "inline",
			})
				.to(landingRef.current, {
					opacity: 0,
					duration: 3,
				})
				.set(landingRef.current, {
					display: "none",
				})
				.set(mainRef.current, {
					display: "block",
				})
				.fromTo(
					mainRef.current,
					{ opacity: 0 },
					{
						opacity: 1,
						duration: 2,
					},
				);
		});
	}, [context]);

	const keydown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Enter")
			animation();
	}, [animation]);

	useEffect(() => {
		const elm = landingRef.current;

		elm?.addEventListener("click", animation, { once: true });
		elm?.addEventListener("keydown", keydown, { once: true });

		return () => {
			elm?.removeEventListener("click", animation);
			elm?.removeEventListener("keydown", keydown);
		};
	}, [animation, keydown]);

	return (
		<>
			<div data-test="splash" ref={landingRef} className={styles.landingWrapper}>
				<TitleScrean />
			</div>
			<picture>
				<source media="(min-height: 2160px)" srcSet="/images/background@7x.webp" type="image/webp" />
				<source media="(min-height: 1800px)" srcSet="/images/background@6x.webp" type="image/webp" />
				<source media="(min-height: 1440px)" srcSet="/images/background@5x.webp" type="image/webp" />
				<source media="(min-height: 1152px)" srcSet="/images/background@4x.webp" type="image/webp" />
				<source media="(min-height: 1080px)" srcSet="/images/background@3x.webp" type="image/webp" />
				<source media="(min-height: 768px)" srcSet="/images/background@2x.webp" type="image/webp" />
				<img ref={imgRef} className={styles.background} src="/images/background.webp" alt="" />
			</picture>
			<div className={styles.mainWrapper} ref={mainRef}>
				<HeroSection />
				<PhilosophySection />
				<OverviewSection />
				<Footer />
			</div>
		</>
	);
}

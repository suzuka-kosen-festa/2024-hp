import { useCallback, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { clsx } from "clsx";
import { HeroSection } from "./features/HeroSection";
import { OverviewSection } from "./features/OverviewSection";
import { PhilosophySection } from "./features/PhilosophySection";
import { TitleScrean } from "./features/TitleScrean";
import * as styles from "./styles.css";
import { Footer } from "@/components/Footer";

export default function Page(): ReactNode {
	const landingRef = useRef<HTMLDivElement>(null);
	const blurredImgRef = useRef<HTMLImageElement>(null);
	const imgRef = useRef<HTMLImageElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);
	const eyeContainerRef = useRef<HTMLDivElement>(null);
	const eyeTopRef = useRef<HTMLSpanElement>(null);
	const eyeBottomRef = useRef<HTMLSpanElement>(null);

	const { context } = useGSAP();

	const animation = useCallback(() => {
		context.add(() => {
			const tl = gsap.timeline();

			tl
				.to(landingRef.current, {
					opacity: 0,
					duration: 0.5,
				})
				.set(eyeContainerRef.current, {
					display: "block",
				})
				.set(landingRef.current, {
					display: "none",
				})
				.set(blurredImgRef.current, {
					display: "inline",
				})
				.add([
					gsap.to(eyeTopRef.current, {
						yPercent: 0,
						duration: 0.4,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 0.4,
					}),
					gsap.to(eyeBottomRef.current, {
						yPercent: 0,
						duration: 0.4,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 0.4,
					}),
				])
				.add([
					gsap.to(eyeTopRef.current, {
						yPercent: -101,
						duration: 0.6,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 0.2,
					}),
					gsap.to(eyeBottomRef.current, {
						yPercent: 101,
						duration: 0.6,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 0.2,
					}),
				])
				.add([
					gsap.to(eyeTopRef.current, {
						yPercent: 0,
						duration: 0.5,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 0.5,
					}),
					gsap.to(eyeBottomRef.current, {
						yPercent: 0,
						duration: 0.5,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 0.5,
					}),
				])
				.set(blurredImgRef.current, {
					display: "none",
				})
				.set(imgRef.current, {
					display: "inline",
				})
				.add([
					gsap.to(eyeTopRef.current, {
						yPercent: -101,
						duration: 0.3,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 0.6,
					}),
					gsap.to(eyeBottomRef.current, {
						yPercent: 101,
						duration: 0.3,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 0.6,
					}),
				])
				.add([
					gsap.to(eyeTopRef.current, {
						yPercent: 0,
						duration: 0.22,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 1.2,
					}),
					gsap.to(eyeBottomRef.current, {
						yPercent: 0,
						duration: 0.22,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 1.2,
					}),
				])
				.add([
					gsap.to(eyeTopRef.current, {
						yPercent: -101,
						duration: 0.5,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 0.3,
					}),
					gsap.to(eyeBottomRef.current, {
						yPercent: 101,
						duration: 0.5,
						ease: "cubic-bezier(0, 0, 0.11, 0.99)",
						delay: 0.3,
					}),
				])
				.to({}, {
					duration: 1.2,
				})
				.set(eyeContainerRef.current, {
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
						duration: 1,
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
			<>
				<picture>
					<source media="(min-height: 2160px)" srcSet="/images/background@7x.webp" type="image/webp" />
					<source media="(min-height: 1800px)" srcSet="/images/background@6x.webp" type="image/webp" />
					<source media="(min-height: 1440px)" srcSet="/images/background@5x.webp" type="image/webp" />
					<source media="(min-height: 1152px)" srcSet="/images/background@4x.webp" type="image/webp" />
					<source media="(min-height: 1080px)" srcSet="/images/background@3x.webp" type="image/webp" />
					<source media="(min-height: 768px)" srcSet="/images/background@2x.webp" type="image/webp" />
					<img ref={blurredImgRef} className={styles.blurredBackground} src="/images/background.webp" alt="" />
					<img ref={imgRef} className={clsx(styles.background)} src="/images/background.webp" alt="" />
				</picture>
				<div ref={eyeContainerRef} className={styles.eyeWrapper}>
					<span ref={eyeTopRef} className={clsx(styles.eye, styles.eyeTop)} role="presentation" />
					<span ref={eyeBottomRef} className={clsx(styles.eye, styles.eyeBottom)} role="presentation" />
				</div>
			</>
			<div className={styles.mainWrapper} ref={mainRef}>
				<HeroSection />
				<PhilosophySection />
				<OverviewSection />
				<Footer />
			</div>
		</>
	);
}

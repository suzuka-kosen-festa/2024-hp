import type { ReactNode } from "react";
import { useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as styles from "./styles.css";
import { HeroSection } from "./features/HeroSection";
import { OverviewSection } from "./features/OverviewSection";
import { PhilosophySection } from "./features/PhilosophySection";
import { Footer } from "@/components/Footer";

export default function Page(): ReactNode {
	const blurredImgRef = useRef<HTMLImageElement>(null);
	const imgRef = useRef<HTMLImageElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);
	const eyeContainerRef = useRef<HTMLDivElement>(null);
	const eyeTopRef = useRef<HTMLSpanElement>(null);
	const eyeBottomRef = useRef<HTMLSpanElement>(null);

	useGSAP(() => {
		if (typeof document === "undefined")
			return;

		gsap.timeline()
			.add([
				gsap.to(eyeTopRef.current, {
					delay: 0.4,
					duration: 0.4,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: 0,
				}),
				gsap.to(eyeBottomRef.current, {
					delay: 0.4,
					duration: 0.4,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: 0,
				}),
			])
			.add([
				gsap.to(eyeTopRef.current, {
					delay: 0.2,
					duration: 0.6,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: -101,
				}),
				gsap.to(eyeBottomRef.current, {
					delay: 0.2,
					duration: 0.6,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: 101,
				}),
			])
			.add([
				gsap.to(eyeTopRef.current, {
					delay: 0.5,
					duration: 0.5,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: 0,
				}),
				gsap.to(eyeBottomRef.current, {
					delay: 0.5,
					duration: 0.5,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: 0,
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
					delay: 0.6,
					duration: 0.3,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: -101,
				}),
				gsap.to(eyeBottomRef.current, {
					delay: 0.6,
					duration: 0.3,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: 101,
				}),
			])
			.add([
				gsap.to(eyeTopRef.current, {
					delay: 1.2,
					duration: 0.22,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: 0,
				}),
				gsap.to(eyeBottomRef.current, {
					delay: 1.2,
					duration: 0.22,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: 0,
				}),
			])
			.add([
				gsap.to(eyeTopRef.current, {
					delay: 0.3,
					duration: 0.5,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: -101,
				}),
				gsap.to(eyeBottomRef.current, {
					delay: 0.3,
					duration: 0.5,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: 101,
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
					duration: 1,
					opacity: 1,
				},
			);
	});

	return (
		<>
			<>
				<picture>
					<source media="(min-height: 2160px)" srcSet="/images/background@7x.webp" type="image/webp" />
					<source media="(min-height: 1800px)" srcSet="/images/background@6x.webp" type="image/webp" />
					<source media="(min-height: 1440px)" srcSet="/images/background@5x.webp" type="image/webp" />
					<source media="(min-height: 1152px)" srcSet="/images/background@4x.webp" type="image/webp" />
					<source media="(min-height: 1080px)" srcSet="/images/background@3x.webp" type="image/webp" />
					<source media="(min-height: 768px)" srcSet="/images/background@2x.webp" type="image/webp" />
					<img alt="" className={styles.blurredBackground} ref={blurredImgRef} src="/images/background.webp" />
					<img alt="" className={styles.background} ref={imgRef} src="/images/background.webp" />
				</picture>
				<div className={styles.eyeWrapper} ref={eyeContainerRef}>
					<span className={clsx(styles.eye, styles.eyeTop)} ref={eyeTopRef} role="presentation" />
					<span className={clsx(styles.eye, styles.eyeBottom)} ref={eyeBottomRef} role="presentation" />
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

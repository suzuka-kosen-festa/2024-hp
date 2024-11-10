import { clsx } from "clsx";
import type { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "@remix-run/react";
import * as styles from "./styles.css";

export default function Page(): ReactNode {
	const eyeTopRef = useRef<HTMLSpanElement>(null);
	const eyeBottomRef = useRef<HTMLSpanElement>(null);
	const navigate = useNavigate();

	useGSAP(() => {
		if (typeof document === "undefined")
			return;

		gsap.timeline()
			.add([
				gsap.to(eyeTopRef.current, {
					delay: 0.8,
					duration: 1.2,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: 165,
				}),
				gsap.to(eyeBottomRef.current, {
					delay: 0.8,
					duration: 1.2,
					ease: "cubic-bezier(0, 0, 0.11, 0.99)",
					yPercent: -165,
				}),
			]).to({}, {
				onComplete: () => {
					navigate("/endroll");
				},
			});
	});

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
			<div className={styles.eyeWrapper}>
				<span className={clsx(styles.eye, styles.eyeTop)} ref={eyeTopRef} role="presentation" />
				<span className={clsx(styles.eye, styles.eyeBottom)} ref={eyeBottomRef} role="presentation" />
			</div>
		</>
	);
}

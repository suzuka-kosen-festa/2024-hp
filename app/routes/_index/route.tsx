import { useRef } from "react";
import type { ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "@remix-run/react";
import { TitleScrean } from "./features/TitleScrean";
import * as styles from "./styles.css";

export default function Page(): ReactNode {
	const landingRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	useGSAP((_, contextSafe) => {
		if (typeof document === "undefined")
			return;

		const animation = contextSafe(() => {
			gsap.timeline()
				.to(landingRef.current, {
					duration: 0.5,
					opacity: 0,
				})
				.set(landingRef.current, {
					display: "none",
					onComplete: () => {
						navigate("/top");
					},
				});
		});

		const click = () => {
			animation();
		};

		const kewdown = (e: KeyboardEvent) => {
			if (e.key === "Enter") {
				animation();
			}
		};

		if (landingRef.current != null) {
			landingRef.current.addEventListener("click", click, { once: true });
			landingRef.current.addEventListener("keydown", kewdown, { once: true });
		}

		return () => {
			if (landingRef.current != null) {
				landingRef.current.removeEventListener("click", click);
				landingRef.current.removeEventListener("keydown", kewdown);
			}
		};
	});

	return (
		<div className={styles.landingWrapper} data-test="splash" ref={landingRef} tabIndex={0}>
			<TitleScrean />
		</div>
	);
}

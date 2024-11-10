import { Suspense, useRef } from "react";
import type { ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "@remix-run/react";
import { TitleScrean } from "./features/TitleScrean";
import * as styles from "./styles.css";
import { useScramble } from "@/hooks/useScramble";

const prologueText = `
ここは、鈴鹿工業高等専門学校。\n
この学校の校門は、年に2日間だけ「異世界へ繋がる門」に姿を変えるという。\n
その先に広がっているのは未知の国、ボーダー王国。\n\n
"日常"を飛び出して、\n
心躍る冒険が待つ"非日常"の世界へ。\n\n
さあ、門をくぐって、君だけの物語を始めよう！
`;

export default function Page(): ReactNode {
	const landingRef = useRef<HTMLDivElement>(null);
	const prologueRef = useRef<HTMLDivElement>(null);
	const { ref, replay } = useScramble({
		chance: 0.8,
		overdrive: false,
		overflow: false,
		playOnMount: true,
		scramble: 20,
		speed: 0.5,
		text: prologueText,
	});
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
				.set(prologueRef.current, {
					display: "flex",
					onComplete: () => {
						replay();
					},
				})
				.set(landingRef.current, {
					display: "none",
				})
				.to({}, {
					duration: 8,
					onComplete: () => {
						navigate("/archived/top");
					},
				})
			;
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
		<>
			<div className={styles.landingWrapper} data-test="splash" ref={landingRef} tabIndex={0}>
				<TitleScrean />
			</div>
			<div className={styles.prologueWrapper} ref={prologueRef}>
				<Suspense fallback={<p className={styles.prologue}>prologue</p>}>
					<p className={styles.prologue} ref={ref} />
				</Suspense>
			</div>
		</>
	);
}

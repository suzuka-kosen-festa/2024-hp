import type { ReactNode } from "react";
import { Suspense, useRef, useState } from "react";
import * as styles from "./styles.css";
import { useScramble } from "@/hooks/useScramble";

const EPILOGUE_1 = `
門をくぐり、再び "日常" に戻る。\n
夢のような冒険の思い出が心に深く刻まれている。\n
いつもの風景も、どこか違って見えた。
`;
const EPILOGUE_2 = `
私たちは心に誓う。\n
いつか新たな世界に足を踏み入れるとき、この冒険のように\n
かけがえのない経験を積み重ねよう。\n
そして、異世界で得た友情と勇気をこれからも大切にしていこう。
`;
const EPILOGUE_3 = `
私たちの冒険の物語は、決して終わらない。
`;
const EPILOGUES = [EPILOGUE_1, EPILOGUE_2, EPILOGUE_3];

export function Epilogue(): ReactNode {
	return (
		<section className={styles.epilogue}>
			<EpilogueText />
		</section>
	);
}

function EpilogueText(): ReactNode {
	const [index, setIndex] = useState(0);
	const loopRef = useRef<number>();
	const { ref } = useScramble({
		chance: 0.8,
		onAnimationEnd: () => {
			clearInterval(loopRef.current);
			loopRef.current = window.setTimeout(() => {
				setIndex(index => (index < EPILOGUES.length - 1 ? index + 1 : 0));
			}, 2000);
		},
		onAnimationStart: () => {
			clearInterval(loopRef.current);
		},
		overdrive: false,
		overflow: false,
		playOnMount: true,
		speed: 0.5,
		text: EPILOGUES[index],
	});

	return (
		<Suspense fallback={null}>
			<p className={styles.text} ref={ref} />
		</Suspense>
	);
}

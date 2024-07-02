import type { ReactNode } from "react";
import * as styles from "./styles.css";
import { Countdown } from "@/components/Countdown";

export function TitleScrean(): ReactNode {
	return (
		<div className={styles.box}>
			<h2 className={styles.border}>BORDER</h2>
			<Countdown isLanding className={styles.countdown} />
			<p className={styles.text}>-TAP TO START-</p>
		</div>
	);
}

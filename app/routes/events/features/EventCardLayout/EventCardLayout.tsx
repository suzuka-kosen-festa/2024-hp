import type { ReactNode } from "react";
import { Suspense, lazy } from "react";
import * as styles from "./styles.css";

const Music = lazy(() => import("~icons/ri/music-2-fill"));
const Gamepad = lazy(() => import("~icons/ri/gamepad-line"));
const Cracker = lazy(() => import("~icons/ic/round-celebration"));

interface Props {
	children: ReactNode;
	kind: "game" | "live" | "stage";
}

export function EventCardLayout({ children, kind }: Props): ReactNode {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>{children}</div>
			<Suspense fallback={null}>
				{kind === "game" ? <Gamepad className={styles.icon} /> : kind === "live" ? <Music className={styles.icon} /> : <Cracker className={styles.icon} />}
			</Suspense>
		</div>
	);
}

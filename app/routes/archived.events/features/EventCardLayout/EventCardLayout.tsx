import type { ReactNode } from "react";
import { Suspense, lazy } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./styles.css";
import { vars } from "@/styles/theme.css";

const Music = lazy(() => import("~icons/ri/music-2-fill"));
const Gamepad = lazy(() => import("~icons/ri/gamepad-line"));
const Cracker = lazy(() => import("~icons/ic/round-celebration"));

interface Props {
	children: ReactNode;
	kind: "game" | "live" | "stage";
}

export function EventCardLayout({ children, kind }: Props): ReactNode {
	return (
		<li
			style={assignInlineVars({
				[styles.backgroundColor]: kind === "game" ? vars.color.greenBg : kind === "live" ? vars.color.blueBg : vars.color.redBg,
				[styles.borderColor]: kind === "game" ? vars.color.green : kind === "live" ? vars.color.blue : vars.color.red,
			})}
			className={styles.container}
		>
			<div className={styles.innerContainer}>{children}</div>
			<Suspense fallback={null}>
				{kind === "game" ? <Gamepad className={styles.icon} /> : kind === "live" ? <Music className={styles.icon} /> : <Cracker className={styles.icon} />}
			</Suspense>
		</li>
	);
}

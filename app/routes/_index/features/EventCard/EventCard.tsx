import { Link } from "@remix-run/react";
import type { ReactNode } from "react";
import * as styles from "./styles.css";
import RightArrow from "~icons/ic/round-play-arrow";

interface Props {
	children: string;
	hash: "game" | "live" | "stage";
	title: string;
}

export function EventCard({ children, hash, title }: Props): ReactNode {
	return (
		<div className={styles.box}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.content}>{children}</p>
			<Link
				className={styles.link}
				prefetch="intent"
				to={`/events#${hash}`}
			>
				<span className={styles.span}>
					{hash === "game" ? "ゲームイベント" : hash === "live" ? "ライブイベント" : "ステージイベント"}
					について
				</span>
				<RightArrow className={styles.arrow} />
			</Link>
		</div>
	);
}
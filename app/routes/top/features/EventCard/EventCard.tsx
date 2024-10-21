import { Link } from "@remix-run/react";
import type { ReactNode } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./styles.css";
import RightArrow from "~icons/ic/round-play-arrow";
import { vars } from "@/styles/theme.css";

interface Props {
	children: string;
	hash: "game" | "ghostHouse" | "live" | "stage";
	title: string;
}

export function EventCard({ children, hash, title }: Props): ReactNode {
	return (
		<div
			style={assignInlineVars({
				[styles.backgroundColor]: hash === "game" ? vars.color.greenBg : hash === "live" ? vars.color.blueBg : hash === "ghostHouse" ? vars.color.cyanBg : vars.color.redBg,
				[styles.borderColor]: hash === "game" ? vars.color.green : hash === "live" ? vars.color.blue : hash === "ghostHouse" ? vars.color.cyan : vars.color.red,
			})}
			className={styles.box}
		>
			<div>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.content}>{children}</p>
			</div>
			<Link
				className={styles.link}
				prefetch="intent"
				to={`/events#${hash}`}
			>
				<span className={styles.span}>
					{hash === "game" ? "ゲームイベント" : hash === "live" ? "ライブイベント" : hash === "ghostHouse" ? "お化け屋敷" : "ステージイベント"}
					について
				</span>
				<RightArrow className={styles.arrow} />
			</Link>
		</div>
	);
}

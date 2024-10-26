import { Link } from "@remix-run/react";
import type { ReactNode } from "react";
import { memo } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./styles.css";
import RightArrow from "~icons/ic/round-play-arrow";
import { vars } from "@/styles/theme.css";

interface Props {
	children: string;
	hash: "bazar" | "exhibition" | "game" | "ghostHouse" | "live" | "stage";
	title: string;
}

export const EventCard = memo<Props>(({ children, hash, title }): ReactNode => {
	return (
		<div
			style={assignInlineVars({
				[styles.background]: hash === "game"
					? vars.color.greenBg
					: hash === "live"
						? vars.color.blueBg
						: hash === "ghostHouse"
							? vars.color.cyanBg
							: hash === "stage"
								? vars.color.redBg
								: "linear-gradient(154deg, rgb(255 255 255 / 0.09) 0%, rgb(255 255 255 / 0.03) 100%)",
				[styles.borderColor]:
				hash === "game"
					? vars.color.green
					: hash === "live"
						? vars.color.blue
						: hash === "ghostHouse"
							? vars.color.cyan
							: hash === "stage"
								? vars.color.red
								: vars.color.white,
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
				to={hash === "bazar" || hash === "exhibition" ? `/bazar#${hash}` : `/events#${hash}`}
			>
				<span className={styles.span}>
					{hash === "game"
						? "ゲームイベント"
						: hash === "live"
							? "ライブイベント"
							: hash === "ghostHouse"
								? "お化け屋敷"
								: hash === "stage"
									? "ステージイベント"
									: hash === "bazar"
										? "バザー"
										: "学科展示"}
					について
				</span>
				<RightArrow className={styles.arrow} />
			</Link>
		</div>
	);
});

import type { ReactNode } from "react";
import * as styles from "./styles.css";
import RightArrow from "~icons/ic/round-play-arrow";

interface Props {
	children: string;
	title: string;
	url: string;
}

export function DetailCard({ children, title, url }: Props): ReactNode {
	return (
		<div className={styles.box}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.content}>{children}</p>
			<a
				className={styles.link}
				href={url}
				rel="noreferrer"
				target="_blank"
			>
				<span className={styles.span}>
					詳しく見る
				</span>
				<RightArrow className={styles.arrow} />
			</a>
		</div>
	);
}

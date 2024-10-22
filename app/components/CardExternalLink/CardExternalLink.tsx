import type { ReactNode } from "react";
import * as styles from "./styles.css";
import RightArrow from "~icons/ic/round-play-arrow";

;

interface Props {
	text: string;
	url: string;
}

export function CardExternalLink({ text, url }: Props): ReactNode {
	return (
		<a
			className={styles.link}
			href={url}
			rel="noreferrer"
			target="_blank"
		>
			<span className={styles.span}>
				{text}
			</span>
			<RightArrow className={styles.arrow} />
		</a>
	);
}

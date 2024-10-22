import type { ReactNode } from "react";
import { clsx } from "clsx";
import * as styles from "./styles.css";
import RightArrow from "~icons/ic/round-play-arrow";

interface Props {
	text: string;
	url: string;
	className?: string;
}

export function CardExternalLink({ className, text, url }: Props): ReactNode {
	return (
		<a
			className={clsx(styles.link, className)}
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

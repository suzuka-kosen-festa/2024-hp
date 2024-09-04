import { Link } from "@remix-run/react";
import type { ReactNode } from "react";
import * as styles from "./styles.css";

interface Props {
	children: string;
	hash: string;
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
				詳しく見る
			</Link>
		</div>
	);
}

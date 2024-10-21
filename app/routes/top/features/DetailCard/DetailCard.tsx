import type { ReactNode } from "react";
import * as styles from "./styles.css";
import { CardExternalLink } from "@/components/CardExternalLink";

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
			<CardExternalLink url={url} />
		</div>
	);
}

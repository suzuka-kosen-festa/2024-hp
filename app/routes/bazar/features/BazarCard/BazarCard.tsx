import type { ReactNode } from "react";
import * as styles from "./styles.css";

interface Props {
	img: string;
	name: string;
	overview: string;
	type: "food" | "recreation";
}

export function BazarCard({ img, name, overview, type }: Props): ReactNode {
	return (
		<li className={styles.box}>
			<h3 className={styles.name}>{name}</h3>
			<div className={styles.layout}>
				<div>
					<img alt={`${name}の${type === "food" ? "バザー" : "レクリエーション"}紹介画像`} className={styles.image} height={135} loading="lazy" src={img} width={245} />
				</div>
				<p className={styles.overView}>{overview}</p>
			</div>
		</li>
	);
}

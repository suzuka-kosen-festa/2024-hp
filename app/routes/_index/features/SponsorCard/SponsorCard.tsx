import type { ReactNode } from "react";
import * as styles from "./styles.css";

interface Props {
	name: string;
}

export function SponsorCard({ name }: Props): ReactNode {
	return (
		<li className={styles.box}>
			{name}
			様
		</li>
	);
}

import type { ReactNode } from "react";
import * as styles from "./styles.css";

interface Props {
	department: "C" | "E" | "I" | "M" | "S";
	overview: string;
	team: string;
}

export function ExhibitionCard({ department, overview, team }: Props): ReactNode {
	return (
		<li className={styles.box}>
			<div>
				<span className={styles.departmentTag}>
					{department}
					科
				</span>
			</div>
			<h3 className={styles.team}>{team}</h3>
			<p className={styles.content}>{overview}</p>
		</li>
	);
}

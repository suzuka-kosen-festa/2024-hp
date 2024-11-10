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
					{
						department === "C"
							? "生物応用化学"
							: department === "E"
								? "電気電子工学"
								: department === "I"
									? "電子情報工学"
									: department === "M"
										? "機械工学"
										: "材料工学"
					}
					科
				</span>
			</div>
			<h3 className={styles.team}>{team}</h3>
			<p className={styles.content}>{overview}</p>
		</li>
	);
}

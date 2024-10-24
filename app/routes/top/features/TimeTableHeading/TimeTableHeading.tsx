import type { ReactNode } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { TimeTable } from "content-collections";
import * as styles from "./styles.css";
import { vars } from "@/styles/theme.css";

interface Props {
	type: TimeTable["type"];
}

export function TimeTableHeading({ type }: Props): ReactNode {
	return (
		<h3
			style={assignInlineVars({
				[styles.color]: type === "game"
					? vars.color.green
					: type === "live"
						? vars.color.blue
						: type === "main"
							? vars.color.red
							: vars.color.purple,
			})}
			className={styles.heading}
		>
			{
				type === "game"
					? "Game Event"
					: type === "live"
						? "Live Stage"
						: type === "main"
							? "Main Stage"
							: "Sub Stage"
			}
		</h3>
	);
}

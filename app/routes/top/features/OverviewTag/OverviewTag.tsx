import type { ReactNode } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./styles.css";
import { vars } from "@/styles/theme.css";

interface Props {
	children: string;
	color: "blue" | "purple";
}

export function OverviewTag({ children, color }: Props): ReactNode {
	return (
		<h2
			style={assignInlineVars({
				[styles.tagColor]: color === "blue" ? vars.color.blue : vars.color.purple,
			})}
			className={styles.tag}
		>
			{children}
		</h2>
	);
}

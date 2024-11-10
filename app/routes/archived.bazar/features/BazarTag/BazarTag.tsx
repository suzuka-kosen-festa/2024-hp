import type { ReactNode } from "react";
import { memo } from "react";
import * as styles from "./styles.css";

interface Props {
	children: string;
}

export const BazarTag = memo<Props>(({ children }): ReactNode => {
	return (
		<h3
			className={styles.tag}
		>
			{children}
		</h3>
	);
});

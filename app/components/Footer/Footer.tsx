import type { ReactNode } from "react";
import * as styles from "./style.css"

interface FooterProps {
	title:string
}

export function Footer({ title }: FooterProps): ReactNode {
	return (
		<footer className={styles.footer}>
			<h1 >{title}</h1>
		</footer>
	);
}

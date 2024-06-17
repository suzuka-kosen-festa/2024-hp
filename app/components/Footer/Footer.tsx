import type { ReactNode } from "react";
import styles from "./Footer.module.css";

interface FooterProps {
	title:string
}

export function Footer({ title }: FooterProps): ReactNode {
	return (
		<footer className={styles.Footer}>
			<h1 >{title}</h1>
		</footer>
	);
}

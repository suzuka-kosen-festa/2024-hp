import type { ReactNode } from "react";
import footer from "./styles.css";

interface FooterProps {
	title:string
}

export function Footer({ title }: FooterProps): ReactNode {
	return (
		<footer className={footer}>
			<h1 >{title}</h1>
		</footer>
	);
}

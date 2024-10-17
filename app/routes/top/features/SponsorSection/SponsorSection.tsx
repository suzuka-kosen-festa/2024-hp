import type { ReactNode } from "react";
import type { Sponsor } from "content-collections";
import { SponsorCard } from "../SponsorCard";
import * as styles from "./styles.css";

interface Props {
	sponsors: Sponsor[];
}

export function SponsorSection({ sponsors }: Props): ReactNode {
	return (
		<section className={styles.section}>
			<h2 className={styles.heading}>協賛企業</h2>
			<ul className={styles.list}>
				{sponsors.map(sponsor => (
					<SponsorCard key={sponsor._meta.fileName} name={sponsor.name} />
				))}
			</ul>
		</section>
	);
}

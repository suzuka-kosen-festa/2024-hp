import type { ReactNode } from "react";
import type { PersonalSponsor, Sponsor } from "content-collections";
import { SponsorCard } from "../SponsorCard";
import * as styles from "./styles.css";

interface Props {
	personalSponsors: PersonalSponsor[];
	sponsors: Sponsor[];
}

export function SponsorSection({ personalSponsors, sponsors }: Props): ReactNode {
	return (
		<>
			<section className={styles.section}>
				<h2 className={styles.heading}>協賛企業</h2>
				<ul className={styles.list}>
					{sponsors.map(sponsor => (
						<SponsorCard key={sponsor._meta.fileName} name={sponsor.name} />
					))}
				</ul>
			</section>
			<section className={styles.section}>
				<h2 className={styles.heading}>個人協賛</h2>
				<ul className={styles.list}>
					{personalSponsors.map(personalSponsor => (
						<SponsorCard key={personalSponsor._meta.fileName} name={personalSponsor.name} />
					))}
				</ul>
			</section>
		</>
	);
}

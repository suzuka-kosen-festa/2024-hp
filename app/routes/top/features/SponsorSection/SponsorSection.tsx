import type { ReactNode } from "react";
import type { PersonalSponsor, Sponsor, SpecialSponsor } from "content-collections";
import { SponsorCard } from "../SponsorCard";
import { SpecialSponsorCard } from "../SpecialSponsorCard";
import * as styles from "./styles.css";

interface Props {
	personalSponsors: PersonalSponsor[];
	sponsors: Sponsor[];
	specialSponsors: SpecialSponsor[];
}

export function SponsorSection({ personalSponsors, sponsors, specialSponsors }: Props): ReactNode {
	return (
		<>
			<section className={styles.section}>
				<h2 className={styles.heading}>特別</h2>
				<ul className={styles.list}>

					{specialSponsors.map(sponsor => (
						<SpecialSponsorCard key={sponsor._meta.fileName} name={sponsor.name} img={sponsor.img} description={sponsor.description} tel={sponsor.tel} />
					))}
				</ul>

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

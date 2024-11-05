import type { ReactNode } from "react";
import type { PersonalSponsor, SpecialSponsor, Sponsor } from "content-collections";
import { SponsorCard } from "../SponsorCard";
import { SpecialSponsorCard } from "../SpecialSponsorCard";
import * as styles from "./styles.css";

interface Props {
	personalSponsors: PersonalSponsor[];
	specialSponsors: SpecialSponsor[];
	sponsors: Sponsor[];
}

export function SponsorSection({ personalSponsors, specialSponsors, sponsors }: Props): ReactNode {
	return (
		<div className={styles.container}>
			<section className={styles.section}>
				<h2 className={styles.heading}>協賛企業</h2>
				<ul className={styles.specialSponsorList}>
					{specialSponsors.map(sponsor => (
						<SpecialSponsorCard description={sponsor.description} images={sponsor.images} key={sponsor._meta.fileName} name={sponsor.name} tel={sponsor.tel} />
					))}
				</ul>
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
			<p className={styles.text}>順不同</p>
		</div>
	);
}

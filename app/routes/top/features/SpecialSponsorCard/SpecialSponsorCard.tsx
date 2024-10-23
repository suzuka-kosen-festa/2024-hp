import type { ReactNode } from "react";
import * as styles from "./styles.css";
import Icon from "~icons/ic/baseline-local-phone";

interface Props {
	name: string;
	img: string;
	description: string;
	tel: string;
}

export function SpecialSponsorCard({ name, img, description, tel }: Props): ReactNode {
	return (
		<div>
			<li className={styles.box}>
				<h2 className={styles.heading}>{name}様</h2>
				<div className={styles.grid}>

					<img src={img} alt={`${name} image`} className={styles.image} />

					<div className={styles.details}>
						<p className={styles.text} dangerouslySetInnerHTML={{ __html: description }} />
						<p className={styles.tel}>
							<Icon className={styles.icon} />
							{tel}
						</p>
					</div>
				</div>
			</li>
		</div>
	);
}

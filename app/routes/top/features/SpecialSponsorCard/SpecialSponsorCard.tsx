import type { ReactNode } from "react";
import * as styles from "./styles.css";
import Icon from "~icons/ic/baseline-local-phone";

interface Props {
	description: string;
	images: string[];
	name: string;
	tel: string;
}

export function SpecialSponsorCard({ description, images, name, tel }: Props): ReactNode {
	return (
		<div className={styles.box}>
			<h2 className={styles.heading}>
				{name}
				様
			</h2>
			<div className={styles.content}>
				<div className={styles.imagesContainer}>
					{images.map(img => (
						<img
							alt=""
							className={styles.image}
							key={img}
							src={img}
						/>
					))}
				</div>
				<div className={styles.details}>
					<p className={styles.description}>
						{description}
					</p>
					{
						tel
						&& (
							<a className={styles.tel} href={`tel:${tel}`}>
								<Icon className={styles.icon} />
								{tel}
							</a>
						)
					}
				</div>
			</div>
		</div>
	);
}

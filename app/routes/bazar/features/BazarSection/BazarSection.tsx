import type { ReactNode } from "react";
import type { Bazar } from "content-collections";
import { BazarCard } from "../BazarCard";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";
import { OverviewTag } from "@/routes/top/features/OverviewTag";

interface Props {
	foods: Bazar[];
	recreations: Bazar[];
}

export function BazarSection({ foods, recreations }: Props): ReactNode {
	return (
		<section aria-label="バザー・レクリエーション" className={styles.section} id="bazar">
			<SectionTitle color="white" title="バザー・レクリエーション" />
			<div className={styles.container}>
				<OverviewTag color="purple">バザー</OverviewTag>
				<ul className={styles.list}>
					{
						foods.map(bazar => (
							<BazarCard img={bazar.img} key={bazar._meta.fileName} name={bazar.name} overview={bazar.overview} type={bazar.type} />
						))
					}
				</ul>
				<OverviewTag color="purple">レクリエーション</OverviewTag>
				<ul className={styles.list}>
					{
						recreations.map(bazar => (
							<BazarCard img={bazar.img} key={bazar._meta.fileName} name={bazar.name} overview={bazar.overview} type={bazar.type} />
						))
					}
				</ul>
			</div>
		</section>
	);
}

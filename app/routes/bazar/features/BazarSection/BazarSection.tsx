import type { ReactNode } from "react";
import type { Bazar } from "content-collections";
import { BazarCard } from "../BazarCard";
import { BazarTag } from "../BazarTag";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

interface Props {
	foods: Bazar[];
	recreations: Bazar[];
}

export function BazarSection({ foods, recreations }: Props): ReactNode {
	return (
		<section aria-label="バザー・レクリエーション" className={styles.section} id="bazar">
			<SectionTitle color="white" title="バザー・レクリエーション" />
			<div className={styles.container}>
				<BazarTag>バザー</BazarTag>
				<a className={styles.link} href="/pamphlet.pdf" rel="noreferrer">バザーマップはこちらから</a>
				<ul className={styles.list}>
					{
						foods.map(bazar => (
							<BazarCard img={bazar.img} key={bazar._meta.fileName} name={bazar.name} overview={bazar.overview} type={bazar.type} />
						))
					}
				</ul>
				<BazarTag>レクリエーション</BazarTag>
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

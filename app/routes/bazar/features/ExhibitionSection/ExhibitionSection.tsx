import type { DepartmentExhibition } from "content-collections";
import type { ReactNode } from "react";
import { ExhibitionCard } from "../ExhibitionCard";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

interface Props {
	exhibitions: DepartmentExhibition[];
}

export function ExhibitionSection({ exhibitions }: Props): ReactNode {
	return (
		<section>
			<SectionTitle color="white" title="学科展示" />
			<div className={styles.container}>
				<h2 className={styles.heading}>展示時間</h2>
				<h2 className={styles.heading}>展示一覧</h2>
				<ul className={styles.list}>
					{
						exhibitions.map(exhibition => (
							<ExhibitionCard department={exhibition.department} key={exhibition._meta.fileName} overview={exhibition.overview} team={exhibition.team} />
						))
					}
				</ul>
			</div>
		</section>
	);
}

import type { StageEvent } from "content-collections";
import type { ReactNode } from "react";
import { StageEventCard } from "../StageEventCard";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

interface Props {
	stageEvents: StageEvent[];
}

export function StageEventSection({ stageEvents }: Props): ReactNode {
	return (
		<section aria-label="stage events section" className={styles.section} id="stage">
			<SectionTitle title="ステージイベント" />
			<ul className={styles.list}>
				{stageEvents.map(stageEvent => (
					<li key={stageEvent._meta.fileName}>
						<StageEventCard
							endAt={stageEvent.endAt}
							overview={stageEvent.overview}
							startAt={stageEvent.startAt}
							title={stageEvent.title}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}

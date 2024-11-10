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
			<SectionTitle color="red" title="ステージイベント" />
			<ul className={styles.list}>
				{stageEvents.map(stageEvent => (
					<StageEventCard
						endAt={stageEvent.endAt}
						key={stageEvent._meta.fileName}
						overview={stageEvent.overview}
						startAt={stageEvent.startAt}
						title={stageEvent.title}
					/>
				))}
			</ul>
		</section>
	);
}

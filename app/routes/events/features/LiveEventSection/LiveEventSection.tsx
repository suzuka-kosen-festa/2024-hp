import type { LiveEvent } from "content-collections";
import type { ReactNode } from "react";
import { LiveEventCard } from "../LiveEventCard";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

interface Props {
	liveEvents: LiveEvent[];
}

export function LiveEventSection({ liveEvents }: Props): ReactNode {
	return (
		<section aria-label="live events section" className={styles.section} id="live">
			<SectionTitle title="ライブイベント" />
			<ul className={styles.list}>
				{liveEvents.map(liveEvent => (
					<LiveEventCard
						endAt={liveEvent.endAt}
						key={liveEvent._meta.fileName}
						name={liveEvent.name}
						overview={liveEvent.overview}
						press={liveEvent.press}
						stage={liveEvent.stage}
						startAt={liveEvent.startAt}
					/>
				))}
			</ul>
		</section>
	);
}

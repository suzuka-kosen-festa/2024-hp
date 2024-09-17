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
			<SectionTitle title="Live Events" />
			<ul className={styles.list}>
				{liveEvents.map(liveEvent => (
					<li key={liveEvent._meta.fileName}>
						<LiveEventCard
							endAt={liveEvent.endAt}
							name={liveEvent.name}
							overview={liveEvent.overview}
							press={liveEvent.press}
							stage={liveEvent.stage}
							startAt={liveEvent.startAt}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}

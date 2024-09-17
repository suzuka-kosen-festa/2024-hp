import type { GameEvent } from "content-collections";
import type { ReactNode } from "react";
import { GameEventCard } from "../GameEventCard";
import * as styles from "./styles.css";
import { SectionTitle } from "@/components/SectionTitle";

interface Props {
	gameEvents: GameEvent[];
}

export function GameEventSection({ gameEvents }: Props): ReactNode {
	return (
		<section aria-label="game events section" className={styles.section} id="game">
			<SectionTitle title="Game Events" />
			<ul className={styles.list}>
				{gameEvents.map(gameEvent => (
					<li key={gameEvent._meta.fileName}>
						<GameEventCard
							date={gameEvent.date}
							day={gameEvent.day}
							form={gameEvent.form}
							guideBook={gameEvent.guideBook}
							title={gameEvent.title}
							venue={gameEvent.venue}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}

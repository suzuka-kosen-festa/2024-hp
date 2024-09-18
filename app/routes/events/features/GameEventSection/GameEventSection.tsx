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
			<SectionTitle title="ゲームイベント" />
			<ul className={styles.list}>
				{gameEvents.map(gameEvent => (
					<GameEventCard
						date={gameEvent.date}
						day={gameEvent.day}
						form={gameEvent.form}
						guideBook={gameEvent.guideBook}
						key={gameEvent._meta.fileName}
						title={gameEvent.title}
						venue={gameEvent.venue}
					/>
				))}
			</ul>
		</section>
	);
}

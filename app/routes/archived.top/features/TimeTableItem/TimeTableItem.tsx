import type { ReactNode } from "react";
import { Suspense, useEffect, useState } from "react";
import { Temporal } from "temporal-polyfill";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { TimeTable } from "content-collections";
import { CHECK_INTERVAL } from "./constants";
import * as styles from "./styles.css";
import { vars } from "@/styles/theme.css";

interface Props {
	curtain: Temporal.ZonedDateTime;
	isNextToEachOther: boolean;
	timetable: TimeTable;
}

function RawTimeTableItem({ curtain, isNextToEachOther, timetable }: Props): ReactNode {
	const [held, setHeld] = useState(false);

	useEffect(() => {
		const update = () => {
			const now = Temporal.Now.zonedDateTimeISO(Temporal.TimeZone.from("Asia/Tokyo"));
			if (Temporal.ZonedDateTime.compare(now, Temporal.ZonedDateTime.from(timetable.startAt)) >= 0 && Temporal.ZonedDateTime.compare(now, Temporal.ZonedDateTime.from(timetable.endAt)) < 0) {
				setHeld(true);
			}
			else {
				setHeld(false);
			}
		};

		update();
		const id = setInterval(update, CHECK_INTERVAL);

		return () => clearInterval(id);
	}, [timetable.endAt, timetable.startAt]);

	return (
		<div
			style={assignInlineVars({
				[styles.backgroundColor]: held
					? timetable.type === "game"
						? vars.color.greenHeld
						: timetable.type === "live"
							? vars.color.blueHeld
							: timetable.type === "main"
								? vars.color.redHeld
								: vars.color.purpleHeld
					: timetable.type === "game"
						? vars.color.greenBg
						: timetable.type === "live"
							? vars.color.blueBg
							: timetable.type === "main"
								? vars.color.redBg
								: vars.color.purpleBg,
				[styles.borderColor]: timetable.type === "game"
					? vars.color.green
					: timetable.type === "live"
						? vars.color.blue
						: timetable.type === "main"
							? vars.color.red
							: vars.color.purple,
				[styles.borderTop]: isNextToEachOther ? "medium none currentcolor" : `2px solid ${styles.borderColor}`,
				[styles.height]: `calc((${Temporal.ZonedDateTime.from(timetable.endAt).since(Temporal.ZonedDateTime.from(timetable.startAt)).total({ unit: "minutes" })} / 5) * 0.5rem)`,
				[styles.top]: `calc((${Temporal.ZonedDateTime.from(timetable.startAt).since(curtain).total({ unit: "minutes" })} / 5) * 0.5rem)`,
			})}
			className={styles.box}
		>
			{timetable.content}
		</div>
	);
}

export function TimeTableItem({ curtain, isNextToEachOther, timetable }: Props): ReactNode {
	return (
		<Suspense fallback={null}>
			<RawTimeTableItem curtain={curtain} isNextToEachOther={isNextToEachOther} timetable={timetable} />
		</Suspense>
	);
}

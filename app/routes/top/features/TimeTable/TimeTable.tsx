import type { TimeTable as TTimeTable } from "content-collections";
import type { ReactNode } from "react";
import { Temporal } from "temporal-polyfill";
import { TimeTableHeading } from "../TimeTableHeading";
import { TimeTableItem } from "../TimeTableItem";
import * as styles from "./styles.css";

interface Props {
	curtain: Temporal.ZonedDateTime;
	timetables: TTimeTable[];
	type: TTimeTable["type"];
}

export function TimeTable({ curtain, timetables, type }: Props): ReactNode {
	return (
		<section className={styles.section}>
			<TimeTableHeading type={type} />
			<div className={styles.box}>
				{timetables.map((timetable, i) => {
					if (i === 0) {
						return (
							<TimeTableItem curtain={curtain} isNextToEachOther={false} key={timetable._meta.fileName} timetable={timetable} />
						);
					}

					return (
						<TimeTableItem curtain={curtain} isNextToEachOther={Temporal.ZonedDateTime.compare(Temporal.ZonedDateTime.from(timetable.startAt), Temporal.ZonedDateTime.from(timetables[i - 1].endAt)) === 0} key={timetable._meta.fileName} timetable={timetable} />
					);
				})}
			</div>
		</section>
	);
}

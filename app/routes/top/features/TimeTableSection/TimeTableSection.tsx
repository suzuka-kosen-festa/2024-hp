import type { ReactNode } from "react";
import { memo, useCallback, useState } from "react";
import type { TimeTable as TTimeTable } from "content-collections";
import { Temporal } from "temporal-polyfill";
import { TimeTableSwitcher } from "../TimeTableSwitcher";
import { TimeTable } from "../TimeTable";
import * as styles from "./styles.css";

const times = [
	"09:00",
	"10:00",
	"11:00",
	"12:00",
	"13:00",
	"14:00",
	"15:00",
	"16:00",
];

interface TimeTableFrameProps {
	children: ReactNode;
}

const TimeTableFrame = memo<TimeTableFrameProps>(({ children }): ReactNode => {
	return (
		<div className={styles.frame}>
			<div className={styles.times}>
				{times.map(time => (
					<time className={styles.time} dateTime={time} key={time}>{time}</time>
				))}
			</div>
			{children}
		</div>
	);
});

interface TimeTableSectionProps {
	day1: {
		game: TTimeTable[];
		live: TTimeTable[];
		main: TTimeTable[];
		sub: TTimeTable[];
	};
	day2: {
		game: TTimeTable[];
		live: TTimeTable[];
		main: TTimeTable[];
		sub: TTimeTable[];
	};
}

export function TimeTableSection({ day1, day2 }: TimeTableSectionProps): ReactNode {
	const [day, setDay] = useState<1 | 2>(1);
	const onClick = useCallback((day: 1 | 2) => setDay(day), [setDay]);

	return (
		<section className={styles.section}>
			<TimeTableSwitcher days={[1, 2]} onClick={onClick} />
			<TimeTableFrame>
				<div aria-label="横スクロールしてください" className={styles.timetables} tabIndex={0}>
					{day === 1
						? (
								<>
									<TimeTable
										curtain={Temporal.ZonedDateTime.from({ day: 2, hour: 9, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 })}
										timetables={day1.main}
										type="main"
									/>
									<TimeTable
										curtain={Temporal.ZonedDateTime.from({ day: 2, hour: 9, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 })}
										timetables={day1.live}
										type="live"
									/>
									<TimeTable
										curtain={Temporal.ZonedDateTime.from({ day: 2, hour: 9, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 })}
										timetables={day1.sub}
										type="sub"
									/>
									<TimeTable
										curtain={Temporal.ZonedDateTime.from({ day: 2, hour: 9, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 })}
										timetables={day1.game}
										type="game"
									/>
								</>
							)
						: (
								<>
									<TimeTable
										curtain={Temporal.ZonedDateTime.from({ day: 3, hour: 9, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 })}
										timetables={day2.main}
										type="main"
									/>
									<TimeTable
										curtain={Temporal.ZonedDateTime.from({ day: 3, hour: 9, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 })}
										timetables={day2.live}
										type="live"
									/>
									<TimeTable
										curtain={Temporal.ZonedDateTime.from({ day: 3, hour: 9, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 })}
										timetables={day2.sub}
										type="sub"
									/>
									<TimeTable
										curtain={Temporal.ZonedDateTime.from({ day: 3, hour: 9, minute: 0, month: 11, second: 0, timeZone: Temporal.TimeZone.from("Asia/Tokyo"), year: 2024 })}
										timetables={day2.game}
										type="game"
									/>
								</>
							)}
				</div>
			</TimeTableFrame>
		</section>
	);
}

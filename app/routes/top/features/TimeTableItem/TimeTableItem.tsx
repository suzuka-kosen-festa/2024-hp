import type { ReactNode } from "react";
import { Suspense, useEffect, useState } from "react";
import { Temporal } from "temporal-polyfill";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { CHECK_INTERVAL } from "./constants";
import * as styles from "./styles.css";
import { vars } from "@/styles/theme.css";

interface Props {
	content: string;
	curtain: Temporal.ZonedDateTime;
	endAt: Temporal.ZonedDateTime;
	startAt: Temporal.ZonedDateTime;
	type: "game" | "live" | "main" | "sub";
}

function RawTimeTableItem({ content, curtain, endAt, startAt, type }: Props): ReactNode {
	const [held, setHeld] = useState(false);

	useEffect(() => {
		const update = () => {
			const now = Temporal.Now.zonedDateTimeISO(Temporal.TimeZone.from("Asia/Tokyo"));
			if (Temporal.ZonedDateTime.compare(now, startAt) >= 0 && Temporal.ZonedDateTime.compare(now, endAt) < 0) {
				setHeld(true);
			}
			else {
				setHeld(false);
			}
		};

		update();
		const id = setInterval(update, CHECK_INTERVAL);

		return () => clearInterval(id);
	}, [endAt, startAt]);

	return (
		<div
			style={assignInlineVars({
				[styles.backgroundColor]: held
					? type === "game"
						? vars.color.greenHeld
						: type === "live"
							? vars.color.blueHeld
							: type === "main"
								? vars.color.redHeld
								: vars.color.purpleHeld
					: type === "game"
						? vars.color.greenBg
						: type === "live"
							? vars.color.blueBg
							: type === "main"
								? vars.color.redBg
								: vars.color.purpleBg,
				[styles.borderColor]: type === "game"
					? vars.color.green
					: type === "live"
						? vars.color.blue
						: type === "main"
							? vars.color.red
							: vars.color.purple,
				[styles.height]: `calc((${endAt.since(startAt).total({ unit: "minutes" })} / 5) * 0.5rem)`,
				[styles.top]: `calc((${startAt.since(curtain).total({ unit: "minutes" })} / 5) * 0.5rem)`,
			})}
			className={styles.box}
		>
			{content}
		</div>
	);
}

export function TimeTableItem({ content, curtain, endAt, startAt, type }: Props): ReactNode {
	return (
		<Suspense fallback={null}>
			<RawTimeTableItem content={content} curtain={curtain} endAt={endAt} startAt={startAt} type={type} />
		</Suspense>
	);
}

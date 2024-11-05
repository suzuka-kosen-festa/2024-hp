import { json } from "@remix-run/cloudflare";
import { Temporal } from "temporal-polyfill";

export async function loader() {
	const { allGameEvents, allLiveEvents, allStageEvents } = await import("content-collections");
	const gameEvents = allGameEvents.sort((a, b) => Temporal.ZonedDateTime.compare(a.date, b.date));
	const liveEvents = allLiveEvents.sort((a, b) => Temporal.ZonedDateTime.compare(a.startAt, b.startAt));
	const stageEvents = allStageEvents.sort((a, b) => Temporal.ZonedDateTime.compare(a.startAt, b.startAt));

	return json({
		gameEvents,
		liveEvents,
		stageEvents,
	});
};

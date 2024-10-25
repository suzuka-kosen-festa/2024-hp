import { json } from "@remix-run/cloudflare";
import { Temporal } from "temporal-polyfill";

export async function loader() {
	const { allPersonalSponsors, allSpecialSponsors, allSponsors, allTimeTables } = await import("content-collections");
	const day1 = allTimeTables.filter(({ day }) => day === 1);
	const day2 = allTimeTables.filter(({ day }) => day === 2);

	return json({
		day1: {
			game: day1.filter(({ type }) => type === "game").sort((a, b) => Temporal.ZonedDateTime.compare(Temporal.ZonedDateTime.from(a.startAt), Temporal.ZonedDateTime.from(b.startAt))),
			live: day1.filter(({ type }) => type === "live").sort((a, b) => Temporal.ZonedDateTime.compare(Temporal.ZonedDateTime.from(a.startAt), Temporal.ZonedDateTime.from(b.startAt))),
			main: day1.filter(({ type }) => type === "main").sort((a, b) => Temporal.ZonedDateTime.compare(Temporal.ZonedDateTime.from(a.startAt), Temporal.ZonedDateTime.from(b.startAt))),
			sub: day1.filter(({ type }) => type === "sub").sort((a, b) => Temporal.ZonedDateTime.compare(Temporal.ZonedDateTime.from(a.startAt), Temporal.ZonedDateTime.from(b.startAt))),
		},
		day2: {
			game: day2.filter(({ type }) => type === "game").sort((a, b) => Temporal.ZonedDateTime.compare(Temporal.ZonedDateTime.from(a.startAt), Temporal.ZonedDateTime.from(b.startAt))),
			live: day2.filter(({ type }) => type === "live").sort((a, b) => Temporal.ZonedDateTime.compare(Temporal.ZonedDateTime.from(a.startAt), Temporal.ZonedDateTime.from(b.startAt))),
			main: day2.filter(({ type }) => type === "main").sort((a, b) => Temporal.ZonedDateTime.compare(Temporal.ZonedDateTime.from(a.startAt), Temporal.ZonedDateTime.from(b.startAt))),
			sub: day2.filter(({ type }) => type === "sub").sort((a, b) => Temporal.ZonedDateTime.compare(Temporal.ZonedDateTime.from(a.startAt), Temporal.ZonedDateTime.from(b.startAt))),
		},
		personalSponsors: allPersonalSponsors,
		specialSponsors: allSpecialSponsors,
		sponsors: allSponsors,
	});
}

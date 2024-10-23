import { json } from "@remix-run/cloudflare";

export async function loader() {
	const { allPersonalSponsors, allSponsors, allSpecialSponsors } = await import("content-collections");

	return json({
		personalSponsors: allPersonalSponsors,
		sponsors: allSponsors,
		specialSponsors: allSpecialSponsors,
	});
}

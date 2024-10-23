import { json } from "@remix-run/cloudflare";

export async function loader() {
	const { allPersonalSponsors, allSponsors } = await import("content-collections");

	return json({
		personalSponsors: allPersonalSponsors,
		sponsors: allSponsors,
	});
}

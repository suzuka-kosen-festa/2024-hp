import { json } from "@remix-run/cloudflare";

export async function loader() {
	const { allSponsors } = await import("content-collections");

	return json({
		sponsors: allSponsors,
	});
}

import { json } from "@remix-run/cloudflare";

export async function loader() {
	const { allEndrolls } = await import("content-collections");

	return json({
		endrolls: allEndrolls,
	});
}

import { json } from "@remix-run/cloudflare";

export async function loader() {
	const { allBazars } = await import("content-collections");
	const { allDepartmentExhibitions } = await import("content-collections");

	const sortedExhibitions = allDepartmentExhibitions.sort((a, b) => {
		const order = ["M", "E", "I", "C", "S"];
		return order.indexOf(a.department) - order.indexOf(b.department);
	});

	return json({
		bazars: allBazars,
		exhibitions: sortedExhibitions,
	});
}

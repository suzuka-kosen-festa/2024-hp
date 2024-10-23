import { json } from "@remix-run/cloudflare";

export async function loader() {
	const { allBazars, allDepartmentExhibitions } = await import("content-collections");

	const sortedExhibitions = allDepartmentExhibitions.sort((a, b) => {
		const order = ["M", "E", "I", "C", "S"];
		return order.indexOf(a.department) - order.indexOf(b.department);
	});
	const foods = allBazars.filter(bazar => bazar.type === "food");
	const recreations = allBazars.filter(bazar => bazar.type === "recreation");

	return json({
		exhibitions: sortedExhibitions,
		foods,
		recreations,
	});
}

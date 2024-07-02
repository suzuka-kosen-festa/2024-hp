import { test } from "@playwright/test";

test.describe("/", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:8788/");
	});
	// test.describe("rendering", () => {
	//	test("should render hero heading", async ({ page }) => {
	//		const section = page.getByRole("region", { name: "hero section" });
	//		const heading = section.getByRole("heading", { name: "第59回高専祭" });
	//
	//		await expect(heading).toContainText("第59回高専祭");
	//	});
	//	test("should render philosophy heading", async ({ page }) => {
	//		const section = page.getByRole("region", { name: "philosophy section" });
	//		const heading = section.getByRole("heading", { name: "BORDER" });
	//
	//		await expect(heading).toContainText("BORDER");
	//	});
	//	test("should render overview date", async ({ page }) => {
	//		const section = page.getByRole("region", { name: "overview section" });
	//		const dateHeading = section.getByRole("heading", { name: "開催日時" });
	//		const placeHeading = section.getByRole("heading", { name: "開催場所" });
	//
	//		await expect(dateHeading).toContainText("開催日時");
	//		await expect(placeHeading).toContainText("開催場所");
	//	});
	// });
	// test.describe("action", () => {});
	// test.describe("validation", () => {});
	// test.describe("a11y", () => {
	//	test("should not have any automatically detectable accessibility issues", async ({
	//		page,
	//	}) => {
	//		const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
	//
	//		expect(accessibilityScanResults.violations).toEqual([]);
	//	});
	// }); TODO: そのうちなおす
});

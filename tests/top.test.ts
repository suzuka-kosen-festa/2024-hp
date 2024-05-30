import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("/", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:8788/");
	});
	test.describe("rendering", () => {
		test("should render text", async ({ page }) => {
			const heading = page.getByRole("heading", { name: "第59回鈴鹿高専祭" });

			await expect(heading).toContainText("第59回鈴鹿高専祭");
		});
	});
	test.describe("action", () => {});
	test.describe("validation", () => {});
	test.describe("a11y", () => {
		test("should not have any automatically detectable accessibility issues", async ({
			page,
		}) => {
			const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	});
});

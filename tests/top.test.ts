import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("/", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:8788/");
	});
	test.describe("rendering", () => {
		test("should render philosophy heading", async ({ page }) => {
			const h2 = page.locator("section[aria-label=\"philosophy section\"] h2");
			const text = await h2.textContent();

			expect(text).toBe("BORDER");
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

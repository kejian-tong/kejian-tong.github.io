import { expect, test } from "@playwright/test";

const routes = ["/", "/projects/twinder", "/projects/job-board"];

for (const route of routes) {
  test(`${route} has no horizontal overflow on desktop`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(route);

    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(
      dimensions.innerWidth + 1,
    );
  });

  test(`${route} has no horizontal overflow on mobile`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(route);

    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(
      dimensions.innerWidth + 1,
    );
  });
}

test("home page respects reduced motion preference", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /software engineer crafting scalable services/i,
    }),
  ).toBeVisible();
  await expect(page.locator("#projects")).toBeVisible();
});

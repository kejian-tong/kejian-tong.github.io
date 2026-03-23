import { expect, test } from "@playwright/test";

test("home page renders the primary sections and canonical metadata", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Kejian Tong/);
  await expect(
    page.getByRole("heading", {
      name: /software engineer crafting scalable services/i,
    }),
  ).toBeVisible();
  await expect(page.locator("#projects")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://kejian-tong.github.io",
  );
});

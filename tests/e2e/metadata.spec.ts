import { expect, test } from "@playwright/test";

test("robots.txt advertises the sitemap", async ({ page }) => {
  await page.goto("/robots.txt");
  await expect(page.locator("body")).toContainText(
    "Sitemap: https://kejian-tong.github.io/sitemap.xml",
  );
});

test("sitemap.xml includes the major site routes", async ({ page }) => {
  await page.goto("/sitemap.xml");
  const body = page.locator("body");

  await expect(body).toContainText("https://kejian-tong.github.io/");
  await expect(body).toContainText("https://kejian-tong.github.io/kejian-tong");
  await expect(body).toContainText(
    "https://kejian-tong.github.io/projects/twinder",
  );
});

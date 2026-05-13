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

  for (const url of [
    "https://kejian-tong.github.io/",
    "https://kejian-tong.github.io/kejian-tong",
    "https://kejian-tong.github.io/projects/twinder",
    "https://kejian-tong.github.io/projects/job-board",
    "https://kejian-tong.github.io/projects/discord-food-bot",
    "https://kejian-tong.github.io/projects/campsite-review",
  ]) {
    await expect(body).toContainText(url);
  }
});

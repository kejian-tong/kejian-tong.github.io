import { expect, test } from "@playwright/test";

const routes = [
  {
    path: "/kejian-tong",
    heading: "Kejian Tong",
    canonical: "https://kejian-tong.github.io/kejian-tong",
  },
  {
    path: "/projects/twinder",
    heading: "Twinder Microservice",
    canonical: "https://kejian-tong.github.io/projects/twinder",
  },
  {
    path: "/projects/job-board",
    heading: "Job Board Platform",
    canonical: "https://kejian-tong.github.io/projects/job-board",
  },
  {
    path: "/projects/discord-food-bot",
    heading: "Discord Food Delivery Bot",
    canonical: "https://kejian-tong.github.io/projects/discord-food-bot",
  },
  {
    path: "/projects/campsite-review",
    heading: "Campsite Review Explorer",
    canonical: "https://kejian-tong.github.io/projects/campsite-review",
  },
];

for (const route of routes) {
  test(`${route.path} loads with the expected heading and canonical URL`, async ({
    page,
  }) => {
    await page.goto(route.path);

    await expect(
      page.getByRole("heading", { name: route.heading, exact: true }),
    ).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      route.canonical,
    );
  });
}

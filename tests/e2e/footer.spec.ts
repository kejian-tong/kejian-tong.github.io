import { expect, test } from "@playwright/test";

const routesWithSharedFooter = ["/", "/kejian-tong"] as const;

for (const route of routesWithSharedFooter) {
  test(`${route} renders the shared footer identity without a current location`, async ({
    page,
  }) => {
    await page.goto(route);

    const footer = page
      .locator("footer")
      .filter({ hasText: "Let’s build something exceptional" });

    await expect(footer).toBeVisible();
    await expect(footer.getByText("Kejian Tong", { exact: true })).toBeVisible();
    await expect(
      footer.getByText("Software Engineer · AI Researcher", { exact: true }),
    ).toBeVisible();
    await expect(footer.getByText("Seattle, WA", { exact: true })).toHaveCount(0);
  });
}

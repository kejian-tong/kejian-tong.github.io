import { defineConfig, devices } from "@playwright/test";

const previewPort = 3000;
const baseURL = `http://127.0.0.1:${previewPort}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  reporter: "list",
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    command: `npm run preview -- --listen tcp://127.0.0.1:${previewPort}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});

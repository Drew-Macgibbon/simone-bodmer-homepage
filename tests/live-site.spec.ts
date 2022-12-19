import { test, expect } from "@playwright/test";

test("Check live site loads on all browsers", async ({ page }) => {
  await page.goto("https://simone-bodmer-turner.onrender.com/");

  await page.mouse.wheel(1000, 0);
});

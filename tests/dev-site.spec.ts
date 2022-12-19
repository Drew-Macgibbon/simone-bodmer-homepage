import { test, expect } from "@playwright/test";

test("Check dev site loads on all browsers", async ({ page }) => {
  await page.goto("https://simone-bodmer-dev.onrender.com/");


  for (let i = 0; i < 10; i += 1) {
    await page.keyboard.press('ArrowDown');
  }
});

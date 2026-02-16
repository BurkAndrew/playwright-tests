const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {
  test('should navigate to the docs page from the homepage', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    const docsLink = page.getByRole('link', { name: 'Docs' });
    await expect(docsLink).toBeVisible();

    await docsLink.click();
    await expect(page).toHaveURL(/.*docs/);

    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
  });
});


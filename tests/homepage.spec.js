const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test('should load the homepage and display the main heading', async ({ page }) => {
    // Navigate to the site under test
    await page.goto('https://playwright.dev/');

    // Wait for the main heading to be visible
    const heading = page.getByRole('heading', { name: 'Playwright' });
    await expect(heading).toBeVisible();

    // Validate that the "Get Started" link is present
    const getStarted = page.getByRole('link', { name: 'Get Started' });
    await expect(getStarted).toBeVisible();

    // Optional: click the link and verify navigation
    await getStarted.click();
    await expect(page).toHaveURL(/.*intro/);
  });
});

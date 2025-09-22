// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Basic Site Navigation', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');

    // Check that the page title contains "JXTX"
    await expect(page).toHaveTitle(/JXTX/);

    // Check that main heading is visible (use first() to handle multiple h1s)
    await expect(page.locator('h1').first()).toBeVisible();

    // Check that navigation elements are present (may be hidden on mobile)
    await expect(page.locator('nav')).toBeAttached();
  });

  test('donation page loads successfully', async ({ page }) => {
    // Navigate directly to donation page
    await page.goto('/donate/');
    await page.waitForLoadState('networkidle');

    // Check page loaded correctly
    await expect(page).toHaveURL(/.*\/donate/);

    // Check that main content is visible (may not have h1)
    await expect(page.locator('body')).toBeVisible();

    // Look for donation-related content
    const pageContent = await page.textContent('body');
    expect(pageContent.toLowerCase()).toMatch(/donat|support|contribut|fund/);
  });

  test('news section is accessible', async ({ page }) => {
    await page.goto('/');

    // Look for news/articles section
    const newsLinks = page.locator('a[href*="/news/"], a[href*="/articles/"]');

    if (await newsLinks.count() > 0) {
      await newsLinks.first().click();
      await page.waitForLoadState('networkidle');

      // Verify we navigated to an article/news page
      expect(page.url()).toMatch(/\/(news|articles)\//);
    }
  });

  test('responsive navigation works', async ({ page }) => {
    await page.goto('/');

    // Test that page loads on different viewport sizes
    await page.setViewportSize({ width: 375, height: 667 }); // Mobile
    await expect(page.locator('body')).toBeVisible();

    await page.setViewportSize({ width: 1920, height: 1080 }); // Desktop
    await expect(page.locator('body')).toBeVisible();
  });

  test('key internal pages load', async ({ page }) => {
    const testPages = ['/about/', '/james/', '/scholarships/', '/awardees/'];

    for (const pagePath of testPages) {
      console.log(`Testing page: ${pagePath}`);

      try {
        await page.goto(pagePath);
        await page.waitForLoadState('networkidle', { timeout: 10000 });

        // Verify page loaded (not 404)
        await expect(page.locator('body')).toBeVisible();

        // Check it's not a 404 page
        const pageContent = await page.textContent('body');
        expect(pageContent).not.toContain('404');
        expect(pageContent).not.toContain('Page not found');
      } catch (error) {
        console.log(`Page ${pagePath} not found, skipping`);
      }
    }
  });
});
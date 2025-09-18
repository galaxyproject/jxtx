// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Visual Regression Tests', () => {
  test('homepage visual test - desktop', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait for any animations or loading to complete
    await page.waitForTimeout(1000);

    // Take full page screenshot
    await expect(page).toHaveScreenshot('homepage-desktop.png', {
      fullPage: true,
      threshold: 0.5, // Allow for some differences during initial setup
      maxDiffPixels: 1000,
    });
  });

  test('homepage visual test - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait for any animations or loading to complete
    await page.waitForTimeout(1000);

    // Take full page screenshot
    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      fullPage: true,
      threshold: 0.5,
      maxDiffPixels: 1000,
    });
  });

  test('donation page visual test', async ({ page }) => {
    await page.goto('/donate/');
    await page.waitForLoadState('networkidle');

    // Wait for content to load
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot('donate-page.png', {
      fullPage: true,
      threshold: 0.5,
      maxDiffPixels: 1000,
    });
  });

  test('hero section visual test', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Take screenshot of just the hero section
    const heroSection = page.locator('header, .hero, .section-hero, [class*="hero"]').first();

    if (await heroSection.isVisible()) {
      await expect(heroSection).toHaveScreenshot('hero-section.png', {
        threshold: 0.5,
        maxDiffPixels: 500,
      });
    }
  });

  test('footer visual test', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    const footer = page.locator('footer').first();

    if (await footer.isVisible()) {
      await expect(footer).toHaveScreenshot('footer.png', {
        threshold: 0.5,
        maxDiffPixels: 500,
      });
    }
  });
});
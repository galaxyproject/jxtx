// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Smoke Tests - Essential Functionality', () => {
  test('homepage loads and displays correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check basic page structure
    await expect(page).toHaveTitle(/JXTX/);
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('h1').first()).toBeVisible();

    // Check for JXTX Foundation content
    const pageContent = await page.textContent('body');
    expect(pageContent).toContain('James');
    expect(pageContent).toContain('Taylor');
  });

  test('site is responsive', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('body')).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('body')).toBeVisible();
  });

  test('donate page loads', async ({ page }) => {
    await page.goto('/donate/');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveURL(/.*\/donate/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('site navigation works', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Look for any navigation elements
    const navElements = await page.locator('nav, .nav, [role="navigation"]').count();
    expect(navElements).toBeGreaterThan(0);
  });

  test('no JavaScript errors on homepage', async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check for critical JavaScript errors
    const criticalErrors = errors.filter(error =>
      !error.includes('ResizeObserver') && // Common benign error
      !error.includes('Non-passive event listener') // Performance warning
    );

    expect(criticalErrors).toHaveLength(0);
  });
});
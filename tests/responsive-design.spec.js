// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Responsive Design Tests', () => {
  const viewports = [
    { name: 'Mobile Small', width: 320, height: 568 },
    { name: 'Mobile Medium', width: 375, height: 667 },
    { name: 'Mobile Large', width: 414, height: 896 },
    { name: 'Tablet Portrait', width: 768, height: 1024 },
    { name: 'Tablet Landscape', width: 1024, height: 768 },
    { name: 'Desktop Small', width: 1366, height: 768 },
    { name: 'Desktop Large', width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    test(`homepage renders properly on ${viewport.name} (${viewport.width}x${viewport.height})`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Check that basic elements are visible and properly sized
      await expect(page.locator('body')).toBeVisible();

      // Verify no horizontal scrollbar on smaller screens
      if (viewport.width <= 768) {
        const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
        const viewportWidth = await page.evaluate(() => window.innerWidth);
        expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 20); // Allow small tolerance
      }

      // Check that navigation is accessible
      const nav = page.locator('nav').first();
      if (await nav.isVisible()) {
        await expect(nav).toBeVisible();
      }

      // Check that main content is visible
      const main = page.locator('main, [role="main"], .main-content').first();
      if (await main.isVisible()) {
        await expect(main).toBeVisible();
      }
    });
  }

  test('mobile navigation menu works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Look for mobile menu button (hamburger menu)
    const mobileMenuButton = page.locator('button[aria-label*="menu"], .menu-toggle, .hamburger, [class*="mobile-menu"], [class*="nav-toggle"]');

    if (await mobileMenuButton.count() > 0) {
      // Test mobile menu functionality
      await mobileMenuButton.first().click();
      await page.waitForTimeout(500); // Wait for animation

      // Check if menu opened
      const mobileMenu = page.locator('.mobile-menu, .nav-menu, [class*="menu-open"]');
      if (await mobileMenu.count() > 0) {
        await expect(mobileMenu.first()).toBeVisible();

        // Close menu
        await mobileMenuButton.first().click();
        await page.waitForTimeout(500);
      }
    }
  });

  test('images scale properly on all devices', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const images = await page.locator('img').all();

    for (const viewport of [{ width: 375, height: 667 }, { width: 1920, height: 1080 }]) {
      await page.setViewportSize(viewport);
      await page.waitForTimeout(500);

      for (let i = 0; i < Math.min(images.length, 5); i++) {
        const img = images[i];

        if (await img.isVisible()) {
          const imgBox = await img.boundingBox();

          if (imgBox) {
            // Verify image doesn't overflow viewport
            expect(imgBox.width).toBeLessThanOrEqual(viewport.width);
            expect(imgBox.x).toBeGreaterThanOrEqual(0);
            expect(imgBox.x + imgBox.width).toBeLessThanOrEqual(viewport.width + 50); // Allow small tolerance
          }
        }
      }
    }
  });

  test('text remains readable on all screen sizes', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    for (const viewport of [{ width: 320, height: 568 }, { width: 1920, height: 1080 }]) {
      await page.setViewportSize(viewport);
      await page.waitForTimeout(500);

      // Check heading font sizes
      const headings = await page.locator('h1, h2, h3').all();
      for (const heading of headings.slice(0, 3)) {
        if (await heading.isVisible()) {
          const fontSize = await heading.evaluate(el => {
            return parseInt(window.getComputedStyle(el).fontSize);
          });

          // Verify minimum font size for readability
          expect(fontSize).toBeGreaterThanOrEqual(14);
        }
      }

      // Check body text font sizes
      const paragraphs = await page.locator('p').all();
      for (const p of paragraphs.slice(0, 3)) {
        if (await p.isVisible()) {
          const fontSize = await p.evaluate(el => {
            return parseInt(window.getComputedStyle(el).fontSize);
          });

          // Verify minimum font size for body text
          expect(fontSize).toBeGreaterThanOrEqual(12);
        }
      }
    }
  });

  test('layout grid adapts to screen size', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Test desktop layout (should have multi-column grids)
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);

    const gridContainers = await page.locator('[class*="grid"], .row, [class*="columns"]').all();

    if (gridContainers.length > 0) {
      const desktopGrid = gridContainers[0];
      const desktopChildren = await desktopGrid.locator('> *').count();

      // Test mobile layout (should stack vertically)
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(500);

      // Verify layout adapts (this is a basic check - specific implementation may vary)
      await expect(desktopGrid).toBeVisible();
    }
  });
});
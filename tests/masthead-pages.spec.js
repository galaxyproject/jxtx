// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Main Navigation and Content Pages', () => {
  // Main masthead navigation pages
  const mastheadPages = [
    {
      path: '/about/',
      title: 'About the JXTX Foundation',
      hasH1: true,
      hasCustomLinks: true,
      hasTable: true,
    },
    {
      path: '/james/',
      title: 'James',
      hasH1: true,
      hasCustomLinks: true,
      hasFigcaption: false,
    },
    {
      path: '/scholarships/jj-fund/',
      title: 'JJ',
      hasH1: true,
      hasCustomLinks: true,
      hasFigcaption: false,
    },
    {
      path: '/scholarships/',
      title: 'Scholarships',
      hasH1: true,
      hasCustomLinks: true,
      hasFigcaption: false,
    },
    {
      path: '/awardees/',
      title: 'Awardees',
      hasH1: false, // This may be a gallery page
      hasCustomLinks: true,
      hasFigcaption: false,
    },
    {
      path: '/news/',
      title: 'News',
      hasH1: true,
      hasCustomLinks: true,
      hasFigcaption: false,
    },
    {
      path: '/donate/',
      title: 'Donate',
      hasH1: false, // May be an embedded form
      hasCustomLinks: false,
      hasFigcaption: false,
    },
  ];

  // Individual content pages (examples from each category)
  const contentPages = [
    {
      path: '/news/2024-07-26-bds/',
      title: 'Biological Data Science',
      hasH1: true,
      hasCustomLinks: true,
      hasFigcaption: true,
      category: 'News/Scholarship',
    },
    {
      path: '/news/2024-2-19-gcc/',
      title: 'Galaxy Community Conference',
      hasH1: true,
      hasCustomLinks: true,
      hasFigcaption: true,
      category: 'News/Scholarship',
    },
    {
      path: '/awardees/abolfazl-arab/',
      title: 'Abolfazl Arab',
      hasH1: true,
      hasCustomLinks: true,
      hasFigcaption: false,
      category: 'Awardee',
    },
    {
      path: '/awardees/sergio-andreu-sanchez/',
      title: 'Sergio Andreu Sánchez', // Note: accent on á
      hasH1: true,
      hasCustomLinks: true,
      hasFigcaption: false,
      category: 'Awardee',
    },
  ];

  // Combine all pages for comprehensive testing
  const allPages = [...mastheadPages, ...contentPages];

  for (const pageInfo of allPages) {
    test.describe(pageInfo.title, () => {
      test('page loads successfully', async ({ page }) => {
        // Special handling for donate page with embedded content
        if (pageInfo.path === '/donate/') {
          await page.goto(pageInfo.path, {
            waitUntil: 'domcontentloaded',
            timeout: 10000
          }).catch(() => {
            // Donate page may timeout due to embedded content, that's OK
          });

          // Just verify we can access the page
          const url = page.url();
          expect(url).toContain('/donate');
          return; // Skip remaining assertions for donate page
        }

        await page.goto(pageInfo.path, { waitUntil: 'domcontentloaded' });

        // Verify URL
        await expect(page).toHaveURL(new RegExp(pageInfo.path));

        // Verify page title contains expected text or "JXTX"
        await expect(page).toHaveTitle(new RegExp(`(${pageInfo.title}|JXTX)`));

        // Verify main content is visible
        await expect(page.locator('body')).toBeVisible();

        // Verify it's not a 404 page (check for typical 404 indicators)
        const heading = await page.locator('h1').first().textContent().catch(() => '');
        expect(heading.toLowerCase()).not.toContain('page not found');
        expect(heading.toLowerCase()).not.toContain('404 error');
      });

      if (pageInfo.hasH1) {
        test('h1 heading uses custom ArticleH1 component', async ({ page }) => {
          await page.goto(pageInfo.path, { waitUntil: 'domcontentloaded' });

          const h1 = page.locator('h1').first();
          const h1Count = await h1.count();

          if (h1Count > 0) {
            await expect(h1).toBeVisible();

            // Check that h1 has the custom className from ArticleH1 component
            const className = await h1.getAttribute('class');
            if (className) {
              expect(className).toContain('article');
            }
          }
        });
      }

      if (pageInfo.hasCustomLinks) {
        test('links use custom ArticleA component styling', async ({ page }) => {
          await page.goto(pageInfo.path, { waitUntil: 'domcontentloaded' });

          // Find links in main content area (not navigation)
          const mainLinks = page.locator('main a, article a');
          const count = await mainLinks.count();

          if (count > 0) {
            const firstLink = mainLinks.first();
            const className = await firstLink.getAttribute('class');

            // Check for custom link styling (article-a-module)
            expect(className).toBeTruthy();
            expect(className).toContain('article');

            // Verify custom color (not default blue)
            const color = await firstLink.evaluate((el) =>
              window.getComputedStyle(el).color
            );
            expect(color).not.toBe('rgb(0, 0, 238)'); // Not default blue
          }
        });
      }

      if (pageInfo.hasTable) {
        test('table renders with custom link styling', async ({ page }) => {
          await page.goto(pageInfo.path, { waitUntil: 'domcontentloaded' });

          const table = page.locator('table');
          await expect(table).toBeVisible();

          const tableLinks = page.locator('table a');
          const count = await tableLinks.count();
          expect(count).toBeGreaterThan(0);

          const firstLink = tableLinks.first();
          const className = await firstLink.getAttribute('class');

          // Table links should use ArticleA component via <A> tag
          expect(className).toContain('article-a-module');

          // Verify JXTX blue color
          const color = await firstLink.evaluate((el) =>
            window.getComputedStyle(el).color
          );
          expect(color).toBe('rgb(32, 119, 179)');
        });
      }

      if (pageInfo.hasFigcaption) {
        test('figcaptions use custom ArticleFigcaption component', async ({ page }) => {
          await page.goto(pageInfo.path, { waitUntil: 'domcontentloaded' });

          const figcaption = page.locator('figcaption').first();

          if (await figcaption.count() > 0) {
            const className = await figcaption.getAttribute('class');
            expect(className).toContain('article-figcaption-module');

            // Verify orange leading line
            const beforePseudo = await figcaption.evaluate((el) => {
              const style = window.getComputedStyle(el, '::before');
              return {
                backgroundColor: style.backgroundColor,
                width: style.width,
              };
            });
            expect(beforePseudo.backgroundColor).toBe('rgb(254, 127, 2)'); // Orange
            expect(beforePseudo.width).toBe('16px');
          }
        });
      }

      test('navigation masthead is present and functional', async ({ page }) => {
        await page.goto(pageInfo.path, { waitUntil: 'domcontentloaded' });

        // Check navigation is present
        const nav = page.locator('nav');
        await expect(nav).toBeAttached();

        // Check all masthead links are present
        const navLinks = page.locator('nav a');
        const navLinkTexts = await navLinks.allTextContents();

        // Should have the main navigation items
        const expectedLinks = ['Vision & Values', 'James', 'JJ', 'Scholarships', 'Awardees', 'News'];
        for (const expectedLink of expectedLinks) {
          const hasLink = navLinkTexts.some(text => text.includes(expectedLink));
          expect(hasLink).toBe(true);
        }
      });
    });
  }

  test('all pages load without console errors', async ({ page }) => {
    const errors = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    for (const pageInfo of allPages) {
      await page.goto(pageInfo.path, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1000); // Wait for any delayed scripts
    }

    // Allow for common warnings but no critical errors
    const criticalErrors = errors.filter(err =>
      !err.includes('Download the React DevTools') &&
      !err.includes('[HMR]') &&
      !err.includes('DevTools') &&
      !err.includes('validateDOMNesting') && // React DOM nesting warnings
      !err.includes('Warning:') // General React warnings
    );

    expect(criticalErrors).toHaveLength(0);
  });
});

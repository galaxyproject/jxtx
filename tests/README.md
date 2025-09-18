# Playwright Test Suite

This directory contains end-to-end tests for the JXTX Foundation website using Playwright.

## Test Structure

- **`smoke-test.spec.js`** - Essential functionality tests (runs by default)
- **`basic-navigation.spec.js`** - Comprehensive navigation and link validation tests
- **`visual-regression.spec.js`** - Visual comparison tests to catch layout/styling changes
- **`responsive-design.spec.js`** - Tests for responsive behavior across different screen sizes

## Running Tests

### Local Development

```bash
# Run smoke tests (default - essential functionality)
npm test

# Run all tests (comprehensive)
npm run test:all

# Run with browser visible (helpful for debugging)
npm run test:headed

# Interactive UI mode
npm run test:ui

# Debug mode (opens browser with dev tools)
npm run test:debug

# Run specific test file
npx playwright test basic-navigation.spec.js

# Run tests for specific browser
npx playwright test --project=chromium
```

### Available Commands

- `npm test` - Run all tests headlessly
- `npm run test:headed` - Run tests with browser visible
- `npm run test:ui` - Open Playwright's interactive UI
- `npm run test:debug` - Run in debug mode

## Test Configuration

The tests are configured in `playwright.config.js` to:
- Test against Chrome, Firefox, Safari, and mobile devices
- Automatically build and serve the site before testing
- Generate HTML reports on test completion
- Take screenshots on failures

## Visual Regression Testing

Visual tests compare screenshots against baseline images. On first run, baseline images are generated. Subsequent runs compare against these baselines.

To update baseline images:
```bash
npx playwright test --update-snapshots
```

## CI/CD Integration

Tests run automatically on:
- Push to `main` or `develop` branches
- Pull requests to `main`

The GitHub Actions workflow is defined in `.github/workflows/playwright.yml`.

## Best Practices

1. **Wait for content**: Use `waitForLoadState('networkidle')` to ensure dynamic content loads
2. **Responsive testing**: Tests run on both desktop and mobile viewports
3. **Error tolerance**: Visual tests allow for minor differences (threshold: 0.3)
4. **Selective testing**: Link tests are limited to avoid overwhelming CI runs

## Troubleshooting

- **Flaky tests**: Add appropriate waits for dynamic content
- **Visual differences**: Check if changes are intentional, update snapshots if needed
- **Local vs CI differences**: Ensure consistent fonts and rendering between environments
# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install                    # Install dependencies
npx playwright install         # Install browsers

npm test                       # Run all tests
npm run test:smoke             # Run @smoke tagged tests
npm run test:regression        # Run @regression tagged tests
npm run test:accessibility     # Run @accessibility tagged tests

# Run a single test file
npx playwright test tests/smoke/home.smoke.spec.ts

# Run a single test by title
npx playwright test -g "test title"

# Run with a specific browser
npx playwright test --project=chromium

# Run headed (non-headless)
npx playwright test --headed

# Set a custom base URL
BASE_URL=https://example.com npm test

npm run allure:serve           # Generate and open Allure report in browser

npm run lint                   # Check for lint errors
npm run lint:fix               # Auto-fix lint errors
```

## Architecture

Page Object Model with three layers:

- **`src/pages/BasePage.ts`** — abstract base with `navigate()`, `getTitle()`, `waitForVisible()`. All page objects extend this.
- **`src/pages/`** — concrete page objects (e.g. `HomePage.ts`) that expose domain-level actions and locators.
- **`src/fixtures/test.fixtures.ts`** — extends Playwright's `test` with typed page object fixtures. **All tests must import `test` and `expect` from here**, not from `@playwright/test` directly.
- **`src/helpers/`** — cross-cutting utilities (e.g. `accessibility.helper.ts`).

Tests live under `tests/` organized by type (`smoke/`, `regression/`, `accessibility/`). Each test file tags its tests with the matching `@smoke`, `@regression`, or `@accessibility` annotation so the npm scripts can filter them.

`playwright.config.ts` runs three browser projects (Chromium, Firefox, WebKit) in parallel. `BASE_URL` env var overrides the default `https://playwright.dev`. Traces are captured on first retry; screenshots and video are retained on failure.

CI runs on GitHub Actions (`.github/workflows/ci.yml`) and publishes the Allure report to GitHub Pages.

## Conventional Commits

Use `feat:`, `fix:`, `test:`, `ci:`, `docs:`, or `chore:` prefixes.

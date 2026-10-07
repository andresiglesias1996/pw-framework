import { test, expect } from '../../src/fixtures/test.fixtures';
import { allure } from 'allure-playwright';

test.describe('Home Page - Smoke', () => {
  test.beforeEach(async ({ page: _page }) => {
    await allure.suite('Smoke Tests');
    await allure.feature('Homepage');
  });

  test('@smoke homepage loads correctly', async ({ homePage }) => {
    await allure.story('Page load');
    await allure.description('Verifies that the Playwright homepage loads and displays the main heading');

    await homePage.goto();
    await homePage.assertHeadingVisible();
  });

  test('@smoke get started link is visible', async ({ homePage }) => {
    await allure.story('Navigation');
    await allure.description('Verifies the Get Started link is present on the homepage');

    await homePage.goto();
    await expect(homePage.getStartedLink).toBeVisible();
  });
});

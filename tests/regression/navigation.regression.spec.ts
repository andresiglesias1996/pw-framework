import { test, expect } from '../../src/fixtures/test.fixtures';
import { allure } from 'allure-playwright';

test.describe('Navigation - Regression', () => {
  test('@regression navigate to docs', async ({ homePage, page }) => {
    await allure.suite('Regression Tests');
    await allure.feature('Navigation');
    await allure.story('Docs navigation');

    await homePage.goto();
    await homePage.clickGetStarted();
    await expect(page).toHaveURL(/.*intro/);
  });

  test('@regression page title is correct', async ({ homePage }) => {
    await allure.suite('Regression Tests');
    await allure.feature('Navigation');

    await homePage.goto();
    const title = await homePage.getTitle();
    expect(title).toContain('Playwright');
  });
});

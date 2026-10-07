import { test, expect } from '../../src/fixtures/test.fixtures';
import { allure } from 'allure-playwright';

test.describe('Accessibility - Homepage', () => {
  test('@accessibility aria snapshot - main heading', async ({ page, homePage }) => {
    await allure.suite('Accessibility Tests');
    await allure.feature('ARIA');
    await allure.story('Homepage ARIA snapshot');

    await homePage.goto();

    await expect(page.locator('h1')).toBeVisible();

    const snapshot = await page.accessibility.snapshot();
    expect(snapshot).not.toBeNull();
  });

  test('@accessibility keyboard navigation works', async ({ page, homePage }) => {
    await allure.suite('Accessibility Tests');
    await allure.feature('Keyboard navigation');

    await homePage.goto();
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON', 'INPUT']).toContain(focused);
  });
});

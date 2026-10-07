import { Page } from '@playwright/test';

export async function checkNoAccessibilityViolations(page: Page) {
  const snapshot = await page.accessibility.snapshot();
  return snapshot;
}

export async function getAriaSnapshot(page: Page) {
  return await page.accessibility.snapshot({ interestingOnly: true });
}

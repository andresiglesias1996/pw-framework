import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly getStartedLink = this.page.getByRole('link', { name: 'Get started' });
  readonly heading = this.page.getByRole('heading', { name: 'Playwright enables reliable end-to-end testing' });

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }

  async assertHeadingVisible() {
    await expect(this.heading).toBeVisible();
  }
}

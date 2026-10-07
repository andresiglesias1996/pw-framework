import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly getStartedLink = this.page.getByRole('link', { name: /get started/i });
  readonly heading = this.page.locator('h1').first();

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
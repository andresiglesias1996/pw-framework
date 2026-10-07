import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  constructor(protected page: Page) {}

  async navigate(path: string = '') {
    await this.page.goto(path);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async waitForVisible(locator: Locator, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
  }
}

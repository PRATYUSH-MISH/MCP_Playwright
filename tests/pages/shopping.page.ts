import { expect, type Locator, type Page } from '@playwright/test';

export class ShoppingPage {
  private readonly productsHeading: Locator;

  constructor(page: Page) {
    this.productsHeading = page.getByRole('heading', { name: 'Products', level: 1 });
  }

  async expectProductsHeadingVisible(): Promise<void> {
    await expect(this.productsHeading).toBeVisible();
  }
}

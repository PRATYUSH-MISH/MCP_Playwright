import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  private readonly categoriesHeading: Locator;
  private readonly shoppingLink: Locator;

  constructor(private readonly page: Page) {
    const categoriesNavigation = page.getByRole('complementary');
    this.categoriesHeading = categoriesNavigation.getByRole('heading', { name: 'Categories' });
    this.shoppingLink = categoriesNavigation.getByRole('link', { name: 'Shopping' });
  }

  async expectCategoriesVisible(): Promise<void> {
    await expect(this.categoriesHeading).toBeVisible();
  }

  async expectShoppingTabVisible(): Promise<void> {
    await expect(this.shoppingLink).toBeVisible();
  }

  async openShoppingTab(): Promise<void> {
    await this.shoppingLink.click();
  }
}

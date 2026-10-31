import { World, setWorldConstructor, type IWorldOptions } from '@cucumber/cucumber';
import type { Browser, BrowserContext, Page } from 'playwright';
import { HomePage } from '../pages/home.page.js';
import { LoginPage } from '../pages/login.page.js';
import { ShoppingPage } from '../pages/shopping.page.js';

export class ShoppingNavigationWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  loginPage?: LoginPage;
  homePage?: HomePage;
  shoppingPage?: ShoppingPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  initializePages(page: Page): void {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
    this.shoppingPage = new ShoppingPage(page);
  }

  getPage(): Page {
    if (!this.page) {
      throw new Error('The Playwright page has not been initialized for this scenario.');
    }

    return this.page;
  }

  getLoginPage(): LoginPage {
    if (!this.loginPage) {
      throw new Error('The login page object has not been initialized for this scenario.');
    }

    return this.loginPage;
  }

  getHomePage(): HomePage {
    if (!this.homePage) {
      throw new Error('The home page object has not been initialized for this scenario.');
    }

    return this.homePage;
  }

  getShoppingPage(): ShoppingPage {
    if (!this.shoppingPage) {
      throw new Error('The shopping page object has not been initialized for this scenario.');
    }

    return this.shoppingPage;
  }
}

setWorldConstructor(ShoppingNavigationWorld);

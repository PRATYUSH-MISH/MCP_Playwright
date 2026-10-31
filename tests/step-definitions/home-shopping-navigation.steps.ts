import { Given, Then, When } from '@cucumber/cucumber';
import { expectPathname } from '../utils/navigation.js';
import { applicationUrl } from '../utils/urls.js';
import { ShoppingNavigationWorld } from '../fixtures/world.js';

Given(
  'I open the protected home path {string}',
  async function (this: ShoppingNavigationWorld, homePath: string) {
    await this.getPage().goto(applicationUrl(homePath));
  },
);

Then('I am redirected to the sign-in page', async function (this: ShoppingNavigationWorld) {
  await expectPathname(this.getPage(), '/');
  await this.getLoginPage().expectSignInPageVisible();
});

When(
  'I sign in with username {string} and password {string}',
  async function (this: ShoppingNavigationWorld, username: string, password: string) {
    await this.getLoginPage().signIn(username, password);
  },
);

Then('I am on the home page', async function (this: ShoppingNavigationWorld) {
  await expectPathname(this.getPage(), '/home');
  await this.getHomePage().expectCategoriesVisible();
});

Then('the Shopping tab is visible', async function (this: ShoppingNavigationWorld) {
  await this.getHomePage().expectShoppingTabVisible();
});

When('I open the Shopping tab', async function (this: ShoppingNavigationWorld) {
  await this.getHomePage().openShoppingTab();
});

Then(
  'I am on the Shopping page at {string}',
  async function (this: ShoppingNavigationWorld, shoppingPath: string) {
    await expectPathname(this.getPage(), shoppingPath);
  },
);

Then('the Products heading is visible', async function (this: ShoppingNavigationWorld) {
  await this.getShoppingPage().expectProductsHeadingVisible();
});

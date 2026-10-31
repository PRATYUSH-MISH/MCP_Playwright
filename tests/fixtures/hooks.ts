import { After, Before } from '@cucumber/cucumber';
import { createChromeBrowser } from '../utils/browser.js';
import { ShoppingNavigationWorld } from './world.js';

Before(async function (this: ShoppingNavigationWorld) {
  this.browser = await createChromeBrowser();
  this.context = await this.browser.newContext();
  this.initializePages(await this.context.newPage());
});

After(async function (this: ShoppingNavigationWorld) {
  await this.context?.close();
  await this.browser?.close();
});

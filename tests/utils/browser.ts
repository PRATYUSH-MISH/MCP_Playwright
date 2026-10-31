import { chromium, type Browser } from 'playwright';

export async function createChromeBrowser(): Promise<Browser> {
  const channel = process.env.BROWSER_CHANNEL ?? 'chrome';

  return chromium.launch({
    ...(channel === 'chromium' ? {} : { channel }),
    headless: process.env.HEADED !== 'true',
  });
}

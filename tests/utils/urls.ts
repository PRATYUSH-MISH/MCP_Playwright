const baseUrl = process.env.BASE_URL ?? 'https://www.scriptedqa.com';

export function applicationUrl(path: string): string {
  return new URL(path, baseUrl).toString();
}

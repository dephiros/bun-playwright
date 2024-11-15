import path from "node:path";
import playwright from "playwright";
// Ubuntu path: '/usr/bin/brave-browser'
// Windows path: 'C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe'
// MacOs path: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'
const userDataDir = path.resolve(process.env.HOME, "Library/Application Support/BraveSoftware/Brave-Browser");
const browser = await playwright.chromium.launchPersistentContext(userDataDir, {
  args: ["--profile-directory=Default"],
  executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  headless: false,
});

const page = await browser.newPage();
await page.goto("https://apify.com");
const title = await page.title();
console.log(title);
// await browser.close();

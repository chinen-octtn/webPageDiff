import playwright from "playwright";

console.log("Start...");

const ENV = process.env;

const webPath = [
  {
    id: "original",
    url: ENV.ORIGINAL,
  },
  {
    id: "compare",
    url: ENV.COMPARE,
  },
];

(async () => {
  // PC用のスクリーンショット生成
  for (const webPage of webPath) {
    const browser = await playwright["chromium"].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(webPage["url"]);
    await page.screenshot({
      path: `images/${webPage["id"]}.png`,
      fullPage: true,
    });
    await browser.close();
  }

  // SP用のスクリーンショット生成
  for (const webPage of webPath) {
    const browser = await playwright["chromium"].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({
      width: 375,
      height: 1000,
    });
    await page.goto(webPage["url"]);
    await page.screenshot({
      path: `images/${webPage["id"]}_sp.png`,
      fullPage: true,
    });
    await browser.close();
  }

  // 完了メッセージ
  console.log("Create Screenshots!!!");
})();

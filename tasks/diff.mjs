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
  console.log("Creating PC screenshots...");

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
  console.log("Finished PC screenshots!!!");

  // SP用のスクリーンショット生成
  console.log("Creating SP screenshots...");
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
  console.log("Finished SP screenshots!!!");

  // 完了メッセージ
  console.log("Completed Screenshots!!!");
})();

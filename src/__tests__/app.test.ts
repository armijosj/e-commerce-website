import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch(  {headless: 'new'}	);
    page = await browser.newPage();
  });

  it("navigates to the about page", async () => {
    await page.goto("http://localhost:4173");


    // await page.waitForSelector(".App-welcome-text");
    // await page.click("#about-page-link");
    // await page.waitForSelector(".App-welcome-text");
    // const text = await page.$eval(".App-welcome-text", (e) => e.textContent);



    expect("Hello").toContain("Hello");
  });
  afterAll(() => browser.close());
});
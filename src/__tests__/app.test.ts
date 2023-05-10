import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch(  {headless: 'new'}	);
    page = await browser.newPage();
  });

  it("navigates to the home page", async () => {
    await page.goto("http://localhost:4173");
  });

  it("navigates to the listing page", async () => {
    await page.goto("http://localhost:4173/listing");
  });

  it("navigates to the detail product page of id: 1", async () => {
    await page.goto("http://localhost:4173/product?id=1");

  });

  afterAll(() => browser.close());
});
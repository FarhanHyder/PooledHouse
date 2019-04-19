// All end-to-end tests will reside here

const puppeteer = require ('puppeteer');

test("Should return logged-in user's username", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=840,630']
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.click('input');
});

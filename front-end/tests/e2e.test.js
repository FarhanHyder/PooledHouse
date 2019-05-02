// All end-to-end tests will reside here

// Set timeout so that all tests have enough time to finish
//jest.setTimeout(10000);

const puppeteer = require ('puppeteer');


test("Should return logged-in user's username", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=840,630']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');

  await page.click('input[name=username]');
  await page.type('input[name=username]', 'shofi');
  await page.click('input[name=password]');
  await page.type('input[name=password]', '9293767625');
  await page.click('button[type="submit"]');

  await page.waitFor(1000);

  const userName = await page.$eval('button#ur_nav', el => el.textContent);
  expect(userName).toBe("shofi's Tips");
}, 100000);

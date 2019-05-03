// All end-to-end tests will reside here

// Set timeout so that all tests have enough time to finish
//jest.setTimeout(10000);

const puppeteer = require ('puppeteer');

let browser;
let page;

// Launch Choromium browser and open page before running any tests
beforeAll(async () => {
  // Wait until a browser window opens up
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=840,630']
  });

  page = await browser.newPage();
});


// Test User Log-in
test("Should return logged-in user's username", async () => {

  await page.goto('http://localhost:3000/');

  await page.click('input[name=username]');
  await page.type('input[name=username]', 'shofi');
  await page.click('input[name=password]');
  await page.type('input[name=password]', '9293767625');
  await page.click('button[type="submit"]');

  await page.waitFor(1000);

  const userName = await page.$eval('button#ur_nav', el => el.textContent);
  expect(userName).toBe("shofi's Tips");
}, 10000);


// Close Chromium browser after all the E2E tests have run
afterAll(async () => {
  await browser.close();
});


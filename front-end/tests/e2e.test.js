// All end-to-end tests will reside here
const puppeteer = require ('puppeteer');

// Set timeout so that all tests have enough time to finish
//jest.setTimeout(10000);

let browser;
let page;

// Launch Choromium browser and open page before running any tests
beforeAll(async () => {
  // Wait until a browser window opens up
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=800,650']
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


// Test loading page onCLick 'User's Tip'
test("Should test 'page loading' onCLick 'User's Tip", async () => {
  await page.click('button#ur_nav');
  await page.waitFor(2000);
  const formExist = await page.$eval('[type="submit"]', el => el.textContent);
  expect(formExist).toBe('Add Tips');
});


// Test tip submit with no tip input'
test("Should test tip submit with no tip inputs", async () => {
  let testText;
  page.on('dialog', async dialog => {
    testText = dialog.message();
    await page.waitFor(1000);
    await dialog.dismiss();
  });
  await page.click('button[type="submit"');
  await page.waitFor(1000);
  expect(testText).toBe('tipentry failed');
});



// Close Chromium browser after all the E2E tests have finished running
afterAll(async () => {
  await browser.close();
});

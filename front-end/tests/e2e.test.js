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


// Helper function for clickByText()
const escapeXpathString = str => {
  const splitedQuotes = str.replace(/'/g, `', "'", '`);
  return `concat('${splitedQuotes}', '')`;
};

// Helper function for clicking on page selected by inner HTML text
const clickByText = async (page, text) => {
  const escapedText = escapeXpathString(text);
  const linkHandlers = await page.$x(`//a[contains(text(), ${escapedText})]`);

  if (linkHandlers.length > 0) {
    await linkHandlers[0].click();
  } else {
    throw new Error(`Link not found: ${text}`);
  }
};


// Test User Log-in
test("Should return logged-in user's username", async () => {

  // await page.goto('http://localhost:3000/');
  // Hosted on AWS S3
  await page.goto('http://front-end-20190514132134-hostingbucket-phdev.s3-website-us-east-1.amazonaws.com/');

  await page.click('input[name=username]');
  await page.type('input[name=username]', 'shofi');
  await page.click('input[name=password]');
  await page.type('input[name=password]', '9293767625');
  await page.click('button[type="submit"]');

  await page.waitFor(1000);

  const userName = await page.$eval('#dropdown-button-drop-left', el => el.textContent);
  expect(userName).toBe('shofi');
}, 10000);


// Test loading page onCLick 'User's Tip'
test("Should test 'page loading' onCLick 'Add Tips'", async () => {
  await page.click('#dropdown-button-drop-left');
  await clickByText(page, `Add Tips`);
  await page.waitFor(500);

  const formExist = await page.$eval('[type="submit"]', el => el.textContent);
  expect(formExist).toBe('Add Tips');
}, 5000);


// Test tip submit with no tip input'
test("Should test tip submit with no tip inputs", async () => {
  let submitConfirmation;
  page.on('dialog', async dialog => {
    submitConfirmation = dialog.message();
    await dialog.accept();
  });
  await page.click('button[type="submit"');
  await page.waitFor(500);
  expect(submitConfirmation).toBe('tipentry failed');
});


// Test tip submit with valid tip input'
test("Should test tip submit with valid tip inputs", async () => {
  let submitConfirmation;
  page.on('dialog', async dialog => {
    submitConfirmation = dialog.message();
    submitConfirmation = 'success';
    //await dialog.accept();
  });
  // await page.click('input[name=shift_date]');
  await page.type('input[name=shift_date]', '05022019');
  // await page.$eval('input[name=shift_date]', el => el.value = '05/02/2019');
  await page.type('#shift_time', 'PM');
  await page.type('input[name=shift_length]', '5.51');
  await page.select('select[name=shift_position]', 'Busser');
  await page.type('input[name=takehome]', '87');
  await page.type('input[name=business_name]', 'Poolinos');
  await page.type('input[name=business_street_address]', '282 Bowery');
  await page.type('input[name=business_city]', 'New York');
  await page.type('input[name=business_state]', 'NY');
  await page.type('input[name=business_zip]', '10012');
  await page.select('select[name=neighborhood]', 'SoHo');

  await page.click('button[type="submit"');
  await page.waitFor(1000);
  expect(submitConfirmation).toBe('success');
  // jest.setTimeout is 10000 since form submition takes longer
}, 20000);


// Test loading tips onCLick 'User's Tip'
test("Should test user profile loading onCLick 'My Tips'", async () => {
  await page.click('#dropdown-button-drop-left');
  await clickByText(page, `My Tips`);
  await page.waitFor(500);

  const profileHeading = await page.$eval('#userTips-tab-accountSummary', el => el.textContent);
  expect(profileHeading).toBe("Your Tips Summary");
});


// Test loading tips onCLick 'User's Tip'
test("Should test user 'Sign out'", async () => {
  await page.click('#dropdown-button-drop-left');
  await clickByText(page, `Sign out`);
  await page.waitFor(500);

  const signInPage = await page.$eval('.Section__sectionHeader___13iO4', el => el.textContent);
  expect(signInPage).toBe("Sign in to your account");
});


// Close Chromium browser after all the E2E tests have finished running
afterAll(async () => {
  await browser.close();
});

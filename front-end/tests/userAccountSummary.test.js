const {roundUp} = require('../src/Components/UserTips/UserAccountSummaryFunctions');


test('Should return the number rounded to 45.5', () => {
  const rounded = roundUp(45.46,1);
  expect(rounded).toBe(45.5);
})

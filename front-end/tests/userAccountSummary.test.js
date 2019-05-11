const {roundUp} = require('../src/Components/UserTips/UserAccountSummaryFunctions');

// unit test for : roundUp
// regular usage of the function
test('Should return the number rounded to 45.5', () => {
  const rounded = roundUp(45.46,1);
  expect(rounded).toBe(45.5);
})

// unit test for : roundUp
// special case for div by zero
test('Should return the number rounded to 0', () => {
    const rounded = roundUp(45.46,0);
    expect(rounded).toBe(0);
  })

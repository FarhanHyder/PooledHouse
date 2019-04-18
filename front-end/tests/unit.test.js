// All unit tests will reside here

const { ViewTipInfo } = require('../src/Components/ViewTipInfo/ViewTipInfo');

test('Should return a div with all tip info', () => {
  const tip = ViewTipInfo({
    args: 'test'
  });
  expect(tip).toBe('test passed!!!');
});

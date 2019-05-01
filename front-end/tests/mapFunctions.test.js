const { aTBNMasterParse, averageTipsClean } = require('../src/Components/Map/mapFunctions');

test('Should do unit test on aTBNMasterParse()', () => {
  const average = aTBNMasterParse([
  {
    'shift_length': 5,
    'shift_time': 'PM',
    'shift_date': '02/03/2018',
    'shift_position': 'Bartender',
    'takehome': 200,
    'business_name': 'Poolinos',
    'business_street_address': '292 Bowery',
    'business_city': 'New York',
    'business_state': 'NY',
    'business_zip': '10012',
    'neighborhood': 'Soho'
  },
  {
    'shift_length': 5,
    'shift_time': 'PM',
    'shift_date': '02/03/2018',
    'shift_position': 'Bartender',
    'takehome': 300,
    'business_name': 'Poolinos',
    'business_street_address': '292 Bowery',
    'business_city': 'New York',
    'business_state': 'NY',
    'business_zip': '10012',
    'neighborhood': 'Soho'
  },
  {
    'shift_length': 6,
    'shift_time': 'PM',
    'shift_date': '02/03/2018',
    'shift_position': 'Bartender',
    'takehome': 360,
    'business_name': 'Balthezer',
    'business_street_address': '292 Bowery',
    'business_city': 'New York',
    'business_state': 'NY',
    'business_zip': '10012',
    'neighborhood': 'The Standard'
  }
  ], 'All', 'PM', 'Bartender');
  expect(average).toEqual({
    'Soho': {
      'neighborhood': 'Soho',
      'tipsPerHour': 50,
      'totalHour': 10
    },
    'The Standard': {
      'neighborhood': 'The Standard',
      'tipsPerHour': 60,
      'totalHour': 6
    }
  });
});


test('Should do unit test on averageTipsClean()', () => {
  const cleanedData = averageTipsClean([
  {
    'tipsPerHour': 37.319,
    'neighborhood': 'Soho'
  }]);
  expect(cleanedData).toEqual([
  {
    'name': 'Soho',
    'values': [{'label': 'Avg Hourly $', val: 37}],
    'color': '#fc8d59'
  }]);
});


const { colorTest, levelTest, averageTipsByNeighborhoodTest, averageTipsClean, aTBNMasterParse } = require('../src/Components/Map/mapFunctions');


test('Should return the relevant color PARAKEET_GREEN', () => {
  const color = colorTest(51);
  expect(color).toBe('#91cf60');
});

test('Should return the relevant color EMERALD_GREEN', () => {
  const color = colorTest();
  expect(color).toBe('#1a9850');
});



test('Should return the relevant level 3', () => {
  const level = levelTest(51, 49);
  expect(level).toBe(7);
});

test('Should return the relevant level 3', () => {
  const level = levelTest();
  expect(level).toBe(NaN);
});


test('Should return cleaned average tips from averageTipsClean()', () => {
  const cleanedData = averageTipsClean([
  {
    'tipsPerHour': 37.319,
    'neighborhood': 'Soho'
  }]);
  expect(cleanedData).toEqual([
  {
    'name': 'Soho',
    'values': [{'label': 'Avg Hourly $', val: 37}],
    'color': '#d9ef8b'
  }]);
});



test('Should return average tips by Neighborhood from averageTipsByNeighborhoodTest()', () => {
  const average = averageTipsByNeighborhoodTest([
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
    'neighborhood': 'SoHo'
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
    'neighborhood': 'SoHo'
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
    'neighborhood': 'Little Italy'
  }
  ]);

  expect(average).toEqual({
    'SoHo': {
      'neighborhood': 'SoHo',
      'tipsPerHour': 50,
      'totalHour': 10
    },
    'Little Italy': {
      'neighborhood': 'Little Italy',
      'tipsPerHour': 60,
      'totalHour': 6
    }
  });
});



test('Should return average tips by aTBNMasterParse()', () => {
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



test('Should return tip average by day from aTBNDayParse()', () => {
  const average = {
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
  }
// aTBNDayParse() is not exported
//   const average = aTBNDayParse([
//   {
//     'shift_length': 5,
//     'shift_time': 'PM',
//     'shift_date': '02/03/2018',
//     'shift_position': 'Bartender',
//     'takehome': 200,
//     'business_name': 'Poolinos',
//     'business_street_address': '292 Bowery',
//     'business_city': 'New York',
//     'business_state': 'NY',
//     'business_zip': '10012',
//     'neighborhood': 'Soho'
//   },
//   {
//     'shift_length': 5,
//     'shift_time': 'PM',
//     'shift_date': '02/03/2018',
//     'shift_position': 'Bartender',
//     'takehome': 300,
//     'business_name': 'Poolinos',
//     'business_street_address': '292 Bowery',
//     'business_city': 'New York',
//     'business_state': 'NY',
//     'business_zip': '10012',
//     'neighborhood': 'Soho'
//   },
//   {
//     'shift_length': 6,
//     'shift_time': 'PM',
//     'shift_date': '02/03/2018',
//     'shift_position': 'Bartender',
//     'takehome': 360,
//     'business_name': 'Balthezer',
//     'business_street_address': '292 Bowery',
//     'business_city': 'New York',
//     'business_state': 'NY',
//     'business_zip': '10012',
//     'neighborhood': 'The Standard'
//   }
//   ], 'All');
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

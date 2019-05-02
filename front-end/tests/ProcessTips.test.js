// This will keep all the test to ProcessTips.js


const { averageTipsByBusiness } = require('../src/Components/ProcessTips/ProcessTips');



test('Should return average per business', () => {
  const averagePerBusiness = averageTipsByBusiness([
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
    'business_street_address': '80 Spring Street',
    'business_city': 'New York',
    'business_state': 'NY',
    'business_zip': '10012',
    'neighborhood': 'The Standard'
  }
  ]);
  expect(averagePerBusiness).toEqual({
    'Poolinos': {
      'business_name': 'Poolinos',
      'business_street_address': '292 Bowery, New York, NY 10012',
      'tipsPerHour': 50,
      'totalHour': 10
    },
    'Balthezer': {
      'business_name': 'Balthezer',
      'business_street_address': '80 Spring Street, New York, NY 10012',
      'tipsPerHour': 60,
      'totalHour': 6
    }
  });
});

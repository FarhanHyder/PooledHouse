// This will keep all the test to ProcessTips.js


const { averageTipsByBusiness, averageTipsByBusinessDay, averageTipsByPosition } = require('../src/Components/ProcessTips/ProcessTips');


test('Should return average tips by business', () => {
  const averagePerBusiness = averageTipsByBusiness([
  {
    'shift_length': 5,
    'shift_time': 'PM',
    'shift_date': '04/30/2019',
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
    'shift_date': '04/30/2019',
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
    'shift_date': '05/01/2019',
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


test('Should return average tips by business day', () => {
  const averageByBusinessDay = averageTipsByBusinessDay([
  {
    'shift_length': 5,
    'shift_time': 'PM',
    'shift_date': '04/30/2019',
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
    'shift_date': '04/30/2019',
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
    'shift_date': '05/01/2019',
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
  expect(averageByBusinessDay).toEqual({
    'Poolinos': {
      'Monday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'Tuesday': {
        'tipsPerHour': 50,
        'totalHour': 10
      },
      'Wednesday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'Thursday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'Friday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'Saturday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'Sunday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'address': '292 Bowery, New York, NY 10012',
    },
    'Balthezer': {
      'Monday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'Tuesday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'Wednesday': {
        'tipsPerHour': 60,
        'totalHour': 6
      },
      'Thursday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'Friday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'Saturday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'Sunday': {
        'tipsPerHour': 0,
        'totalHour': 0
      },
      'address': '80 Spring Street, New York, NY 10012',
    }
  });
});

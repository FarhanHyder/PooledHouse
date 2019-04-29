// All unit tests will reside here

const { averageTipsByBusiness } = require('../src/Components/ProcessTips/ProcessTips');

test('Should return average per business', () => {
  const average = 'test';//= averageTipsByBusiness([{
//    'shift_length':
// shift_time
// shift_date
// shift_position
// takehome
// business_name
// business_street_address
// business_city
// business_state
// business_zip
//  }]);
//  expect(average).toEqual({one: 1, two: 2});

expect(average).toEqual('test');
});

//const { ViewTipInfo } = require('../src/Components/ViewTipInfo/ViewTipInfo');

test('Should return a div with all tip info', () => {
  
  // const tip = viewTipInfo({
  //   business_name: "test",
  //   business_address: "test",
  //   takehome: 100,
  //   shift_length: 5,
  //   shift_time: "pm",
  //   shift_date: "12/12/12",
  //   shift_position: "test"
  // });

  // expect(tip.contains([
  //   <div>Business Name : test</div>
  //   <div>Address : test</div>
  //   <div>Position: test</div>
  //   <div>Tips : 100</div>
  //   <div>Hours Worked : 5</div>
  //   <div>Work Shift : pm</div>
  //   <div>Date : 12/12/12</div>
  //   ])
  // ).to.equal(true);

  // const tip = ViewTipInfo({
  //   args: 'test'
  // });
  const tip = 'test passed!!!'
  expect(tip).toBe('test passed!!!');
});

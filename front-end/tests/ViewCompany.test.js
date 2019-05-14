import React from 'react';
import renderer from 'react-test-renderer';
import ViewCompany from '../src/Components/ViewTipInfo/ViewCompany';

test('ViewCompany component renders correct for single element', () => {
  const thisProps = {
    BusinessName: 'Poolinos',
    tipsInfo: [
    {
      'shift_length': 5,
      'shift_time': 'PM',
      'shift_date': '04/30/2019',
      'shift_position': 'Busser',
      'takehome': 87,
      'business_name': 'Poolinos',
      'business_street_address': '292 Bowery',
      'business_city': 'New York',
      'business_state': 'NY',
      'business_zip': '10012',
      'neighborhood': 'Soho'
    }],
    avgByBusiness: {
      tipsPerHour: 12.8888
    }
  };

  const component = renderer.create(
//    <ViewCompany props={thisProps} />
    <ViewCompany BusinessName='Poolinos' tipsInfo={thisProps.tipsInfo} avgByBusiness={thisProps.avgByBusiness} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('ViewCompany component renders correct for multiple elements', () => {
  const thisProps = {
    BusinessName: 'Poolinos',
    tipsInfo: [
    {
      'shift_length': 5,
      'shift_time': 'PM',
      'shift_date': '04/30/2019',
      'shift_position': 'Busser',
      'takehome': 87,
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
      'shift_date': '05/02/2019',
      'shift_position': 'Busser',
      'takehome': 93,
      'business_name': 'Poolinos',
      'business_street_address': '292 Bowery',
      'business_city': 'New York',
      'business_state': 'NY',
      'business_zip': '10012',
      'neighborhood': 'Soho'
    }],
    avgByBusiness: {
      tipsPerHour: 12.8888
    }
  };

  const component = renderer.create(
    <ViewCompany BusinessName='Poolinos' tipsInfo={thisProps.tipsInfo} avgByBusiness={thisProps.avgByBusiness} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import ViewUserTips from '../src/Components/ViewTipInfo/ViewUserTipInfo';

test('ViewUserTips should render correct for single element', () => {
  const thisProps = [{
    'user': 'shofi',
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
  }];

  const component = renderer.create(
    <ViewUserTips tipInfo={thisProps} user='shofi' />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('ViewUserTips should render correct for multiple elements', () => {
  const thisProps = [{
    'user': 'shofi',
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
    'user': 'shofi',
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
  },
  {
    'user': 'carl',
    'shift_length': 4,
    'shift_time': 'PM',
    'shift_date': '04/30/2019',
    'shift_position': 'Busser',
    'takehome': 75,
    'business_name': 'Balthazer',
    'business_street_address': '292 Bowery',
    'business_city': 'New York',
    'business_state': 'NY',
    'business_zip': '10012',
    'neighborhood': 'Soho'
  }];

  const component = renderer.create(
    <ViewUserTips tipInfo={thisProps} user='shofi' />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

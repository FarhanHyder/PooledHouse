import React from 'react';
import renderer from 'react-test-renderer';
import ViewTipInfoList from '../src/Components/ViewTipInfo/ViewTipInfoList';

test('TipInfoForm should render correct for single element', () => {
  const thisProps = [{
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
    <ViewTipInfoList tip_info={thisProps} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('TipInfoForm should render correct for multiple elements', () => {
  const thisProps = [
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
  }];
  const component = renderer.create(
    <ViewTipInfoList tip_info={thisProps} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

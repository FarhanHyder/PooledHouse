import React from 'react';
import renderer from 'react-test-renderer';
import TipInfoForm from '../src/Components/TipInfoForm/TipInfoForm';

test('TipInfoForm component snapshot test', () => {
  const thisProps = {
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
  };
  const component = renderer.create(
    <TipInfoForm props={thisProps} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react';
import renderer from 'react-test-renderer';
import Description from '../src/Components/ViewTipInfo/CompanyDescription';

test('Description should render correct for single element', () => {
  const thisProps = {'Soho': {
    'tipsPerHour': 12.8888
  }};

  const component = renderer.create(
    <Description locations={thisProps} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Description should render correct for multiple elements', () => {
  const thisProps = {'Soho': {
    'tipsPerHour': 12.8888
  },
  'Chelsea': {
    'tipsPerHour': 13.54444
  }};

  const component = renderer.create(
    <Description locations={thisProps} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

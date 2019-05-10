import React from 'react';
import renderer from 'react-test-renderer';
import ViewCompany from '../src/Components/ViewTipInfo/ViewCompany';

test('ViewCompany component renders correct for single element', () => {
  const thisProps = {
    'Soho': {
    'tipsPerHour': 12.8888
  }};

  const component = renderer.create(
    <ViewCompany locations={thisProps} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ViewCompany component renders correct for multiple elements', () => {
  const thisProps = {
    'Soho': {
    'tipsPerHour': 12.8888
  },
  'Chelsea': {
    'tipsPerHour': 13.54444
  }};

  const component = renderer.create(
    <ViewCompany locations={thisProps} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import TipInfoForm from '../src/Components/GetTip';

test('getTipsData component snapshot test', () => {
  const thisProps = { 'name': 'Poolinos' };
  const component = renderer.create(
    <getTipsData props={thisProps} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

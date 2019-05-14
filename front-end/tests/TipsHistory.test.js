import React from 'react';
import renderer from 'react-test-renderer';
import TipsHistory from '../src/Components/ViewTipInfo/ViewTipsHistory';

test('TipsHistory should render correct for single element', () => {
  const thisProps = {
    Poolinos: [
      {
        address: '292 Bowery, New York, NY 10012',
        position: 'Busser',
        tips: 87,
        hour: 5,
        shift: 'PM',
        neighborhood: 'Soho',
        date: '04/30/2019'
      }
    ]
  };

  const component = renderer.create(
    <TipsHistory tipsHistory={thisProps.Poolinos} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('TipsHistory should render correct for multiple elements', () => {
  const thisProps = {
    Poolinos: [
      {
        address: '292 Bowery, New York, NY 10012',
        position: 'Busser',
        tips: 87,
        hour: 5,
        shift: 'PM',
        neighborhood: 'Soho',
        date: '04/30/2019'
      },
      {
        address: '292 Bowery, New York, NY 10012',
        position: 'Busser',
        tips: 93,
        hour: 6,
        shift: 'PM',
        neighborhood: 'Soho',
        date: '05/02/2019'
      }
    ]
  };

  const component = renderer.create(
    <TipsHistory tipsHistory={thisProps.Poolinos} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
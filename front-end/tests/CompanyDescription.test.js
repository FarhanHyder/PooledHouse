import React from 'react';
import renderer from 'react-test-renderer';
import Description from '../src/Components/ViewTipInfo/CompanyDescription';

test('Description should render correct for single element', () => {
  const thisProps = {
    business: 'Poolinos',
    locations: {
      '282 Bowery, New York, NY 10012': {
        'tipsPerHour': 12.8888,
      }
    },
    avgByZip: {
      '10012':
      {
        'tipsPerHour': 12.8888
      }
    }
  }

  const component = renderer.create(
    <Description business='Poolinos' locations={thisProps.locations} avgByZip={thisProps.avgByZip}/>
//    <Description props={thisProps} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

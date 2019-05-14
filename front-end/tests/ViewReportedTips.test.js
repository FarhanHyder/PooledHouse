import React from 'react';
import renderer from 'react-test-renderer';
import Report from '../src/Components/ViewTipInfo/ViewReportedTips';

test('Report should render correct for single element', () => {
  const thisProps = {
    business: 'Poolinos',
    locations: {
      '282 Bowery, New York, NY 10012': {
        'tipsPerHour': 12.8888,
      }
    },
    avgByDay: {
      Sunday: {
        'tipsPerHour': 12.8888
      },
      Monday: {
        'tipsPerHour': 12.8888
      },
      Tuesday: {
        'tipsPerHour': 12.8888
      },
      Wednesday: {
        'tipsPerHour': 12.8888
      },
      Thursday: {
        'tipsPerHour': 12.8888
      },
      Friday: {
        'tipsPerHour': 12.8888
      },
      Saturday: {
        'tipsPerHour': 12.8888
      }
    },
    avgByPosition: {
      Bartender: {
        tipsPerHour: 12.8888
      },
      Server: {
        tipsPerHour: 12.8888
      },
      Barback: {
        tipsPerHour: 12.8888
      },
      Busser: {
        tipsPerHour: 12.8888
      },
      Other: {
        tipsPerHour: 12.8888
      }
    },
    avgByPosShift: {
      PM: {
        Bartender: {
          tipsPerHour: 12.8888
        },
        Server: {
          tipsPerHour: 12.8888
        },
        Barback: {
          tipsPerHour: 12.8888
        },
        Busser: {
          tipsPerHour: 12.8888
        },
        Other: {
          tipsPerHour: 12.8888
        }
      },
      AM: {
        Bartender: {
          tipsPerHour: 12.8888
        },
        Server: {
          tipsPerHour: 12.8888
        },
        Barback: {
          tipsPerHour: 12.8888
        },
        Busser: {
          tipsPerHour: 12.8888
        },
        Other: {
          tipsPerHour: 12.8888
        }
      }
    }
  }

  const component = renderer.create(
    <Report business='Poolinos' locations={thisProps.locations} avgByDay={thisProps.avgByDay}
      avgByPosition={thisProps.avgByPosition} avgByPosShift={thisProps.avgByPosShift}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

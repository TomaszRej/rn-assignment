import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../../src/store/store';
import ArchivedLists from '../../../src/screens/archivedListsScreens/ArchivedLists';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('ArchivedLists', () => {
  describe('ArchivedLists snapshots', () => {
    it('should render correct snapshot', () => {
      const component = render(
        <Provider store={store}>
          <ArchivedLists />
        </Provider>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

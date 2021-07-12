import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../../src/store/store';
import {render, RenderAPI} from '@testing-library/react-native';
import ShoppingListItem from '../../../src/components/shoppingListItem/ShoppingListItem';
import {IShoppingList} from '../../../src/store/shoppingLists/shoppingListSlice';
import {ButtonTitleLabel} from '../../../src/components/shoppingListItem/ShoppingListItem';

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

describe('ShoppingListItem', () => {
  let unarchivedItem: RenderAPI;
  let archivedItem: RenderAPI;
  const unarchivedListItem: IShoppingList = {
    createdAt: 1626114143835,
    isArchived: false,
    items: [],
    id: 2,
    name: 'Test Name',
  };
  const archivedListItem: IShoppingList = {
    createdAt: 1626114143835,
    isArchived: true,
    items: [],
    id: 2,
    name: 'Test Name',
  };

  beforeEach(() => {
    unarchivedItem = render(
      <Provider store={store}>
        <ShoppingListItem item={unarchivedListItem} />,
      </Provider>,
    );
    archivedItem = render(
      <Provider store={store}>
        <ShoppingListItem item={archivedListItem} />,
      </Provider>,
    );
  });

  describe('ShoppingListItem snapshots', () => {
    it('should render correct snapshot for unarchivedListItem', () => {
      const tree = unarchivedItem.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render correct snapshot for archivedListItem', () => {
      const tree = archivedItem.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('ShoppingListItem props', () => {
    it('should render correctly name', () => {
      const {getByText} = unarchivedItem;

      expect(getByText(unarchivedListItem.name)).toBeTruthy();
    });

    it('should render correct label on button', () => {
      expect.assertions(2);

      let {getByText} = unarchivedItem;

      expect(getByText(ButtonTitleLabel.Archive)).toBeTruthy();

      const {getByText: getText} = archivedItem;

      expect(getText(ButtonTitleLabel.UnArchive)).toBeTruthy();
    });
  });
});

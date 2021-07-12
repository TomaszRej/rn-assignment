import {Selector} from 'react-redux';
import type {RootState} from '../store';
import {IShoppingList} from './shoppingListSlice';
import {Sort} from '../../constants';

const getShoppingLists: Selector<RootState, IShoppingList[]> = state =>
  state.shoppingLists.shoppingLists.filter(list => !list.isArchived);

const getArchivedLists: Selector<RootState, IShoppingList[]> = state =>
  state.shoppingLists.shoppingLists.filter(list => list.isArchived);

const getShoppingListById =
  (id: number): Selector<RootState, IShoppingList | null> =>
  state => {
    const {shoppingLists} = state.shoppingLists;

    const list = shoppingLists.find(list => id === list.id);

    return list || null;
  };

const getSortDirection: Selector<RootState, Sort> = state =>
  state.shoppingLists.sortDirection;

export {
  getShoppingLists,
  getArchivedLists,
  getShoppingListById,
  getSortDirection,
};

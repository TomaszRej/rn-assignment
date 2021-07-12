import {store} from '../../src/store/store';
import {
  addList,
  IShoppingList,
  setSortDirection,
  toggleArchiveList,
} from '../../src/store/shoppingLists/shoppingListSlice';
import {Sort} from '../../src/constants';

describe('reducers', () => {
  const testList: IShoppingList = {
    createdAt: 1626114143835,
    isArchived: false,
    items: [],
    id: 2,
    name: 'Test Name',
  };

  const {shoppingLists} = store.getState().shoppingLists;

  test('addList reducer', () => {
    const expected = [...shoppingLists, testList];

    store.dispatch(addList(testList));

    const {shoppingLists: updated} = store.getState().shoppingLists;

    expect(updated).toEqual(expected);
  });

  test('toggleArchiveList reducer', () => {
    const id = shoppingLists[0].id;
    const isArchived = true;

    store.dispatch(toggleArchiveList({id: id!, isArchived: isArchived}));

    const {shoppingLists: updated} = store.getState().shoppingLists;

    const updatedList = updated.find(list => list.id === id);

    expect(updatedList?.isArchived).toBe(isArchived);
  });

  test('setSortDirection reducer', () => {
    expect.assertions(2);
    const {sortDirection} = store.getState().shoppingLists;

    store.dispatch(setSortDirection(Sort.Asc));

    const {sortDirection: newSortDirection} = store.getState().shoppingLists;

    expect(sortDirection).toBe(Sort.Desc);
    expect(newSortDirection).toBe(Sort.Asc);
  });
});

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Sort} from '../../constants';

export interface IShoppingListDTO {
  id?: number;
  name: string;
  items: string[];
  isArchived: boolean;
  createdAt: number;
}

export interface IShoppingList extends IShoppingListDTO {
  id: number;
}

interface ShoppingListsState {
  shoppingLists: IShoppingList[];
  sortDirection: Sort;
}

const initialState: ShoppingListsState = {
  shoppingLists: [
    {
      id: 1,
      name: 'Example List',
      items: ['first item to buy', 'second item to buy'],
      isArchived: false,
      createdAt: Date.now(),
    },
  ],
  sortDirection: Sort.Desc,
};

export const shoppingListsSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<IShoppingListDTO>) => {
      state.shoppingLists = [
        ...state.shoppingLists,
        {
          ...action.payload,
          // adding fake unique id
          id: state.shoppingLists.length + 1,
        },
      ];
    },
    toggleArchiveList: (
      state,
      action: PayloadAction<{id: number; isArchived: boolean}>,
    ) => {
      state.shoppingLists = state.shoppingLists.map((list: IShoppingList) => {
        if (list.id === action.payload.id) {
          return {...list, isArchived: action.payload.isArchived};
        }
        return list;
      });
    },
    setSortDirection: (state, action: PayloadAction<Sort>) => {
      state.sortDirection = action.payload;
    },
  },
});

export const {addList, toggleArchiveList, setSortDirection} =
  shoppingListsSlice.actions;

export default shoppingListsSlice.reducer;

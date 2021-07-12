import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {useAppSelector} from '../../hooks/hooks';
import {IShoppingList} from '../../store/shoppingLists/shoppingListSlice';
import {
  getShoppingLists,
  getSortDirection,
} from '../../store/shoppingLists/selectors';
import ShoppingListItem from '../shoppingListItem/ShoppingListItem';
import {Sort} from '../../constants';

const ShoppingLists = () => {
  const shoppingLists = useAppSelector(getShoppingLists);
  const sortDirection = useAppSelector(getSortDirection);
  const [sortedList, setSortedList] = useState<IShoppingList[]>([]);

  useEffect(() => {
    const callback =
      sortDirection === Sort.Asc
        ? (a: IShoppingList, b: IShoppingList) => a.createdAt - b.createdAt
        : (a: IShoppingList, b: IShoppingList) => b.createdAt - a.createdAt;

    setSortedList(shoppingLists.sort(callback));
  }, [sortDirection, shoppingLists]);

  const renderItem: ListRenderItem<IShoppingList> = ({item}) => {
    return <ShoppingListItem item={item} />;
  };

  return <FlatList data={sortedList} renderItem={renderItem} />;
};

export default ShoppingLists;

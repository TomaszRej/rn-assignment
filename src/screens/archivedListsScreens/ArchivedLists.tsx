import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {useAppSelector} from '../../hooks/hooks';
import {IShoppingList} from '../../store/shoppingLists/shoppingListSlice';
import {getArchivedLists} from '../../store/shoppingLists/selectors';
import ShoppingListItem from '../../components/shoppingListItem/ShoppingListItem';

const ArchivedLists = () => {
  const shoppingLists = useAppSelector(getArchivedLists);

  const renderItem: ListRenderItem<IShoppingList> = ({item}) => {
    return <ShoppingListItem item={item} />;
  };

  return <FlatList data={shoppingLists} renderItem={renderItem} />;
};

export default ArchivedLists;

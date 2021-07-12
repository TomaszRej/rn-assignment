import React, {FC} from 'react';
import {StyleSheet, StatusBar, Pressable} from 'react-native';
import Button from '../button/Button';
import {useAppDispatch} from '../../hooks/hooks';
import {
  IShoppingList,
  toggleArchiveList,
} from '../../store/shoppingLists/shoppingListSlice';
import {useNavigation} from '@react-navigation/native';
import Title from '../title/Title';
import {Paths} from '../../constants';

export enum ButtonTitleLabel {
  UnArchive = 'Unarchive List',
  Archive = 'Archive List',
}

interface IProps {
  item: IShoppingList;
}

const ShoppingListItem: FC<IProps> = ({item}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const onArchiveList = () => {
    dispatch(
      toggleArchiveList({
        id: item.id,
        isArchived: item.isArchived ? false : true,
      }),
    );
  };

  const onListItemPressed = () => {
    navigation.navigate(Paths.Details, {id: item.id});
  };

  const buttonTitle = item.isArchived
    ? ButtonTitleLabel.UnArchive
    : ButtonTitleLabel.Archive;

  return (
    <Pressable
      style={styles.item}
      onPress={item.isArchived ? null : onListItemPressed}>
      <Title>{item.name}</Title>
      <Button title={buttonTitle} onPress={onArchiveList} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ddd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
});

export default ShoppingListItem;

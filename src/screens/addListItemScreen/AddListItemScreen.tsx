import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/button/Button';
import {useAppDispatch} from '../../hooks/hooks';
import {addList} from '../../store/shoppingLists/shoppingListSlice';
import LabeledTextInput from '../../components/labeledTextInput/LabeledTextInput';
import {Paths} from '../../constants';
import ListOfItems from '../../components/ListOfItems/ListOfItems';

const AddListItemScreen = () => {
  const {navigate} = useNavigation();
  const dispatch = useAppDispatch();
  const [listName, setListName] = useState('');
  const [currentItem, setCurrentItem] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    setItems(i => [...i, currentItem]);
    setCurrentItem('');
  };

  const onChangeName = (text: string) => {
    setListName(text);
  };

  const onChangeItem = (text: string) => {
    setCurrentItem(text);
  };

  const onAddItem = () => {
    addItem();
  };

  const onEndEditing = () => {
    addItem();
  };

  const onSave = () => {
    dispatch(
      addList({
        name: listName,
        items,
        createdAt: Date.now(),
        isArchived: false,
      }),
    );

    navigate(Paths.ShoppingLists, {
      screen: Paths.Shopping,
      params: {success: true},
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.space}>
        <LabeledTextInput
          label="Name"
          value={listName}
          onChangeText={onChangeName}
          placeholder={'Enter name of the shopping list'}
        />
      </View>
      <View style={styles.space}>
        <LabeledTextInput
          label="Item"
          value={currentItem}
          onChangeText={onChangeItem}
          placeholder={'Add item to the shopping list'}
          onEndEditing={onEndEditing}
        />
      </View>
      <View style={styles.space}>
        <Button title="Add Item" onPress={onAddItem} />
      </View>
      <View style={styles.space}>
        <ListOfItems items={items} />
      </View>
      <View style={styles.space}>
        <Button title="Save" onPress={onSave} />
      </View>
    </View>
  );
};

export default AddListItemScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  space: {
    paddingVertical: 5,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
  },
});

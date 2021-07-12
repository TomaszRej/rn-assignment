import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useAppSelector} from '../../hooks/hooks';
import {getShoppingListById} from '../../store/shoppingLists/selectors';
import {ListDetailsScreenRouteProp} from '../../navigation/MainStackNavigator';
import Title from '../../components/title/Title';
import ListOfItems from '../../components/ListOfItems/ListOfItems';

const ListDetailsScreen = () => {
  const {
    params: {id},
  } = useRoute<ListDetailsScreenRouteProp>();

  const list = useAppSelector(getShoppingListById(id));

  return (
    <View style={styles.container}>
      <Title>{`${list?.name}:`}</Title>
      <ListOfItems items={list?.items} />
    </View>
  );
};

export default ListDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 15,
  },
});

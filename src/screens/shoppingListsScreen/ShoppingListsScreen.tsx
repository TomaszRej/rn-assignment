import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import ShoppingLists from '../../components/shoppingLists/ShoppingLists';
import Button from '../../components/button/Button';
import Toast from 'react-native-root-toast';
import {ShoppingListsScreenRouteProp} from '../../navigation/MainStackNavigator';

const ShoppingListsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<ShoppingListsScreenRouteProp>();
  const {params} = route;

  useEffect(() => {
    if (params) {
      Toast.show('List has been successfully created', {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
      });
    }
  }, [params]);

  const onAddItemPressed = () => {
    navigation.navigate('Add List');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button title="Add New List" onPress={onAddItemPressed} />
      </View>
      <ShoppingLists />
    </View>
  );
};

export default ShoppingListsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrapper: {
    marginVertical: 40,
    marginHorizontal: 120,
  },
});

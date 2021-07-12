import React from 'react';
import ShoppingListsScreen from '../screens/shoppingListsScreen/ShoppingListsScreen';
import ArchivedLists from '../screens/archivedListsScreens/ArchivedLists';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, Paths} from '../constants';

const Tab = createBottomTabNavigator();

const ListsTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.text,
      }}>
      <Tab.Screen name={Paths.Shopping} component={ShoppingListsScreen} />
      <Tab.Screen name={Paths.Archived} component={ArchivedLists} />
    </Tab.Navigator>
  );
};

export default ListsTabNavigator;

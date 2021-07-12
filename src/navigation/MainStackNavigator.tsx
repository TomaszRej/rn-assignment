import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import ListDetailsScreen from '../screens/listsDetailsScreen/ListDetailsScreen';
import AddListItemScreen from '../screens/addListItemScreen/AddListItemScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ListsTabNavigator from './ListsTabNavigator';
import {Colors, Paths, Sort} from '../constants';
import {getSortDirection} from '../store/shoppingLists/selectors';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {setSortDirection} from '../store/shoppingLists/shoppingListSlice';
import Icon from 'react-native-vector-icons/Ionicons';

type MainStackParamList = {
  [Paths.ShoppingLists]: {success: boolean};
  [Paths.Details]: {id: number};
  [Paths.AddList]: undefined;
};

export type ListDetailsScreenRouteProp = RouteProp<
  MainStackParamList,
  Paths.Details
>;

export type ShoppingListsScreenRouteProp = RouteProp<
  MainStackParamList,
  Paths.ShoppingLists
>;

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  const sortDirection = useAppSelector(getSortDirection);
  const dispatch = useAppDispatch();

  const onHeaderButtonPressed = () => {
    dispatch(
      setSortDirection(sortDirection === Sort.Asc ? Sort.Desc : Sort.Asc),
    );
  };

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          options={{
            // todo create component header title for entie app
            // headerTitle: props => <Title {...props} />,
            // create icon button custom component
            headerRight: () => (
              <Icon
                name={
                  sortDirection === Sort.Desc
                    ? 'arrow-down-outline'
                    : 'arrow-up-outline'
                }
                size={30}
                color={Colors.primaryColor}
                onPress={onHeaderButtonPressed}
              />
            ),
          }}
          name={Paths.ShoppingLists}
          component={ListsTabNavigator}
        />
        <MainStack.Screen name={Paths.Details} component={ListDetailsScreen} />
        <MainStack.Screen name={Paths.AddList} component={AddListItemScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;

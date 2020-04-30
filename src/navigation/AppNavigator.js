import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderScreen from '../screens/OrderScreen';
import ViewOrdersScreen from '../screens/ViewOrders';
import UserScreen from '../screens/UserScreen';
import SingleMealScreen from '../screens/SingleMeal';
import FavoritesScreen from '../screens/FavoritesScreen';


// Orders Stack to inject into my Tabs
const OrderStack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name='Order' component={OrderScreen} />
      <OrderStack.Screen name='Single Meal' component={SingleMealScreen} />
    </OrderStack.Navigator>
  );
};

// Tabs Navigator that will be my default navigation for my app
const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Order' component={OrderNavigator} />
      <Tabs.Screen name='View Orders' component={ViewOrdersScreen} />
      <Tabs.Screen name='User Profile' component={UserScreen} />
      <Tabs.Screen name='Favorites Screen' component={FavoritesScreen} />

    </Tabs.Navigator>
  );
};

export default TabNavigator;

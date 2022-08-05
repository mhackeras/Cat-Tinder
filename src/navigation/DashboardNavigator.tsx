import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CatsScreen from '../screens/CatsScreen/CatsScreen';
import {useRootRoute} from './hooks';
import {DashboardTabsNavigatorProps} from './types';
import Tabbar from '../components/Tabbar/Tabbar';
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen';
import UserScreen from '../screens/UserScreen/UserScreen';

const Tab = createBottomTabNavigator<DashboardTabsNavigatorProps>();

const DashboardNavigator = () => {
  const {params: {initialTab} = {}} = useRootRoute<'Dashboard'>();

  return (
    <Tab.Navigator
      initialRouteName={initialTab}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <Tabbar {...props} />}>
      <Tab.Screen name="Cats" component={CatsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;

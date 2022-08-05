import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CatsScreen from '../screens/CatsScreen/CatsScreen';
import {useRootRoute} from './hooks';
import {DashboardTabsNavigatorProps} from './types';

const Tab = createBottomTabNavigator<DashboardTabsNavigatorProps>();

const DashboardNavigator = () => {
  const {params: {initialTab} = {}} = useRootRoute<'Dashboard'>();

  return (
    <Tab.Navigator
      initialRouteName={initialTab}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Cats" component={CatsScreen} />
      <Tab.Screen name="Messages" component={CatsScreen} />
      <Tab.Screen name="User" component={CatsScreen} />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;

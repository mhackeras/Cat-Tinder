import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardNavigator from './DashboardNavigator';
import {RootStackNavigatorProps} from './types';

const Stack = createNativeStackNavigator<RootStackNavigatorProps>();

interface RootNavigationProps {
  onReady?: () => void;
}

const RootNavigation = (props: RootNavigationProps) => {
  return (
    <NavigationContainer {...props}>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Dashboard" component={DashboardNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

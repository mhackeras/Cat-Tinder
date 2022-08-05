import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { RootStackNavigatorProps, DashboardTabsNavigatorProps } from './types';

export const useRootNavigation = () => useNavigation<NativeStackNavigationProp<RootStackNavigatorProps>>();

export const useRootRoute = <Screen extends keyof RootStackNavigatorProps>() =>
  useRoute<RouteProp<RootStackNavigatorProps, Screen>>();

export const useDashboardNavigation = () => useNavigation<BottomTabNavigationProp<DashboardTabsNavigatorProps>>();
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackNavigatorProps = {
  Dashboard: {initialTab?: keyof DashboardTabsNavigatorProps};
};

export type DashboardTabsNavigatorProps = {
  Cats: undefined;
  Messages: undefined;
  User: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackNavigatorProps> =
  NativeStackScreenProps<RootStackNavigatorProps, T>;

export type DashboardTabsScreenProps<
  T extends keyof DashboardTabsNavigatorProps,
> = BottomTabScreenProps<DashboardTabsNavigatorProps, T>;

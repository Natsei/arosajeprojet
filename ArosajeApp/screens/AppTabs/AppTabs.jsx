import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Leaf, CircleUser, MessagesSquare } from 'lucide-react-native';
import { HomeScreen } from '../HomeScreen/HomeScreen';
import { PlantScreen } from '../PlantScreen/PlantScreen';
import { ProfileScreen } from '../ProfileScreen/ProfileScreen';
import { AccueilScreen } from '../AccueilScreen/AccueilScreen';

const Tab = createBottomTabNavigator();

const commonTabOptions = {
  headerShown: false,
  tabBarActiveTintColor: 'green',
};

const AppTabs = () => (
  <Tab.Navigator tabBar>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        ...commonTabOptions,
        tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Accueil"
      component={AccueilScreen}
      options={{
        ...commonTabOptions,
        tabBarIcon: ({ color, size }) => <MessagesSquare color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Plant"
      component={PlantScreen}
      options={{
        ...commonTabOptions,
        tabBarIcon: ({ color, size }) => <Leaf color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        ...commonTabOptions,
        tabBarIcon: ({ color, size }) => <CircleUser color={color} size={size} />,
      }}
    />
  </Tab.Navigator>
);

export default AppTabs;
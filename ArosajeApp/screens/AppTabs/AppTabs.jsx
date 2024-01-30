import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Leaf, CircleUser, MessagesSquare } from 'lucide-react-native';
import { HomeScreen } from '../HomeScreen/HomeScreen';
import { PlantScreen } from '../PlantScreen/PlantScreen';
import { ProfileScreen } from '../ProfileScreen/ProfileScreen';
import { AccueilScreen } from '../AccueilScreen/AccueilScreen';

const Tab = createBottomTabNavigator();

const AppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Accueil"
      component={AccueilScreen}
      options={{
        tabBarIcon: ({ color, size }) => <MessagesSquare color={color} size={size} />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Plant"
      component={PlantScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Leaf color={color} size={size} />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => <CircleUser color={color} size={size} />,
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default AppTabs;

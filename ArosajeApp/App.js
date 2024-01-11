import * as React from 'react';
import { Text, View } from 'react-native';
import { Home, Leaf, CircleUser, MessagesSquare } from 'lucide-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { PlantScreen } from './screens/PlantScreen/PlantScreen';
import { ProfileScreen } from './screens/ProfileScreen/ProfileScreen';
import { ChatScreen } from './screens/ChatScreen/ChatScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Home color="black" size={30} />
            ),
            headerShown: false, // Masquer l'en-tête pour cet écran
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MessagesSquare color="black" size={30} />
            ),
            headerShown: false, // Masquer l'en-tête pour cet écran
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              // Prevent the default action
              e.preventDefault();
              // Navigate to "OnBoardingScreen" when the tab is pressed
              navigation.navigate('OnBoardingScreen');
            },
          })}
        />
        <Tab.Screen
          name="Plant"
          component={PlantScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Leaf color="black" size={30} />
            ),
            headerShown: false, // Masquer l'en-tête pour cet écran
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <CircleUser color="black" size={30} />
            ),
            headerShown: false, // Masquer l'en-tête pour cet écran
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

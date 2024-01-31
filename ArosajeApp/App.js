import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppTabs from './screens/AppTabs/AppTabs'; //Appel pour la navbar
import { AccueilScreen } from './screens/AccueilScreen/AccueilScreen';
import { AddPictureScreen } from './screens/AddPictureScreen/AddPictureScreen';
import { ConnexionScreen } from './screens/ConnexionInscriptionScreen/ConnexionScreen';
import { InscriptionScreen } from './screens/ConnexionInscriptionScreen/InscriptionScreen';
import { ProfileScreen } from './screens/ProfileScreen/ProfileScreen';
import { ChatScreen } from './screens/ChatScreen/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // Masquer l'en-tête par défaut pour tous les écrans
          }}
        >
          <Stack.Screen name="AppTabs" component={AppTabs} />
          <Stack.Screen name="AccueilScreen" component={AccueilScreen} />
          <Stack.Screen name="AddPictureScreen" component={AddPictureScreen} />
          <Stack.Screen name="ConnexionScreen" component={ConnexionScreen} />
          <Stack.Screen name="InscriptionScreen" component={InscriptionScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

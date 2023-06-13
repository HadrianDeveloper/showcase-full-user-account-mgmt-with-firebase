import { StyleSheet } from 'react-native';
import * as React from 'react';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import ResetPassword from './components/ResetPassword.js';

export default function App() {

  const Stack = createNativeStackNavigator()
  
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Signin'>
          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#0C0C5C'
  }
});

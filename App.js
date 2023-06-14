import * as React from 'react';
import Signin from './screens/Signin.js';
import Signup from './screens/Signup.js';
import Home from './screens/Home.js';
import ResetPassword from './screens/ResetPassword.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Delete from './screens/Delete.js';
import { UserContext } from './contexts/UserContext.js';

export default function App() {
  const Stack = createNativeStackNavigator()
  const [user, setUser] = React.useState('')

    return (
      <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Signin'>
          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Delete' component={Delete} />
        </Stack.Navigator>
      </NavigationContainer>
      </UserContext.Provider>
  )
};
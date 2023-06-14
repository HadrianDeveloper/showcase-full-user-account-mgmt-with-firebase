import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { UserProvider } from './contexts/UserContext.js';
import Signin from './screens/Signin.js';
import Signup from './screens/Signup.js';
import Home from './screens/Home.js';
import ResetPassword from './screens/ResetPassword.js';
import Delete from './screens/Delete.js';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin'>
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Delete' component={Delete} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  )
};
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { handleSignup } from "../services/firebase";
import GreenButton from "../components/GreenButton";
import BlankButton from "../components/BlankButton";
import PageHeader from "../components/PageHeader";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";


export default function Signup({navigation, route}) {

  const {currEmail} = route.params;

  const [email, setEmail] = useState(currEmail);
  const [password, setPassword] = useState('');
  const [checkPword, setCheckPword] = useState('');

  function signup() {
    if (!email || !password) {
      alert('Cannot leave any fields blank')
    } else if (password !== checkPword) {
      alert('Passwords do not match')
    } else {
      handleSignup(email, password)
        .then((msg) => {
          msg.startsWith('auth/')
          ? alert(`Error! ${msg.slice(5)}`)
          : navigation.navigate('Home', {email: email})
        })
        .catch((err) => alert(err))
    }
  }
    
  return (
    <View style={s.container}>
      <PageHeader text='Create an account' />

      <View style={s.form}>
        <InputEmail
          defaultValue={email}
          onChangeText={(txt) => setEmail(txt)} />
        <InputPassword 
          placeholder='password'
          defaultValue={password} 
          onChangeText={(txt) => setPassword(txt)} />
        <InputPassword
          placeholder='confirm password'
          defaultValue={checkPword} 
          onChangeText={(txt) => setCheckPword(txt)} />
        <GreenButton 
          text='Sign up' 
          onPress={signup} />
        <BlankButton 
          text='Sign in instead' 
          onPress={() => navigation.navigate('Signin')}  />
      </View>

    </View>
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
  },
  form: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: -40
  }
});

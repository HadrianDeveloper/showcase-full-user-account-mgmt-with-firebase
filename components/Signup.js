import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { handleSignup } from "../services/firebase";


export default function Signup({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPword, setCheckPword] = useState('');
  const [visible, setVisible] = useState({name: 'eye-off'})

  // functions
  function toggleVisibility() {
    setVisible({name: (visible.name === 'eye-off') ? 'eye' : 'eye-off'})
  };

  function handleSubmit() {
    if (!email || !password) {
      alert('Cannot leave any fields blank')
    } else if (password !== checkPword) {
      alert('Passwords do not match')
    } else {
      handleSignup(email, password)
        .then((msg) => {
          msg.startsWith('auth/')
          ? alert(`Error! ${msg.slice(5)}`)
          : navigation.navigate('Home')
        })
        .catch((err) => alert(err))
    }
  }
    

  return (
    <View style={s.container}>

      <View style={s.headerContainer}>
        <Text style={s.text}>Create account</Text>
      </View>

      <View style={s.form}>
        <TextInput 
          style={s.email}
          textContentType='emailAddress'
          placeholder='email address'
          placeholderTextColor='grey'
          keyboardType='email-address'
          returnKeyType='next'
          autoCapitalize="none"
          defaultValue={email}
          onChangeText={(txt) => setEmail(txt)}
        />
        <View style={s.passwordContainer}>
          <TextInput
            style={s.password}
            textContentType='password'
            placeholder='password'
            placeholderTextColor='grey'
            secureTextEntry={visible.name === 'eye-off'}
            keyboardType='default'
            returnKeyType='next'
            autoCorrect={false}
            defaultValue={password}
            onChangeText={(txt) => setPassword(txt)}
          />
          <Ionicons 
            name={visible.name}
            size={24}
            color='#1da'
            style={s.eyeContainer}
            onPress={toggleVisibility}
          />
        </View>
        <View style={s.passwordContainer}>
          <TextInput
            style={s.password}
            textContentType='password'
            placeholder='confirm password'
            placeholderTextColor='grey'
            secureTextEntry={true}
            keyboardType='default'
            returnKeyType='go'
            autoCorrect={false}
            defaultValue={checkPword}
            onChangeText={(txt) => setCheckPword(txt)}
          />
        </View>

        <Pressable 
          style={s.regContainer}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={s.register}>sign in instead?</Text>
        </Pressable>
        <Pressable style={s.button} onPress={handleSubmit}>
          <Text style={s.buttonText}>Sign up!</Text>
        </Pressable>

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
  headerContainer: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 40,
    width: '80%',
    top: -20
  },
  text: {
    fontSize: 40,
    color: '#fff'
  },
  form: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: -40
  },
  email: {
    width: '100%',
    height: 60,
    backgroundColor: '#0ff1',
    borderRadius: 5,
    marginBottom: 35,
    padding: 10,
    fontSize: 22,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "#0ff1",
    borderRadius: 5,
    marginBottom: 35,
  },
  password: {
    width: "85%",
    height: 60,
    borderRadius: 5,
    marginBottom: 35,
    padding: 10,
    fontSize: 22,
    color: "#fff",
  },
  eyeContainer: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  register: {
    position: 'absolute',
    left: 51,
    top: -22,
    color: 'white',
    fontSize: 17
  },
  button: {
    width: '100%',
    height: 50,
    top: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1da',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 600
  }
});

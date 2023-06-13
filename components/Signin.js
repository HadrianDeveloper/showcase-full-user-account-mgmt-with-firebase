import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { handleSignin } from "../services/firebase";


export default function Signin({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState({name: 'eye-off'});

    function toggleVisibility() {
        setVisible({name: visible.name === 'eye-off' ? 'eye' : 'eye-off'})
    };

    function handleLogin() {
        if (!email || !password) {
            alert('Can\'t leave any fields blank')
        } else {
            handleSignin(email, password)
            .then((msg) =>{
                msg.startsWith('auth/')
                ? alert(`Error! ${msg.slice(5)}`)
                : navigation.navigate('Home', {email: email})
            })
            .catch((err) => alert('Error! ' + err.slice(5)))
        }
    };

    return (
        <View style={s.container}>
            <View style={s.headerContainer}>
                <Text style={s.title}>Sign in</Text>
            </View>
            <View style={s.form}>
                <TextInput 
                    style={s.email}
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    placeholder="email address"
                    placeholderTextColor='white'
                    keyboardType='email-address'
                    returnKeyType="next"
                    defaultValue={email}
                    onChangeText={(txt) => setEmail(txt)}
                />
                <View style={s.passwordContainer}>
                    <TextInput
                        style={s.password}
                        textContentType="password"
                        placeholder="password"
                        placeholderTextColor='white'
                        keyboard='default'
                        returnKeyType="go"
                        secureTextEntry={visible.name === 'eye-off'}
                        defaultValue={password}
                        onChangeText={(txt) => setPassword(txt)}
                    />
                    <Ionicons 
                        style={s.eyeContainer}
                        name={visible.name}
                        size={24}
                        color='#1da'
                        onPress={toggleVisibility}
                    />
                </View>

                <Pressable 
                    onPress={() => navigation.navigate('ResetPassword', {
                    currEmail: email
                })}>
                    <Text style={s.forgotten}>Forgotten password?</Text>
                </Pressable>
                <Pressable style={s.button} onPress={handleLogin}>
                    <Text style={s.buttonTxt}>Log in!</Text>
                </Pressable>
                <Pressable 
                    style={s.createAccount}
                    onPress={() => navigation.navigate('Signup')} >
                    <Text style={s.createText}>Create an account</Text>
                </Pressable>
            </View>
        </View>
    )
};

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
    title: {
        fontSize: 50,
        color: 'white',
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
    forgotten: {
        color: 'white',
        position: 'absolute',
        left: 44,
        top: -15
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
    buttonTxt: {
        fontSize: 25,
        fontWeight: 600
    },
    createAccount: {
        alignItems: "center",
        justifyContent: "center",
        top: "50%",
        height: 30,
    },
    createText: {
        alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            color: "white",
    }
})
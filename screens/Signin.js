import { useContext, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { handleSignin } from "../services/firebase";
import { UserContext } from '../contexts/UserContext.js';
import GreenButton from "../components/GreenButton";
import BlankButton from "../components/BlankButton";
import PageHeader from "../components/PageHeader";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";


export default function Signin({navigation}) {

    const [user, setUser] = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        if (!email || !password) {
            alert('Can\'t leave any fields blank')
        } else {
            handleSignin(email, password)
            .then((msg) => {
                if (msg.startsWith('auth/')) {
                    alert(`Error! ${msg.slice(5)}`)
                } else {
                    setUser(email);
                    navigation.navigate('Home');
                }
            })
            .catch((err) => alert('Error! ' + err.slice(5)))
        }
    };

    return (
        <View style={s.container}>
            <PageHeader text='Sign in' />
            <View style={s.form}>
                <InputEmail 
                    defaultValue={email}
                    onChangeText={(txt) => setEmail(txt)}/>
                <InputPassword 
                    placeholder='password'
                    defaultValue={password} 
                    onChangeText={(txt) => setPassword(txt)} />
                <Pressable onPress={() => 
                    navigation.navigate('ResetPassword', {currEmail: email})}>
                    <Text style={s.forgotten}>Forgotten password?</Text>
                </Pressable>
                <GreenButton 
                    text='Log in' 
                    onPress={login} />
                <BlankButton 
                    text='Create an account' 
                    onPress={() => navigation.navigate('Signup', {currEmail: email})} />
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
    form: {
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: -40
    },
    forgotten: {
        color: 'white',
        position: 'absolute',
        left: 35,
        top: -15
    }
})
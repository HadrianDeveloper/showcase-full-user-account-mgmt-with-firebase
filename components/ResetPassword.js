import { useState } from "react";
import { Pressable, TextInput, Text, View, StyleSheet } from "react-native";
import { handlePasswordReset } from "../services/firebase";

export default function ResetPassword({navigation, route}) {

    const {currEmail} = route.params;
    const [email, setEmail] = useState(currEmail)

    function resetPassword() {
        handlePasswordReset(email)
            .then((err) => {
                if (err) {
                    alert(`Error! ${err.slice(5)}`)
                } else {
                    alert('An email with reset instructions sent to you')
                    navigation.navigate('Signin')
                }
            })
    };

    return (
        <View style={s.container}>
            <Text style={s.text}>Reset your password</Text>
            <TextInput 
                style={s.email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoFocus
                returnKeyType="go"
                defaultValue={email}
                onChange={(txt) => setEmail(txt)}
            />
            <Pressable style={s.button} onPress={resetPassword}>
                <Text style={s.buttonText}>Reset password</Text>
            </Pressable>
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
    text: {
        top: -20,
        fontSize: 40,
        color: 'white',
        marginBottom: 20,
    },
    email: {
        width: '90%',
        height: 60,
        backgroundColor: '#0ff1',
        borderRadius: 5,
        marginBottom: 35,
        padding: 10,
        fontSize: 22,
        color: '#fff',
    },
    button: {
        width: '80%',
        top: 30,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1da',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 33,
    }
});
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { handlePasswordReset } from "../services/firebase";
import {GreenButton, PageHeader, InputEmail } from '../components/componentIndex'

export default function ResetPassword({navigation, route}) {
    const {currEmail} = route.params;
    const [email, setEmail] = useState(currEmail)

    function resetPassword() {
        handlePasswordReset(email)
            .then((err) => {
                if (err) {
                    alert(`Error! ${err.slice(5)}`)
                } else {
                    alert('An email with reset instructions has been sent to you')
                    navigation.navigate('Signin')
                }
            })
    };

    return (
        <View style={s.container}>
            <PageHeader text='Reset password' />
            <View style={s.form}>
                <InputEmail 
                    defaultValue={email}
                    onChangeText={(txt) => setEmail(txt)}/>
                <GreenButton 
                    text='Log in' 
                    onPress={resetPassword}/>
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
});
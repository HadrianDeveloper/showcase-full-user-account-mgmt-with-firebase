import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GreenButton from "../components/GreenButton";
import BlankButton from "../components/BlankButton";
import PageHeader from "../components/PageHeader";
import InputPassword from "../components/InputPassword";
import { handleSelfDeletion, reauthenticate } from "../services/firebase";


export default function Delete({navigation}) {

    const [password, setPassword] = useState('');

    function deleteMe() {
        reauthenticate(password)
            .then((err) => {
                if (err) {
                    return alert('Error! ' + err.slice(5))
                } else {
                    handleSelfDeletion()
                    .then((err) => {
                        if (err) alert('Error! ' + err.slice(5))
                        else {
                            alert('Account deleted!');
                            navigation.navigate('Signup');
                        }
                    })
            }
        })
    };

    return (
        <View style={s.container}>
            <PageHeader text='Delete account' />
            <View style={s.form}>
                <InputPassword 
                    placeholder='confirm password'
                    defaultValue={password} 
                    onChangeText={(txt) => setPassword(txt)} />
                <GreenButton 
                    text='CANCEL' 
                    onPress={() => navigation.navigate('Home')} />
                <BlankButton 
                    text='Confirm' 
                    onPress={deleteMe} />
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
    }
})
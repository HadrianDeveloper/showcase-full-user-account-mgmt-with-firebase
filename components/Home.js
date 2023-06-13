import { Pressable, Text, View, StyleSheet, TextInput } from "react-native";
import { handleSelfDeletion, handleSignout, reauthenticate } from "../services/firebase";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Home({navigation, route}) {

    const {email} = route.params;

    const [reqDelete, setReqDelete] = useState(false);
    const [visible, setVisible] = useState({name: 'eye-off'});
    const [password, setPassword] = useState('');

    function toggleVisibility() {
        setVisible({name: visible.name === 'eye-off' ? 'eye' : 'eye-off'})
    };

    function signout() {
        handleSignout()
            .then(() => navigation.navigate('Signin'))
    };

    function handleDelete() {
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
            <Text style={s.title}>Welcome {email}</Text>

            <Pressable style={s.button} onPress={signout}>
                <Text style={s.buttonTxt}>Sign out</Text>
            </Pressable>

            {!reqDelete 
                ?
                <Pressable style={s.deleteButton} onPress={() => setReqDelete(true)}>
                    <Text style={s.deleteTxt}>Delete my account</Text>
                </Pressable>
                :
                <>
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
                    <Pressable style={s.deleteButton} onPress={() => setReqDelete(false)}>
                        <Text style={s.deleteTxt}>CANCEL</Text>
                    </Pressable>
                    <Pressable style={s.confirmDeleteButton} onPress={handleDelete}>
                        <Text style={s.deleteButtonTxt}>CONFIRM</Text>
                    </Pressable>
                </>
            }
                        

        </View>
    )
};

const s = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "start",
        paddingTop: 29,
        backgroundColor: '#0C0C5C'
    },
    title: {
        fontSize: 40,
        color: 'white',
        paddingBottom: 22,
    },
    button: {
        top: 25,
        marginBottom: 60,
        backgroundColor: "#11DDAA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        height: 55,
        width: 155,
    },
    deleteButton: {
        top: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonTxt: {
        fontSize: 33,
        color: 'black',
    },
    deleteTxt: {
        fontSize: 25,
        color: 'orange',
    },
    passwordContainer: {
        flexDirection: "row",
        width: "80%",
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
    confirmDeleteButton: {
        top: 55,
        marginBottom: 60,
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        height: 55,
        width: 155,
    },
    deleteButtonTxt: {
        fontSize: 33,
        color: 'black',
        fontWeight: 700,
    },
});
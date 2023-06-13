import { Pressable, Text, View, StyleSheet } from "react-native";
import { handleSignout } from "../services/firebase";

export default function Home({navigation}) {

    function signout() {
        handleSignout()
            .then(() => navigation.navigate('Signin'))
    };

    return (
        <View style={s.container}>
            <Text>
                Welcome
            </Text>
            <Pressable style={s.button} onPress={signout}>
                <Text style={s.buttonTxt}>Sign out</Text>
            </Pressable>
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    button: {
        top: 25,
        backgroundColor: "#11DDAA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        height: 55,
        width: 155,
    },
    buttonTxt: {
        fontSize: 33,
        color: 'black'
    }
});
import { Pressable, Text, StyleSheet } from "react-native";

export default function GreenButton({text, onPress}) {
    return (
        <Pressable 
            style={s.button}
            onPress={onPress}>
            <Text style={s.buttonTxt}>{text}</Text>
        </Pressable>
    )
};

const s = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        top: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1da',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonTxt: {
        fontSize: 25,
        fontWeight: 600
    }
});
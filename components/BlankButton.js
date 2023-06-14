import { Pressable, Text, StyleSheet } from "react-native";

export default function BlankButton({text, onPress}) {
    return (
        <Pressable style={s.linkContainer} onPress={onPress}>
            <Text style={s.text}>{text}</Text>
        </Pressable>
    )
};

const s = StyleSheet.create({
    linkContainer: {
        alignItems: "center",
        justifyContent: "center",
        top: "30%",
        height: 30,
    },
    text: {
        fontSize: 16,
        color: "white",
    }
});
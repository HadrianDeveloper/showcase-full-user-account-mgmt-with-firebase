import { Text, View, StyleSheet } from "react-native";


export default function PageHeader({text}) {
    return (
        <View style={s.container}>
            <Text style={s.text}>
                {text}
            </Text>
        </View>
    )
};


const s = StyleSheet.create({
    container: {
        height: 50,
        margin: 40,
        width: '80%',
        top: -20
    },
    text: {
        fontSize: 44,
        color: 'white'
    }
});
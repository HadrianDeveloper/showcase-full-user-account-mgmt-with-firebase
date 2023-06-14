import { TextInput, StyleSheet } from "react-native";


export default function InputEmail({defaultValue, onChangeText}) {
    return (
        <TextInput 
            style={s.basicField}
            autoCapitalize="none"
            textContentType="emailAddress"
            placeholder="email address"
            placeholderTextColor='#0ff9'
            keyboardType='email-address'
            returnKeyType="next"
            defaultValue={defaultValue}
            onChangeText={onChangeText}
        />
    )
};

const s = StyleSheet.create({
    basicField: {
        width: '100%',
        height: 60,
        backgroundColor: '#0ff1',
        borderRadius: 5,
        marginBottom: 35,
        padding: 10,
        fontSize: 22,
        color: '#fff',
    }
});
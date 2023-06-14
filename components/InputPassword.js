import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";


export default function InputPassword({placeholder, defaultValue, onChangeText}) {

    const [visible, setVisible] = useState({name: 'eye-off'});
    
    function toggleVisibility() {
        setVisible({name: visible.name === 'eye-off' ? 'eye' : 'eye-off'})
    };

    return (
        <View style={s.container}>
            <TextInput
                style={s.password}
                textContentType="password"
                placeholder={placeholder}
                placeholderTextColor='#0ff9'
                keyboard='default'
                returnKeyType="go"
                secureTextEntry={visible.name === 'eye-off'}
                defaultValue={defaultValue}
                onChangeText={onChangeText}
            />
            {placeholder === 'password' &&
                <Ionicons 
                    style={s.eyeContainer}
                    name={visible.name}
                    size={24}
                    color='#1da'
                    onPress={toggleVisibility}
                />
            }

        </View>
    )
};


const s = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        backgroundColor: "#0ff1",
        borderRadius: 5,
        marginBottom: 35,
      },
      basicField: {
        width: '100%',
        height: 60,
        backgroundColor: '#0ff1',
        borderRadius: 5,
        marginBottom: 35,
        padding: 10,
        fontSize: 22,
        color: '#fff',
    },
    password: {
        width: "100%",
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
    }
})
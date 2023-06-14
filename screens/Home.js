import { View, StyleSheet } from "react-native";
import { handleSignout } from "../services/firebase";
import GreenButton from "../components/GreenButton";
import PageHeader from "../components/PageHeader";



export default function Home({navigation}) {

    function signout() {
        handleSignout()
            .then(() => navigation.navigate('Signin'))
    };

    return (
        <View style={s.container}>
            <PageHeader text='Home' />
            <View style={s.settingsContainer}>
                <GreenButton 
                    text='Sign out' 
                    onPress={signout} />
                <GreenButton 
                    text='Delete my account' 
                    onPress={() => navigation.navigate('Delete')} />
            </View>           
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
        width: '100%',
        height: '100%',
        backgroundColor: '#0C0C5C',
    },
    settingsContainer: {
        flex: 1,
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
    }
});
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';
import HomePage from './HomePage';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Context } from '../Context';

GoogleSignin.configure({
    webClientId:
        '183012769126-p49ocuh0jlavlri58he356dbpfet7gdl.apps.googleusercontent.com',
});

const LogIn = ({ navigation }) => {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [context, setContext] = useContext(Context);

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken, user } = await GoogleSignin.signIn();
        dispatchUserEvent('LOGIN_USER', user);

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    const dispatchUserEvent = (actionType, payload) => {
        switch (actionType) {
            case 'LOGIN_USER':
                setContext(payload);
                return;
            default:
                return;
        }
    };
    // todo complete the sign-out implementation
    // const signOut = () => {
    //     auth().signOut().then(() => console.log('User signed out!'));
    // }



    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) {
            setInitializing(false);
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.signinbox}>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: 'center',
                        color: '#A6290F',
                        fontWeight: 'bold',
                    }}>
                    Register or SignIn to Simple Todo Manager
                </Text>
                <View style={styles.logInButtonBox}>
                    <View style={{ padding: 5 }}>
                        <Button title="LogIn with Facebook" />
                    </View>
                    <View style={{ padding: 5 }}>
                        {/* <GoogleSigninButton
                            style={{ height: 48 }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={() => _signIn()}
                        /> */}
                        <Button
                            title="LogIn with Google"
                            onPress={() => onGoogleButtonPress()}
                        />
                        {/* <Button title="LogIn with Google" onPress={() => onGoogleButtonPress().then(() =>  signIn({ user, initializing }))}></Button> */}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default LogIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#c9c9c9',
    },
    signinbox: {
        flex: 0,
        flexDirection: 'column',
    },
    logInButtonBox: {
        padding: 20,
    },
});

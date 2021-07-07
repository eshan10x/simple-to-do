//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderMenu from '../Components/HeaderMenu';
import { Context } from '../Context';

// create a component
const DoneScreen = () => {

    const [context, setContext] = useContext(Context);

    return (
        <View style={styles.container}>
            <HeaderMenu props={context} />
            <Text>MyComponent</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9c9c9',
    },
});

//make this component available to the app
export default DoneScreen;

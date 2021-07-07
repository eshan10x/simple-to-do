import { NavigationHelpersContext } from '@react-navigation/core';
import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, FlatList, ScrollView } from 'react-native';
import AddTodoButton from '../Components/AddToDoButton';
import HeaderMenu from '../Components/HeaderMenu';
import { Context } from '../Context';

const HomePage = ({ route }) => {

    const [context, setContext] = useContext(Context);
    const [data, setData] = useState([]);

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
            date: '02/07/2020'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            date: '02/07/2020'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            date: '02/07/2020'
        },
    ];

    const Item = ({ title, date }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text>{date}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} date={item.date} />
    );
    // const { signOut } = React.useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <HeaderMenu props={context} />
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <AddTodoButton />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9c9c9',
    },
    item: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18
    }
})

export default HomePage;
import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderMenu from '../Components/HeaderMenu';
import { Context } from '../Context';
import { TodoContext } from '../TodoContext';
import { FAB } from 'react-native-paper';

const HomePage = ({ navigation }) => {

    const [context, setContext] = useContext(Context);
    const [data, setData] = useState('');
    const [todocontext, setTodoContext] = useContext(TodoContext);

    useEffect(() => {
        setData( [...todocontext, ...data]);
    }, [todocontext]);

    const Item = ({ title, date }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.datebox}>
                <Icon name='calendar'/>
                <Text style={{marginLeft: 5}}>{date}</Text>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} date={item.dueDate} />
    );
    // const { signOut } = React.useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <HeaderMenu props={context} />
            <ScrollView>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
            <FAB
                style={styles.fab}
                icon='plus'
                medium
                onPress={() => navigation.navigate('AddTodoItem')}
            />
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
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18
    },
    datebox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#A6290F',
    },
})

export default HomePage;
//import liraries
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import HeaderMenu from '../Components/HeaderMenu';
import { Context } from '../Context';
import { TodoContext } from '../TodoContext';


// create a component
const AddTodoItem = ({ navigation, props }) => {

    const [context, setContext] = useContext(Context);
    const [todocontext, setTodoContext] = useContext(TodoContext);

    const [value, setValue] = useState([]);

    const onPress = () => {
        dispatchUserEvent("todoItem",value);
        navigation.navigate("HomePage");
    }

    const dispatchUserEvent = (actionType, payload) => {
        console.log("PayLoad..", payload);
        switch (actionType) {
            case 'todoItem':
                setTodoContext([payload]);
                return;
            default:
                return;
        }
    };


    return (
        <View style={styles.container}>
            <HeaderMenu props={context} />
            <View style={styles.inputsBox}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title</Text>
                <TextInput style={{ height: 50 }} placeholder="Task Title"
                    onChangeText={
                        (text) => setValue({ ...value, title: text })
                    }
                    value={value.title}
                />

                <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Assignee</Text>
                <TextInput style={{ height: 50 }} placeholder="Select the Assignee"
                    onChangeText={
                        (text) => setValue({ ...value, assignee: text })
                    }
                    value={value.assignee}
                />

                <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Due Date</Text>
                <TextInput style={{ height: 50 }} placeholder="DD/MM/YYYY"
                    onChangeText={
                        (text) => setValue({ ...value, dueDate: text })
                    }
                    value={value.dueDate}
                />
            </View>
            <View style={{ padding: 20, paddingTop: 0 }}>
                <Button title="+ Add the Task" color='#A6290F'onPress={onPress} />
            </View>


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9c9c9',
    },
    inputsBox: {
        padding: 20,
    }
});

//make this component available to the app
export default AddTodoItem;

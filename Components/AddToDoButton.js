import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

const AddTodoButton = ({ navigation }) => {

    return (
        <FAB
            style={styles.fab}
            icon='plus'
            medium
            onPress={() => navigation.navigate('AddTodoItem')}
        />
        
    )
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#A6290F',
    },
})

export default AddTodoButton;
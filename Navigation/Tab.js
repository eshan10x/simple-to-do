import React from "react";
import {
    View,
    Image,
    StyleSheet, Text, TouchableOpacity
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomePage from "../Screens/HomePage";
import LogIn from "../Screens/LogIn";
import Icon from 'react-native-vector-icons/FontAwesome';
import DoneScreen from "../Screens/DoneScreen";

const Tab = createBottomTabNavigator()

const Tabs = ({ navigation }) => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: true,
                activeTintColor: '#A6290F',
                inactiveTintColor: '#000000',
                tabStyle: {
                    marginTop: 5
                },
                labelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold'
                }
            }}
        >
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    tabBarLabel: 'Todo',
                    tabBarIcon: ({ color }) => (
                        <Icon name="th-list" color={color} size={20}></Icon>
                    )
                }}
            />

            <Tab.Screen
                name="DoneScreen"
                component={DoneScreen}
                options={{
                    tabBarLabel: 'Done',
                    tabBarIcon: ({ color }) => (
                        <Icon name="check" color={color} size={20}></Icon>
                    )
                }}
            />

            {/* <Tab.Screen
                name="AddTodoItem"
                component={AddTodoItem}
                options={{
                    tabBarLabel: 'AddToDo',

                }}
            /> */}

            <Tab.Screen
                name="LogIn"
                component={LogIn}
                options={{
                    tabBarLabel: 'Logout',
                    tabBarVisible: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="sign-out" color={color} size={20}></Icon>
                    )
                }}
            />


        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;
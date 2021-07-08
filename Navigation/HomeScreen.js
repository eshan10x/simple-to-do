import React, { useState } from 'react'
import { createStackNavigator, } from "@react-navigation/stack";
import Tabs from '../Navigation/Tab';
import AddTodoItem from '../Screens/AddTodoItem';
import HeaderMenu from '../Components/HeaderMenu';
import LogIn from '../Screens/LogIn';
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={'HomePage'}
    >

      <Stack.Screen
        name="HomePage"
        component={Tabs}
      />

      <Stack.Screen
        name="AddTodoItem"
        component={AddTodoItem}
      />

    </Stack.Navigator>

  )
}

export default HomeScreen
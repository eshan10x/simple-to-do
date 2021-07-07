import React, { useState } from 'react'
import { createStackNavigator, } from "@react-navigation/stack";
import Tabs from '../Navigation/Tab';
import AddTodoItem from '../Screens/AddTodoItem';
import HeaderMenu from '../Components/HeaderMenu';
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

      <Stack.Screen
        name="HeaderMenu"
        component={HeaderMenu}
      />

    </Stack.Navigator>

  )
}

export default HomeScreen
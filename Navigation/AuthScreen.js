
import React from 'react'
import { createStackNavigator, } from "@react-navigation/stack";
import LogIn from '../Screens/LogIn';
import AddTodoItem from '../Screens/AddTodoItem';
import HeaderMenu from '../Components/HeaderMenu';


const Auth = createStackNavigator();

const AuthScreen = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={'LogIn'}
    >
      <Auth.Screen
        name="LogIn"
        component={LogIn}
      />

      <Auth.Screen
        name="AddTodoItem"
        component={AddTodoItem}
      />

    </Auth.Navigator>
  )
}

export default AuthScreen
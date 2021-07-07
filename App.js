import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './Navigation/AuthScreen';
import HomeScreen from './Navigation/HomeScreen';
import { Context } from './Context';


const App = () => {
  const [context, setContext] = useState('');

  return (
    <Context.Provider value={[context, setContext]}>
      <NavigationContainer>
        {context.id == null ?
          <AuthScreen />
          :
          <HomeScreen />
        }
      </NavigationContainer>
    </Context.Provider>
  )
}

export default App;

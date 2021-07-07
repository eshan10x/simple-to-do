import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './Navigation/AuthScreen';
import HomeScreen from './Navigation/HomeScreen';
import { Context } from './Context';
import { TodoContext } from './TodoContext';

const App = () => {
  const [context, setContext] = useState('');
  const [todocontext, setTodoContext] = useState('');

  return (
    <Context.Provider value={[context, setContext]}>
      <TodoContext.Provider value={[todocontext, setTodoContext]}>
        <NavigationContainer>
          {context.id == null ?
            <AuthScreen />
            :
            <HomeScreen />
          }
        </NavigationContainer>
      </TodoContext.Provider>
    </Context.Provider>
  )
}

export default App;

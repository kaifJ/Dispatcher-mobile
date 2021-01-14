/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Validate from './src/components/Validate'
import Register from './src/components/Register'

const Stack = createStackNavigator()
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Validate" component={Validate} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App

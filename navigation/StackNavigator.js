import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../components/Home';
import Like from '../components/Like';
import Tuto from '../components/Tuto';




const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
            animation: 'slide_from_right',
          }}
        >
          
          <Stack.Screen name="Tuto" component={Tuto} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Like" component={Like} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


export default StackNavigator

const styles = StyleSheet.create({})

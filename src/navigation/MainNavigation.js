import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import TabNavigation from './TabNavigation';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Details from '../AppView/Details/Details';
import Screens from '../constant/Screens';
import Step from '../AppView/Steps/Step';


const Stack = createStackNavigator();

function MainNavigation(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, headerStyle: { backgroundColor: "pink", }, headerTintColor: "black", headerTitleStyle: {}, headerTitleAlign: 'center' }}>
      <Stack.Screen name="Dashboard" component={TabNavigation} options={({ route }) => ({ headerTitle: getFocusedRouteNameFromRoute(route) })}  /> 
      <Stack.Screen name={Screens.DETAILS} component={Details}    /> 
      <Stack.Screen name={Screens.STEPS} component={Step}    /> 

    </Stack.Navigator>
  )
}

export default MainNavigation

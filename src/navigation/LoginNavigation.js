import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../accounts/Login";
import Register from "../accounts/Register";

const Stack = createStackNavigator();

function LoginNavigation(props) {


  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName="Login"
  >
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Login" component={Login} />

  </Stack.Navigator>
  );
}

export default LoginNavigation;
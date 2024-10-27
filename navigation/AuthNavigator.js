import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login.js";
import Signup from "../screens/Signup.js";
import ForgotPassword from "../screens/ForgotPassword";
import OTPVerification from "../screens/OTPVerification.js";
import NewPassword from "../screens/NewPassword.js";
import Success from "../screens/Success.js";
import SplashScreen from "../screens/SplashScreen.js";
const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="SplashScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="SpashScreen" component={SplashScreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="OTPVerification" component={OTPVerification} />
    <Stack.Screen name="NewPassword" component={NewPassword} />
    <Stack.Screen name="Success" component={Success} />
  </Stack.Navigator>
);

export default AuthNavigator;

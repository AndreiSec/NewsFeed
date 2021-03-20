// app/router.js

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import React from "react";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  SettingsPage,
} from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="StartScreen" component={StartScreen} />

    <AuthStack.Screen
      name="LoginScreen"
      component={LoginScreen}
      //   updateLoginState={props.updateLoginState}
    />
    <AuthStack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      //   updateLoginState={props.updateLoginState}
    />

    <AuthStack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
    />
  </AuthStack.Navigator>
);

const AppTabStack = createBottomTabNavigator();

export const AppDrawerScreen = () => (
  <AppTabStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AppTabStack.Screen name="Dashboard" component={Dashboard} />
    <AppTabStack.Screen
      name="SettingsPage"
      component={SettingsPage}
      //   updateLoginState={props.updateLoginState}
    />
  </AppTabStack.Navigator>
);

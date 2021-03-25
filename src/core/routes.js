// app/router.js

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  SettingsPage,
} from "../screens";
import { Octicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { theme } from "./theme";

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

const AppTabStack = createMaterialBottomTabNavigator();

export const AppDrawerScreen = () => (
  <AppTabStack.Navigator
    initialRouteName="Dashboard"
    labeled={false}
    activeColor={theme.colors.orange}
    inactiveColor={theme.colors.cream}
    screenOptions={{
      headerShown: false,
    }}
    barStyle={{ backgroundColor: theme.colors.grey }}
  >
    <AppTabStack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarLabel: "Dash",
        tabBarIcon: ({ color }) => (
          <Octicons name="home" color={color} size={26} />
        ),
      }}
    />
    <AppTabStack.Screen
      name="Settings"
      component={SettingsPage}
      options={{
        tabBarLabel: "Dash",
        tabBarIcon: ({ color }) => (
          <Octicons name="settings" color={color} size={26} />
        ),
      }}
      //   updateLoginState={props.updateLoginState}
    />
  </AppTabStack.Navigator>
);

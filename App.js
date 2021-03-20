import React from "react";
import { Provider } from "react-native-paper";

import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  AppSplashScreen,
  SettingsPage,
} from "./src/screens";
import {
  tokenInsertLocalStorage,
  tokenInLocalStorage,
} from "./src/helpers/localstorage";
import * as SplashScreen from "expo-splash-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AuthContext } from "./src/core/context";
import { AuthStackScreen, AppDrawerScreen } from "./src/core/routes";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";

let isLoggedIn = false;
// const Stack = createStackNavigator();
export default function App() {
  const [appIsReady, setIsReady] = React.useState(false);
  const [userTokenPresent, setUserTokenPresent] = React.useState(false);

  // switchLoggedInState = () => {
  //   console.log("Login state switched in app.js function");
  //   this.setState({ appisLoggedIn: !this.state.appisLoggedIn });
  // };

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserTokenPresent(true);
      setIsReady(true);
    },
    signOut: () => {
      setUserTokenPresent(false);
      setIsReady(true);
    },
  }));

  useEffect(() => {
    const getData = async () => {
      try {
        isLoggedIn = await tokenInLocalStorage();

        if (isLoggedIn) {
          setUserTokenPresent(true);
        }
        console.log("Is logged in already? " + userTokenPresent);
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        // this.setState({ appIsReady: true }, async () => {
        //   await SplashScreen.hideAsync();
        // });
      }
    };
    getData();
    return () => null;
  }, []);
  // async componentDidMount() {
  //   // Prevent native splash screen from autohiding
  //   try {
  //     await SplashScreen.preventAutoHideAsync();
  //   } catch (e) {
  //     console.warn(e);
  //   }
  //   this.prepareResources();
  // }

  // /**
  //  * Method that serves to load resources and make API calls
  //  */
  // prepareResources = async () => {
  //   try {
  //     isLoggedIn = await tokenInLocalStorage();

  //     if (isLoggedIn) {
  //       this.setState({ appisLoggedIn: true });
  //     }
  //     console.log("Is logged in already? " + this.state.appisLoggedIn);
  //   } catch (e) {
  //     console.warn(e);
  //   } finally {
  //     this.setState({ appIsReady: true }, async () => {
  //       await SplashScreen.hideAsync();
  //     });
  //   }
  // };

  if (!appIsReady) {
    return <AppSplashScreen></AppSplashScreen>;
  }
  return (
    <AuthContext.Provider theme={theme} value={authContext}>
      <NavigationContainer>
        {userTokenPresent ? (
          <>
            <AppDrawerScreen></AppDrawerScreen>
          </>
        ) : (
          <AuthStackScreen></AuthStackScreen>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

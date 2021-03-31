import React from "react";

import { theme } from "./src/core/theme";
import { tokenInLocalStorage } from "./src/helpers/localstorage";

import { AuthContext } from "./src/core/context";
import { AuthStackScreen, AppDrawerScreen } from "./src/core/routes";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { StatusBar } from "react-native";

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
        console.log("isLoggedIn variable: " + isLoggedIn);
      } catch (e) {
        console.warn(e);
      } finally {
        if (isLoggedIn == true) {
          setUserTokenPresent(true);
        }
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
    return null;
  }
  return (
    <AuthContext.Provider theme={theme} value={authContext}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={theme.colors.orange}
          translucent={true}
        />
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

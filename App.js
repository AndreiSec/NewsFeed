import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard, AppSplashScreen
} from './src/screens'
import {tokenInsertLocalStorage,tokenInLocalStorage} from './src/helpers/localstorage'
import * as SplashScreen from 'expo-splash-screen';


let isLoggedIn = false;
const Stack = createStackNavigator()
export default class App extends React.Component {
  screenToOpen = "StartScreen"
  state = {
    appIsReady: false,
    appisLoggedIn: false
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    try {
      isLoggedIn = await tokenInLocalStorage();
      
      if(isLoggedIn){this.setState({appisLoggedIn: true})}
      console.log("Is logged in already? " + this.state.appisLoggedIn)

      if(isLoggedIn){
        screenToOpen = "DashBoard"
      }
    } catch (e) {
      console.warn(e);
    } finally {
      

      this.setState({ appIsReady: true }, async () => {
        await SplashScreen.hideAsync();
      });
    }
  };

  render() {
    if (!this.state.appIsReady) {
      return(<AppSplashScreen>

      </AppSplashScreen>)
    }
    return (
      <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >{isLoggedIn? (
            //console.log("D"),
            <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
           <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          
          <Stack.Screen
           name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
              
            </>
          ) : (
            // console.log("E"),
            <>
            <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
              
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
           <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          
          <Stack.Screen
           name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
            </>
          )}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
    
  }
}


// const App = () => {
// const isLoggedIn =  tokenInLocalStorage();
// console.log("Is logged in already? " + JSON.stringify(isLoggedIn))
// let screenToOpen = "DashBoard"

// if(isLoggedIn){
//   screenToOpen = "DashBoard"
// }

//   return (
//     <Provider theme={theme}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName={screenToOpen}
//           screenOptions={{
//             headerShown: false,
//           }}
//         >
//           <Stack.Screen name="StartScreen" component={StartScreen} />
//           <Stack.Screen name="LoginScreen" component={LoginScreen} />
//           <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//           <Stack.Screen name="Dashboard" component={Dashboard} />
//           <Stack.Screen
//             name="ForgotPasswordScreen"
//             component={ForgotPasswordScreen}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   )
// }

// export default App
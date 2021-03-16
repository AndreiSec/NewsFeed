import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { logoutFunction } from '../helpers/backendConnection'
import { readTokenInLocalStorage, deleteAuthToken } from '../helpers/localstorage'
import Button from './Button'

const LogoutButton = ({nav}) => (
    <Button
    mode="outlined"
    onPress={() => logoutButtonFunction(nav)}
  >
    Logout
  </Button>
)


async function logoutButtonFunction(nav){
    // console.log("Token in storage:" + JSON.stringify(await readTokenInLocalStorage()))

    const token = JSON.stringify(await readTokenInLocalStorage());
    logoutFunction(token);
    deleteAuthToken();
    nav.reset({
        index: 0,
        routes: [{ name: 'StartScreen' }],
      })
      console.log("Successful Logout")
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})

export default LogoutButton

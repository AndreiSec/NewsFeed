import React from 'react'
import Background from '../components/Background'
import Logo_N from '../components/Logo_N'
import Logo_newsfeed from '../components/Logo_newsfeed'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import {theme} from '../core/theme'

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo_newsfeed />
    <Paragraph>Start your day effortlessly</Paragraph>
  
    <Button mode="contained" 
    onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="contained"
      color = {theme.colors.grey}
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
  </Background>
)

export default StartScreen

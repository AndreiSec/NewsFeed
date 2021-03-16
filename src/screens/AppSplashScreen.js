import React from 'react'
import {View, StyleSheet} from 'react-native'
import {BackgroundPaper, BackgroundDots} from '../components/Background'
import Logo_N from '../components/Logo_N'
import Logo_newsfeed from '../components/Logo_newsfeed'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import {theme} from '../core/theme'
import styled from 'styled-components/native'
// import BackgroundAnimation from '../components/BackgroundAnimation'

const AppSplashScreen = ({ navigation }) => (
  <BackgroundPaper>
    <Logo_newsfeed />
    
    
    
  </BackgroundPaper>
)


const styles = StyleSheet.create({
  background: {
    flex:0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },

  
})

export default AppSplashScreen

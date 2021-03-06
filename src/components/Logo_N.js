import React from 'react'
import {Image, StyleSheet } from 'react-native'

const Logo_N = () => (
  <Image source={require('../assets/logos/LOGO_N_300.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})

export default Logo_N

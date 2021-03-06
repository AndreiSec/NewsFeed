import React from 'react'
import Background1 from '../components/Background'
import Logo_N from '../components/Logo_N'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

const Dashboard = ({ navigation }) => (
  <Background1>
    <Logo_N />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favorite code editor and start
      editing this project.
    </Paragraph>
    <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })
      }
    >
      Logout
    </Button>
  </Background1>
)

export default Dashboard

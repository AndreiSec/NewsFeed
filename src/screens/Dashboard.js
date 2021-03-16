import React from 'react'
import {BackgroundPaper, BackgroundDots} from '../components/Background'
import Logo_N from '../components/Logo_N'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import LogoutButton from '../components/LogoutButton'

const Dashboard = ({ navigation }) => (
  <BackgroundDots>
    <Logo_N />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favorite code editor and start
      editing this project.
    </Paragraph>
    <LogoutButton nav = {navigation}>
      
    </LogoutButton>

  </BackgroundDots>
)

export default Dashboard

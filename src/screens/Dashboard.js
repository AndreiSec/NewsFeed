import React from "react";
import { BackgroundPaper, BackgroundDots } from "../components/Background";
import Logo_N from "../components/Logo_N";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

const Dashboard = ({ navigation }) => (
  <BackgroundDots>
    <Logo_N />
    <Header>Let’s start</Header>
    <Paragraph>Bruh</Paragraph>
  </BackgroundDots>
);

export default Dashboard;

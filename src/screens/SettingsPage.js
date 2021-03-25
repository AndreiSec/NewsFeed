import React from "react";
import { BackgroundDots } from "../components/Background";
import Logo_N from "../components/Logo_N";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { AuthContext } from "../core/context";
import { theme } from "../core/theme";
import { logoutFunction } from "../helpers/backendConnection";
import {
  readTokenInLocalStorage,
  deleteAuthToken,
} from "../helpers/localstorage";

const SettingsPage = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  async function logoutButtonFunction() {
    // console.log("Token in storage:" + JSON.stringify(await readTokenInLocalStorage()))

    const token = JSON.stringify(await readTokenInLocalStorage());
    await logoutFunction(token);
    deleteAuthToken();
    signOut();
    // nav.reset({
    //   index: 0,
    //   routes: [{ name: "StartScreen" }],
    // });
    console.log("Successful Logout");
  }

  return (
    <BackgroundDots>
      <Logo_N />
      <Header>Settings</Header>
      <Paragraph>Settings go here..</Paragraph>
      <Button
        mode="contained"
        onPress={logoutButtonFunction}
        color={theme.colors.orange}
      >
        Logout
      </Button>
    </BackgroundDots>
  );
};

export default SettingsPage;

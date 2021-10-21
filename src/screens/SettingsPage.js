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
import Logo_newsfeed_small from "../components/Logo_newsfeed_small";

const SettingsPage = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  function changeUserFunction() {}

  function changePassFunction() {}

  async function logoutButtonFunction() {
    // console.log("Token in storage:" + JSON.stringify(await readTokenInLocalStorage()))

    const token = JSON.stringify(await readTokenInLocalStorage());
    await logoutFunction(token);
    await deleteAuthToken();
    await signOut();
    // nav.reset({
    //   index: 0,
    //   routes: [{ name: "StartScreen" }],
    // });
    console.log("Successful Logout");
  }

  return (
    <BackgroundDots>
      <Logo_newsfeed_small />
      <Header>Settings</Header>
      <Button
        mode="contained"
        onPress={changeUserFunction}
        color={theme.colors.grey}
      >
        Change username
      </Button>
      <Button
        mode="contained"
        onPress={changePassFunction}
        color={theme.colors.orange}
      >
        Change password
      </Button>
      <Button
        mode="contained"
        onPress={logoutButtonFunction}
        color={theme.colors.grey}
      >
        Logout
      </Button>
    </BackgroundDots>
  );
};

export default SettingsPage;

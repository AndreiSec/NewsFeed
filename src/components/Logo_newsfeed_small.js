import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo_newsfeed_small = () => (
  <View style={styles.logoBar}>
    <View style={styles.containerStyle}>
      <Image
        source={require("../assets/logos/LOGO_N_300.png")}
        style={styles.Logo_N}
      />
    </View>
    <View>
      <Image
        source={require("../assets/logos/LOGO_EWSFEED.png")}
        style={styles.Logo_EWSFEED}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  logoBar: {
    height: 10,
    // paddingBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftLogoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "green",
  },
  rightLogoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "red",
  },
  Logo_N: {
    height: 28,
    width: 30,
    paddingRight: 35,
    resizeMode: "contain",
  },
  Logo_EWSFEED: {
    height: 140,
    width: 140,
    resizeMode: "contain",
  },
});

export default Logo_newsfeed_small;

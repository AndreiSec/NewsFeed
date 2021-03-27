import React from "react";
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { theme } from "../core/theme";

const NewsList = (props) => <FlatList />;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});

export default NewsList;

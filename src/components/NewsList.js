import React from "react";
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { theme } from "../core/theme";

const NewsList = (props) => (
  <FlatList
    data={props.data}
    renderItem={renderItem}
    keyExtractor={(item) => item.title}
  />
);

const renderItem = ({ item }) => <Item title={item.title} />;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

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

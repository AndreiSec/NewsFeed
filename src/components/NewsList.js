import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { theme } from "../core/theme";

const NewsList = (props) => {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const listItemSelected = (item) => {
    console.log("PRESSED");
    setSelectedTitle(item.title);
  };
  const renderItem = ({ item }) => {
    const backgroundColor =
      item.title === selectedTitle ? theme.colors.orange : theme.colors.cream;
    const color = item.title === selectedTitle ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => listItemSelected(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      extraData={selectedTitle}
    />
  );
};

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default NewsList;

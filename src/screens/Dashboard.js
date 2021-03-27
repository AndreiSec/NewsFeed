import React from "react";
import { BackgroundDots } from "../components/Background";
import Logo_N from "../components/Logo_N";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import NewsList from "../components/NewsList";
import { useEffect } from "react";
import { NewsTypeContext } from "../core/NewsTypeContext";
import { theme } from "../core/theme";
import DropDownSelector from "../components/DropDownPicker";
import Logo_newsfeed from "../components/Logo_newsfeed";

const Dashboard = ({ navigation }) => {
  const [newsType, setNewsType] = React.useState("WORLD");

  const newsTypeContext = React.useMemo(() => ({
    updateNewsType: (newsSelection) => {
      console.log("News Type: " + newsSelection);
      setNewsType(newsSelection);
    },
  }));

  useEffect(() => {
    return () => null;
  }, []);

  return (
    <NewsTypeContext.Provider theme={theme} value={newsTypeContext}>
      <BackgroundDots>
        <SafeAreaView>
          <View style={styles.bar}>
            <Logo_newsfeed />
          </View>

          <DropDownSelector />

          <NewsList />
        </SafeAreaView>
      </BackgroundDots>
    </NewsTypeContext.Provider>
  );
};

const styles = StyleSheet.create({
  bar: {
    resizeMode: "cover",
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    padding: 10,
  },
});

export default Dashboard;

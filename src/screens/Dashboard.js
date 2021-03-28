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
import Logo_newsfeed_small from "../components/Logo_newsfeed_small";
import { StatusBar } from "react-native";
import { newsFetchAPI } from "../helpers/newsFetcherApi";

const Dashboard = ({ navigation }) => {
  const [newsType, setNewsType] = React.useState("WORLD");
  const [rssFeedArray, setRssFeedArray] = React.useState([]);
  const newsTypeContext = React.useMemo(() => ({
    updateNewsType: (newsSelection) => {
      console.log("News Type: " + newsSelection);
      setNewsType(newsSelection);
      getData();
    },
  }));

  const getData = async () => {
    try {
      var tempRssJson;
      var tempRssArray = [];
      let RSS = await newsFetchAPI(newsType);
      // console.log(RSS.items);
      RSS.items.forEach((item) => {
        // console.log(item.title + "\n");
        tempRssJson = {
          title: item.title,
          link: item.links[0].url,
          datePublished: item.published.slice(0, 16),
        };
        tempRssArray.push(tempRssJson);
      });
      setRssFeedArray(tempRssArray);
      console.log("Updated state: " + newsType);
    } catch (e) {
      console.warn(e);
    } finally {
    }
  };

  useEffect(() => {
    getData();
    return () => null;
  }, []);

  return (
    <NewsTypeContext.Provider theme={theme} value={newsTypeContext}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={theme.colors.orange}
        translucent={true}
      />
      <BackgroundDots>
        <SafeAreaView>
          <View style={styles.bar}>
            <Logo_newsfeed_small />
          </View>
          <DropDownSelector />
        </SafeAreaView>
        <NewsList data={rssFeedArray} />
      </BackgroundDots>
    </NewsTypeContext.Provider>
  );
};

const styles = StyleSheet.create({
  bar: {
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    padding: 10,
  },
});

export default Dashboard;

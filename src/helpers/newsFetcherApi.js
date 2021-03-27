const baseURL = "https://news.google.com/news/rss/headlines/section/topic/";
let topicURL;

import * as rssParser from "react-native-rss-parser";

export async function newsFetchAPI(newsType) {
  topicURL = baseURL + newsType;
  return fetch(topicURL)
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss.title);
      console.log(rss.items.length);
    });
}

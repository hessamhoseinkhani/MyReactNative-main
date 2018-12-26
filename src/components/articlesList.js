// requiered react native libraries
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

// requierd Components
import EachCard from "./eachCard";
import ArticleContent from "./articleContent";

const ArticlesList = props => {
  // console.log("this is what u searching :" , props);

  const excerpCleaner = str => {
    return str.search("[&hellip;]")
      ? str
          .replace("<p>", "")
          .replace("</p>", "")
          .replace("[&hellip;]", "")
      : str.replace("<p>", "").replace("</p>", "");
  };

  const renderArticles = articles =>
    props.data.Loaded ? (
      articles.map((eachCard, i) => (
        <TouchableOpacity
          key={eachCard.id}
          onPress={() =>
            props.navigation.navigate("Article", {
              content: eachCard.content.rendered,
              title: eachCard.title.rendered,
              allProps: props
            })
          }
        >
          <EachCard
            key={eachCard.id}
            Title={eachCard.title.rendered}
            Content={excerpCleaner(eachCard.excerpt.rendered)}
            Author={eachCard._embedded.author[0].name}
            Date={eachCard.date}
            PicSrc={eachCard._embedded["wp:featuredmedia"]["0"].source_url}
            selcted={true}
          />
        </TouchableOpacity>
      ))
    ) : (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color="#0090B0" />
      </View>
    );

  return (
    <View>
      {renderArticles(props.data.articles)}
      {props.data.MoreLoaded ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
        >
          <ActivityIndicator size="small" color="#0090B0" />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
  }
});

export default ArticlesList;

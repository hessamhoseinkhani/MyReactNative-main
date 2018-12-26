// requiered react native libraries
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Button,
  Card,
  Title,
  Paragraph,
  Drawer,
  Appbar,
  DefaultTheme
} from "react-native-paper";

// required Redux requiered libraries
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// requierd Components
import EachCard from "../components/eachCard";
import ArticlesList from "../components/articlesList";
import { articlesListAll, latestURL } from "../actions";

class CardsContainer extends Component {
  componentWillMount() {
    this.props.articlesListAll(
      `http://chetor.com/wp-json/wp/v2/posts?_embed&page=1`
    );
    this.props.latestURL(`http://chetor.com/wp-json/wp/v2/posts?_embed&page=`);
  }

  render() {
    // console.log("****** we are in cards container");
    return (
      <View>
        <ArticlesList {...this.props} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ articlesListAll, latestURL }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContainer);

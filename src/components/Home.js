// requiered react native libraries
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Animated
} from "react-native";
import { Font } from "expo";
// required Redux requiered libraries
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// requierd Components
import Header from "./header";
import EachCard from "./eachCard";
import reducers from "../reducers";
import CardsContainer from "../containers/cards_container";
import {
  articlesListMore,
  latestURL,
  incrementLoadedPage,
  loadMoreFalser,
  headerTitle
} from "../actions";

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

class Home extends React.Component {
  state = {
    fontLoaded: false,
    viewedPage: 2
  };

  async componentDidMount() {
    await Font.loadAsync({
      "IRANYekanMobile-Regular": require("../../assets/fonts/IRANYekanMobile-Regular.ttf"),
      "IRANYekanMobile-Bold": require("../../assets/fonts/IRANYekanMobile-Bold.ttf"),
      "IRANYekanMobile-Light": require("../../assets/fonts/IRANYekanMobile-Light.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: "#0090B0" }} />
    )
  };

  render() {
    //console.log("data i am seeking for" , this.props);

    return (
      <View>
        {this.state.fontLoaded ? (
          <View>
            <Header {...this.props} />

            <Animated.ScrollView
              removeClippedSubviews={true}
              style={{ marginBottom: 155 }}
              onScroll={({ nativeEvent }) => {
                if (isCloseToBottom(nativeEvent)) {
                  this.props.loadMoreFalser();
                  this.props.incrementLoadedPage(this.props.data.LoadedPage);
                  this.props.articlesListMore(
                    this.props.data.currentURL + this.props.data.LoadedPage
                  );
                }
              }}
              scrollEventThrottle={400}
            >
              <CardsContainer {...this.props} />
            </Animated.ScrollView>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    marginLeft: 125,
    marginRight: 125
  },
  appBar: {
    backgroundColor: "black"
  },
  textStyle: {
    marginLeft: 16
  },
  iconsStyle: {
    color: "grey"
  },
  cardStyle: {
    width: 100,
    height: 100,
    alignSelf: "flex-end",
    marginRight: 25,
    flexDirection: "row"
  },
  rowStyle: {
    flexDirection: "row"
  },
  paragraghStyle: {
    width: 200,
    height: 70,
    marginTop: 10,
    marginRight: 25,
    fontSize: 20,
    fontWeight: "bold"
  },
  titleStyle: {
    fontSize: 15,
    fontFamily: "normal",
    color: "grey"
  },
  nonTitleStyle: {
    fontSize: 15,
    fontFamily: "normal"
  }
});

function mapStateToProps(state) {
  return {
    data: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      articlesListMore,
      latestURL,
      incrementLoadedPage,
      loadMoreFalser,
      headerTitle
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

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
import { Icon } from "native-base";

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

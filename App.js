// requiered react native libraries
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import { Font } from "expo";
import { Drawer } from "native-base";

// required Redux requiered libraries
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";

// requierd Components
import Index from "./src/components";
import Home from "./src/components/Home";
import Cards from "./src/components/cards";
import ArticleComponent from "./src/components/articleContent";
import CategoriesComponent from "./src/components/categoriesComponent";
import EachCard from "./src/components/eachCard";
import Header from "./src/components/header";
import reducers from "./src/reducers";

const createStoreWithMiddlewre = applyMiddleware(promiseMiddleware)(
  createStore
);

class App extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    //console.log('@@@@ we are in app.js @@@' , this.props);

    return (
      <Provider store={createStoreWithMiddlewre(reducers)}>
        <Index {...this.props} />
      </Provider>
    );
  }
}

export default App;

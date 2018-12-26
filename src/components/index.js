// requiered react native libraries
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  SafeAreaView,
  Dimensions,
  Image
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";
import { Font } from "expo";

// requierd Components
import Header from "./header";
import EachCard from "./eachCard";
import Cards from "./cards";
import ArticleComponent from "./articleContent";
import Home from "./Home";
import CategoriesComponent from "./categoriesComponent";

// required Redux requiered libraries
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import reducers from "../reducers";
import App from "../../App";

const createStoreWithMiddlewre = applyMiddleware(promiseMiddleware)(
  createStore
);

class Index extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <Home {...this.props} />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 29
      }}
    >
      <Image
        source={require("../../assets/icon.png")}
        style={{ height: 140, width: 140 }}
      />
    </View>
    <ScrollView>
      <DrawerItems style={{ alignItems: "flex-end" }} {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    خانه: { screen: Home },
    "دسته بندی ها": { screen: CategoriesComponent } //({ navigation }) => <CategoriesComponent {...this.props}  />
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: "grey"
      //labelStyle:{fontFamily:'IRANYekanMobile-Regular',}
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: AppDrawerNavigator },
    Home: { screen: Home },
    Article: { screen: ArticleComponent }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);

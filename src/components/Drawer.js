import React from "react";
import { View,  StyleSheet , Alert , TouchableHighlight , WebView , ListView ,Dimensions, ScrollView } from "react-native";  
import Index from './';
import CategoriesComponent from './categoriesComponent'
import { createStackNavigator, createAppContainer , createDrawerNavigator} from "react-navigation";

const Drawer = createDrawerNavigator(
    {
    Home: { screen: Index },
    Contact: { screen: CategoriesComponent},
    }
  );

  export default Drawer;
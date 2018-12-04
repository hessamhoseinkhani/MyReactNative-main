import React from 'react';
import { StyleSheet, Text, View , ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Font } from 'expo';

import Header from './src/components/header';
import EachCard from './src/components/eachCard';
import Cards from './src/components/cards';
import ArticleComponent from './src/components/articleContent'
import Home from './src/components/Home';
//Redux requiered libraries
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './src/reducers';



const createStoreWithMiddlewre = applyMiddleware(promiseMiddleware)(createStore);

 class App extends React.Component {
  static navigationOptions = {
    header : null
  };

  render() {
    return (
        
        <Provider store={createStoreWithMiddlewre(reducers)}>
          <Home {...this.props} />
        </Provider>
      

      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginLeft: 125 ,
    marginRight : 125
  } , 
  appBar : {
    backgroundColor : "black"
  } ,
  textStyle : {
    marginLeft: 16 ,
  } ,
  iconsStyle : {
    color : "grey"
  } ,
  cardStyle : {
    width: 100, 
    height: 100 ,
    alignSelf :'flex-end' ,
    marginRight : 25 ,
    flexDirection: 'row',
  }, 
  rowStyle : {
    flexDirection: 'row'
  } ,
  paragraghStyle : {
    width: 200, 
    height: 70 , 
    marginTop : 10 ,
    marginRight : 25 ,
    fontSize : 20 , 
    fontWeight : 'bold'
  } , 
  titleStyle : {
    fontSize : 15 ,
    fontFamily: "normal" , 
    color : 'grey' ,
  } ,
  nonTitleStyle : {
    fontSize : 15 ,
    fontFamily: "normal" ,
  } ,
  
});

const AppNavigator = createStackNavigator({
  Home: { screen: App } ,
  Article : { screen : ArticleComponent} ,

});

export default createAppContainer(AppNavigator);


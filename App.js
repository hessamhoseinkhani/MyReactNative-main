import React from 'react';
import { StyleSheet, Text, View , ScrollView , Button , Alert} from 'react-native';
import { createStackNavigator, createAppContainer , createDrawerNavigator} from "react-navigation";
import { Font } from 'expo';
import {Drawer} from 'native-base';

import Header from './src/components/header';
import EachCard from './src/components/eachCard';
import Cards from './src/components/cards';
import ArticleComponent from './src/components/articleContent'
import Home from './src/components/Home';
import Index from './src/components';
import CategoriesComponent from './src/components/categoriesComponent'
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
    console.log('@@@@ we are in app.js @@@');
    //console.log(this.props);
    
    return (
        
        <Provider store={createStoreWithMiddlewre(reducers)}>
          <Index  {...this.props} /> 
        </Provider>
              

      

    );
  }
}
// index => Home
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
//just changed createStackNavigator to createDrawerNavigator
// const AppNavigator = createStackNavigator({
//   Home: { screen: App } ,
//   Article : { screen : ArticleComponent} ,
// });

// export default createAppContainer(AppNavigator);

// const AppDrawerNavigator =  createDrawerNavigator({
//   Home : {screen : Index} ,  
//   Categories : CategoriesComponent //{screen :  (props) => <CategoriesComponent {...props} /> } 
// });


// const AppContainer = createAppContainer(AppDrawerNavigator);


// export default AppContainer;

 export default App ;

// const AppDrawerNavigator =  createDrawerNavigator({
//   Home : {screen : App} ,  
//   Categories :({ navigation }) => <CategoriesComponent {...this.props}  store={createStoreWithMiddlewre(reducers)}/> 
// });

// const AppNavigator = createStackNavigator({
//   Drawer : {screen : AppDrawerNavigator},
//   Home: { screen: App } ,
//   Article : { screen : ArticleComponent} ,
// }, 
// {
//   headerMode: 'none',
//   navigationOptions: {
//     headerVisible: false,
//   }
//  }
// );



// export default createAppContainer(AppNavigator);


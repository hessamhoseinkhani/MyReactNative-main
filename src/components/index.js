import React from 'react';
import { StyleSheet, Text, View , ScrollView , Button , Alert , SafeAreaView , Dimensions , Image} from 'react-native';
import { createStackNavigator, createAppContainer , createDrawerNavigator , DrawerItems} from "react-navigation";
import { Font } from 'expo';
//import {Drawer} from 'native-base';

import Header from './header';
import EachCard from './eachCard';
import Cards from './cards';
import ArticleComponent from './articleContent'
import Home from './Home';
import CategoriesComponent from './categoriesComponent';
//Redux requiered libraries
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from '../reducers';
import App from '../../App';
//import {Drawer} from './Drawer';


const createStoreWithMiddlewre = applyMiddleware(promiseMiddleware)(createStore);

 class Index extends React.Component {
  static navigationOptions = {
    header : null
  };



  render() {
    return (
        
        // <Provider store={createStoreWithMiddlewre(reducers)}>
        //   <Home  {...this.props} />
        // </Provider>
      
        <Home  {...this.props} />
      

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
//just changed createStackNavigator to createDrawerNavigator
// const AppNavigator = createStackNavigator({
//   Home: { screen: Home } ,
//   Article : { screen : ArticleComponent} ,
// });

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex : 1}} >
    <View style={{ height : 150 , backgroundColor : 'white' , alignItems : 'center', marginTop : 29}}>
      <Image source={require('../../assets/Logo.png')} style={{ height: 140 , width : 137 }}/>
    </View>
    <ScrollView>
      <DrawerItems style={{alignItems : 'flex-end'}} {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator =  createDrawerNavigator({
  "خانه" : {screen : Home} ,  
  "دسته بندی ها"  : {screen : CategoriesComponent} //({ navigation }) => <CategoriesComponent {...this.props}  /> 
} ,  { 
  contentComponent : CustomDrawerComponent , 
  contentOptions : {
    activeTintColor : 'grey', 
    //labelStyle:{fontFamily:'IRANYekanMobile-Regular',}
  }
}  
);

const AppNavigator = createStackNavigator({
  Drawer : {screen : AppDrawerNavigator},
  Home: { screen: Home } ,
  Article :{ screen : ArticleComponent} ,
}, 
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
);


export default createAppContainer(AppNavigator);


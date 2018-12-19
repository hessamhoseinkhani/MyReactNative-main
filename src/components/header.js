import React, { Component } from 'react';
import {Text , View , StyleSheet , Alert} from 'react-native';

import { Provider as PaperProvider, Divider } from 'react-native-paper';
import { Button ,Card, Title, Paragraph ,Drawer ,Appbar ,DefaultTheme } from 'react-native-paper';


class Header extends Component {
  
    render() { 
      console.log('header props  => ' , this.props);
      ali = ()=> {
        return this.props.data.HeaderTitle ? this.props.data.HeaderTitle : 'خانه' 
      }
        return (
          
            <Appbar.Header style={styles.appBar}>

            <Appbar.Action
              color="white"
              icon="dehaze"
              onPress={() =>  this.props.navigation.openDrawer()}
            />
            <Appbar.Content
              title = {ali()}
              style = {styles.appbarContentStyle}
              titleStyle={styles.textStyle}
            />

            </Appbar.Header>
          );
    }
}

const styles = StyleSheet.create({
  appBar : {
    backgroundColor : "#0090B0"
  } ,
  appbarContentStyle : {
    alignItems : 'flex-end'
  },
  textStyle : {
    fontFamily : 'IRANYekanMobile-Bold' ,
    fontSize : 22 ,
  } ,
  });
  



export default Header;

{/* <Appbar.Content
title="خانه شمت"
style={styles.textStyle}
/> */}
// <Appbar.Action icon="search"  color="grey" />
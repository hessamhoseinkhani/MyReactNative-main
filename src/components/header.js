import React, { Component } from 'react';
import {Text , View , StyleSheet , Alert} from 'react-native';

import { Provider as PaperProvider, Divider } from 'react-native-paper';
import { Button ,Card, Title, Paragraph ,Drawer ,Appbar ,DefaultTheme } from 'react-native-paper';


class Header extends Component {
  
    render() { 
        return (
            <Appbar.Header style={styles.appBar}>

            <Appbar.Content
              title = 'خانه'
              style = {styles.appbarContentStyle}
              titleStyle={styles.textStyle}
            />
            <Appbar.Action
              color="grey"
              icon="dehaze"
              onPress={() => this.props.navigation.navigate('Article')}
            />
            </Appbar.Header>
          );
    }
}

const styles = StyleSheet.create({
  appBar : {
    backgroundColor : "black"
  } ,
  appbarContentStyle : {
    alignItems : 'flex-end'
  },
  textStyle : {
    fontFamily : 'IRANYekanMobile-Bold' ,
    fontSize : 20 ,
  } ,
  });
  



export default Header;

{/* <Appbar.Content
title="خانه شمت"
style={styles.textStyle}
/> */}
// <Appbar.Action icon="search"  color="grey" />
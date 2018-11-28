import React, { Component } from 'react';
import {Text , View , StyleSheet} from 'react-native';

import { Provider as PaperProvider, Divider } from 'react-native-paper';
import { Button ,Card, Title, Paragraph ,Drawer ,Appbar ,DefaultTheme } from 'react-native-paper';


class Header extends Component {
    render() { 
        return (
            <Appbar.Header style={styles.appBar}>
            <Appbar.Action
            icon="dehaze"
            />
            <Appbar.Content
              title="Home"
              style={styles.textStyle}
            />
            <Appbar.Action icon="search"  color="grey" />
            </Appbar.Header>
          );
    }
}

const styles = StyleSheet.create({
  appBar : {
    backgroundColor : "black"
  } ,
  textStyle : {
    marginLeft: 16 ,
  } ,
  });
  



export default Header;
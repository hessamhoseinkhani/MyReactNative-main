import React, { Component } from 'react';
import { StyleSheet, Text, View , Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider as PaperProvider } from 'react-native-paper';
import { Button , Card , Title, Paragraph ,Drawer ,Appbar ,DefaultTheme ,Divider} from 'react-native-paper';
import moment from 'jalali-moment'
import HTML from 'react-native-render-html';
// importing files 
import ArticleContent from './articleContent';
import Home from './Home';
import Cards from './cards';


class EachCard extends Component {
    state = {
        active: 'first',
      };


    render() { // <Card.Cover source={{ uri: this.props.PicSrc }} style={styles.cardStyle} />   //styles.justify   //style={[styles.paragraghStyle , styles.alignLeft]}
        // const { navigate } = this.props.navigation;
        return ( 
          
          <View>

        <Card>
        <Card.Content>
            <View >
              <Text style={ styles.titleStyle }>{this.props.Title}</Text>
            </View>
            
            <View style={styles.rowStyle}>
              <Card.Cover source={{ uri: this.props.PicSrc }} style={styles.cardStyle} />
              <View style={styles.justify}><Text  numberOfLines={3} style={[styles.paragraghStyle , styles.alignLeft]}>{this.props.Content}</Text></View>
              
            </View>
          </Card.Content>
          <View style={styles.alignLeft}>
          <View style={styles.rowStyle}>
            <Title style={[styles.textStyle , styles.nonTitleStyle]}>{niceDate(this.props.Date).toPersianDigits()}</Title>
            <Title style={[styles.nonTitleStyle , styles.textStyle , styles.alignLeft , {marginRight:16}]}>{this.props.Author}  •</Title>
          </View>
          </View>

      
        </Card>
        <Divider />
        </View>
         );
    }
}
// 

String.prototype.toPersianDigits= function(){
  var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  return this.replace(/[0-9]/g, function(w){
      return id[+w]
  });
}

const niceDate = (date) => {
  return  moment(date ,'YYYY-M-D HH:mm:ss').locale('fa').format('D MMMM YYYY');
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
      backgroundColor : "black" ,


    } ,
    textStyle : {
      marginLeft: 8 ,
      
    } ,
    iconsStyle : {
      color : "grey"
    } ,
    cardStyle : {
      width: 100, 
      height: 100 ,
      alignSelf :'flex-start' ,
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
      marginRight : 7 ,
      lineHeight : 20 ,
      fontFamily : 'IRANYekanMobile-Light' ,    
      fontSize : 16 , 

      
    } , 
    titleStyle : {
 
      fontSize : 20 ,
      fontFamily: 'IRANYekanMobile-Bold' , 
      lineHeight : 24 ,

      marginRight:5 , 

    } ,
    nonTitleStyle : {
      fontSize : 14 ,
      fontFamily: 'IRANYekanMobile-Light' ,
    } ,
    alignLeft : {
      alignSelf:'flex-end',
    
    } ,
    justify : {
      flex : 1
     // justifyContent : 'flex-start'
    }
  });



export default EachCard;
//<Text writingDirection='ltr' numberOfLines={3} style={[styles.paragraghStyle , styles.alignLeft]}>





import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button , Card , Title, Paragraph ,Drawer ,Appbar ,DefaultTheme ,Divider} from 'react-native-paper';




const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    }
  };



class EachCard extends Component {
    state = {
        active: 'first',
      };
    render() { 
        return ( 
          
          <View>

        <Card>
          <Card.Content>
            <Title style={styles.titleStyle}>{this.props.Title}</Title>
            <View style={styles.rowStyle}>
              <Paragraph numberOfLines={3} style={styles.paragraghStyle}>{this.props.Content}</Paragraph>
              <Card.Cover source={{ uri: this.props.PicSrc }} style={styles.cardStyle} />
              
            </View>
            
          </Card.Content>
          <Title style={[styles.nonTitleStyle , styles.textStyle]}>{this.props.Author}</Title>
          <View style={styles.rowStyle}>
            <Title style={[styles.textStyle , styles.titleStyle]}>{this.props.Date}</Title>
            <Title style={styles.titleStyle}></Title>
          </View>
      
        </Card>
        <Divider />
        </View>
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
      backgroundColor : "black" ,


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
      paddingTop : 13 ,
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


  
export default EachCard;



/*   
<PaperProvider theme={theme}>   
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
        <Card>
          <Card.Content>
            <Title style={styles.titleStyle}>title</Title>
            <View style={styles.rowStyle}>
              <Paragraph numberOfLines={3} style={styles.paragraghStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragraph>
              <Card.Cover source={{ uri: 'https://picsum.photos/200' }} style={styles.cardStyle} />
              
            </View>
            
          </Card.Content>
          <Title style={[styles.nonTitleStyle , styles.textStyle]}>Samix</Title>
          <View style={styles.rowStyle}>
            <Title style={[styles.textStyle , styles.titleStyle]}>25 Nov</Title>
            <Title style={styles.titleStyle}>  .  5 min read</Title>
          </View>
      
        </Card>
</PaperProvider> 
        
*/
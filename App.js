import React from 'react';
import { StyleSheet, Text, View , ScrollView } from 'react-native';
import { Provider as PaperProvider, Divider } from 'react-native-paper';
import { Button ,Card, Title, Paragraph ,Drawer ,Appbar ,DefaultTheme } from 'react-native-paper';
import Header from './src/components/header';
import EachCard from './src/components/eachCard';
import Cards from './src/components/cards';
//import Cards from './src/components/cards'



export default class App extends React.Component {

  render() {
    return (
      <View>
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
            <ScrollView style={{marginBottom:80}}>
            <Cards />
            
            </ScrollView>
        
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



/*
        <Header />
        <Button mode="contained" compact="press" color="green" style={styles.buttonStyle}>press</Button>
        <Card>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Text>manurios</Text>





                <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          active={this.state.active === 'first'}
          onPress={() => { this.setState({ active: 'first' }); }}
        />
        <Drawer.Item
          label="Second Item"
          active={this.state.active === 'second'}
          onPress={() => { this.setState({ active: 'second' }); }}
        />
     </Drawer.Section>
*/



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
      <Title style={styles.titleStyle}>CARD TITLE</Title>
      <View style={styles.rowStyle}>
        <Paragraph numberOfLines={3} style={styles.paragraghStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
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
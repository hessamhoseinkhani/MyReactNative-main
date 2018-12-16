import React, { Component } from 'react';
import { StyleSheet , View , ScrollView  , Alert , Animated} from 'react-native';
import { Container, Button, Content,List,Header ,Thumbnail,Body,  ListItem, Text , Right , Left , Icon , Separator} from 'native-base';
import {Appbar  } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

import { connect , Provider} from 'react-redux';
import { bindActionCreators } from 'redux';
import { articlesListAll , latestURL , loadFalser } from '../actions';
import reducers from '../reducers';

class CategoriesComponent extends Component {

    state = {
      categories : { "health" : "سلامتی" , "career-study-success" : "موفقیت شغلی و تحصیل" , "personal-development" : "رشد و توسعه فردی" }
    }
    
    // renderCategories() {
    //   this.state.map((item) => (
    //     <ListItem thumbnail 
    //     onPress={() => {this.props.articlesListAll(`http://chetor.com/wp-json/wp/v2/posts?_embed&page=8`); Alert.alert('21')  }   } >
    //       <Body  >
    //         <Text style={{ alignSelf:'flex-end'}} >سلام </Text>
    //       </Body>
    //     </ListItem>
    //   ));
    // };
    static navigationOptions = {
      drawerIcon : ({ tintColor }) => (
        <Icon name="list" style={{ fontSize : 24 , color :  "#0090B0"}}/> 
      )
    }

    render() { 

        return ( 
          <Animated.ScrollView >
            <Container>
              <Appbar.Header style={styles.appBar}>
              <Appbar.BackAction onPress={() => this.props.navigation.goBack() }/>
              <Appbar.Content
                title = 'لیست موضوعات'
                style = {styles.appbarContentStyle}
                titleStyle={styles.headerStyle}
              />
              </Appbar.Header>
            <Content>
              <List>
              <ListItem thumbnail 
                  onPress={() => {this.props.loadFalser(); this.props.articlesListAll(`http://chetor.com/wp-json/wp/v2/posts?_embed&page=1`); this.props.latestURL(`http://chetor.com/wp-json/wp/v2/posts?_embed&page=`); this.props.navigation.goBack()  }   } >
                  <Body  >
                    <Text style={styles.textStyle} >همه پست ها </Text>
                  </Body>
                </ListItem>
              <ListItem itemDivider>
              <Body  >
              <Text style={styles.titleStyle}>سلامتی</Text>
              </Body>
            </ListItem> 
                <ListItem thumbnail 
                  onPress={() => {this.props.loadFalser();  this.props.articlesListAll(`https://www.chetor.com/wp-json/wp/v2/posts?categories=1033&_embed&page=1`); this.props.latestURL(`https://www.chetor.com/wp-json/wp/v2/posts?categories=1033&_embed&page=`); this.props.navigation.goBack()  }   } >
                  <Body  >
                    <Text style={styles.textStyle} >روانشناسی </Text>
                  </Body>
                </ListItem>
                <ListItem thumbnail 
                  onPress={() => {this.props.loadFalser(); this.props.articlesListAll(`https://www.chetor.com/wp-json/wp/v2/posts?categories=1035&_embed&page=1`); this.props.latestURL(`https://www.chetor.com/wp-json/wp/v2/posts?categories=1035&_embed&page=`); this.props.navigation.goBack()  }   } >
                  <Body  >
                    <Text style={styles.textStyle} >تناسب اندام </Text>
                  </Body>
                </ListItem>
                <ListItem thumbnail 
                  onPress={() => {this.props.loadFalser(); this.props.articlesListAll(`https://www.chetor.com/wp-json/wp/v2/posts?categories=1067&_embed&page=1`); this.props.latestURL(`https://www.chetor.com/wp-json/wp/v2/posts?categories=1067&_embed&page=`);  this.props.navigation.goBack()  }   } >
                  <Body  >
                    <Text style={styles.textStyle} >رژیم و تغذیه </Text>
                  </Body>
                </ListItem>
                <ListItem itemDivider>
              <Body  >
              <Text style={styles.titleStyle}>سبک زندگی</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail 
                  onPress={() => {this.props.loadFalser(); this.props.articlesListAll(`https://www.chetor.com/wp-json/wp/v2/posts?categories=2719&_embed&page=1`); this.props.latestURL(`https://www.chetor.com/wp-json/wp/v2/posts?categories=2719&_embed&page=`); this.props.navigation.goBack()  }   } >
                  <Body  >
                    <Text style={styles.textStyle} >معرفی کتاب </Text>
                  </Body>
                </ListItem>
                <ListItem thumbnail 
                  onPress={() => {this.props.loadFalser(); this.props.articlesListAll(`https://www.chetor.com/wp-json/wp/v2/posts?categories=1036&_embed&page=1`); this.props.latestURL(`https://www.chetor.com/wp-json/wp/v2/posts?categories=1036&_embed&page=`); this.props.navigation.goBack()   }   } >
                  <Body  >
                    <Text style={styles.textStyle} >عادات موفقیت </Text>
                  </Body>
                </ListItem>
                <ListItem thumbnail 
                  onPress={() =>  { this.props.loadFalser();  this.props.articlesListAll(`https://www.chetor.com/wp-json/wp/v2/posts?categories=1037&_embed&page=1`);  this.props.latestURL(`https://www.chetor.com/wp-json/wp/v2/posts?categories=1037&_embed&page=`);  this.props.navigation.goBack()} } >
                  <Body  >
                    <Text style={styles.textStyle} >مد و زیبایی </Text>
                  </Body>
                </ListItem>
              </List>
            </Content>
          </Container>
          </Animated.ScrollView >
         );
    }
    //this.props.articlesListAll(`https://www.chetor.com/wp-json/wp/v2/posts?categories=1033&page=1`);
}// {this.props.articlesListAll(`http://chetor.com/wp-json/wp/v2/posts?_embed&page=6`);  } 
 const styles = StyleSheet.create({
  appBar : {
    backgroundColor : "#0090B0"
  } ,
  appbarContentStyle : {
    alignItems : 'flex-end'
  },
  headerStyle : {
    fontFamily : 'IRANYekanMobile-Bold' ,
    fontSize : 20 ,
  } ,
   textStyle : {
    alignSelf:'flex-end' ,
    marginRight : 50 ,
    fontFamily : 'IRANYekanMobile-Regular'
   },
   titleStyle : {
    alignSelf:'flex-end' ,
    fontFamily : 'IRANYekanMobile-Bold'
   }
 });




function mapStateToProps(state){
    return {      
      data : state.articles
    }
  }
  
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({articlesListAll , latestURL , loadFalser} , dispatch)
  }
  
export default withNavigation( connect(mapStateToProps , mapDispatchToProps)(CategoriesComponent) );


// export default CategoriesComponent;
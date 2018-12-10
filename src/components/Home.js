import React from 'react';
import { StyleSheet, Text, View , ScrollView , Alert , Animated} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Font } from 'expo';

//importing files

import Header from './header';
import EachCard from './eachCard';
import Cards from './cards';
import reducers from '../reducers';

import { articlesListMore } from '../actions';
import { loadFontTruth } from '../actions'



const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};



class Home extends React.Component {

  state = {
    fontLoaded: false,
    viewedPage : 2
  };





  async componentDidMount() {
    
    await Font.loadAsync({
      'IRANYekanMobile-Regular': require('../../assets/fonts/IRANYekanMobile-Regular.ttf'),
      'IRANYekanMobile-Bold': require('../../assets/fonts/IRANYekanMobile-Bold.ttf'),
      'IRANYekanMobile-Light': require('../../assets/fonts/IRANYekanMobile-Light.ttf'),
    });
    this.setState({ fontLoaded: true });

  

  }
  

/*

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

//const MyCoolScrollViewComponent = ({enableSomeButton}) => (
  
  <ScrollView
    onScroll={({nativeEvent}) => {
      if (isCloseToBottom(nativeEvent)) {
        Alert.alert("asdad");
      }
    }}
    scrollEventThrottle={400}
  >

*/




  render() {
    console.log("data i am seeking for");
    //console.log(this.data);
    return (
      
      <View> 
        {
          this.state.fontLoaded ? (
            <View>
            <Header {...this.props}/>
            <Animated.ScrollView 
            style={{marginBottom:155}}     
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                this.setState({ viewedPage : this.state.viewedPage+1});
                this.props.articlesListMore(`http://chetor.com/wp-json/wp/v2/posts?_embed&page=${this.state.viewedPage}`);
                //Alert.alert("asdad");
              }
            }}
            scrollEventThrottle={400}>
              <Cards {...this.props}/>
            </Animated.ScrollView>
            </View>
          ) : null
        }
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



function mapStateToProps(state){
  return {      
    data : state.articles
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({articlesListMore} , dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps)(Home);
//export default Home;

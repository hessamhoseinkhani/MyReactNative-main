import React,{Component} from 'react';
import { StyleSheet, Text, View , ScrollView, Dimensions , Alert} from 'react-native';
import HTML from 'react-native-render-html';
 import {Divider} from 'react-native-paper';


class ArticleComponent extends Component {
static navigationOptions ={
    title : 'Article Content'
}
widthFixer(str){
    while(str.search("width") !== -1){
        str = str.slice(0,str.search("width"))+str.slice(str.search("width")+11);
    }
    return (`<div id="main-container" style="direction : rtl">` + str.slice(0 , str.search("<script>"))+`</div>`+str.slice(str.search("<script>")) );
}
addDiv (str){
	return (`<div id="main-container" style="direction : rtl">` + str.slice(0 , str.search("<script>"))+`</div>`+str.slice(str.search("<script>")) );
}
    render() { 
        const { navigate } = this.props.navigation;
        const content =this.widthFixer(this.props.navigation.getParam('content', 'Null'));

        const title = this.props.navigation.getParam('title', 'Null') ;
        return (  
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>{title}</Text>
                    <Divider style={styles.divider} />
                    <HTML html={content} imagesMaxWidth={Dimensions.get('window').weight } baseFontStyle={{ fontSize : 15 , fontFamily : 'IRANYekanMobile-Regular'}}  listsPrefixesRenderers={{ul: (_htmlAttribs, _children, _convertedCSSStyles, passProps) => (<Text></Text>)}}  tagsStyles = {tagsStyles}/>
                </View>
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginRight : 15 , 
        marginTop : 15

    },
    header: {
        fontSize : 25 , 
        fontFamily : 'IRANYekanMobile-Bold'

    } , 
    divider: {
        marginTop : 10 ,
        
    } ,
    imgStyle : {
        width : 50 ,
        height : 50 
    }
  });
const tagsStyles = { h1:{fontFamily:'IRANYekanMobile-Bold'},h2:{fontFamily:'IRANYekanMobile-Bold'},h3:{fontFamily:'IRANYekanMobile-Bold'},h4:{fontFamily:'IRANYekanMobile-Bold'},h5:{fontFamily:'IRANYekanMobile-Bold'}};


export default ArticleComponent;


import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';





class ArticleComponent extends Component {
static navigationOptions ={
    title : 'Article Content'
}
    render() { 
        const { navigate } = this.props.navigation;
        const content = this.props.navigation.getParam('content', 'Null') ;
        return (  
            <View style={styles.container}>
                <Text>Article</Text>
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
  });
  


export default ArticleComponent;
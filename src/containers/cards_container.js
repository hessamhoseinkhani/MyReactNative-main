import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button , Card , Title, Paragraph ,Drawer ,Appbar ,DefaultTheme } from 'react-native-paper';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Importing Components and Files
import EachCard from '../components/eachCard';
import ArticlesList from '../components/articlesList'
import { articlesListAll } from '../actions';






class CardsContainer extends Component {
/*
    state = {
        cards : []
    };
*/
    componentWillMount(){
        this.props.articlesListAll();
    }

    render() { 

        console.log("****** we are in cards container");
        return (
            <View>
                <ArticlesList {...this.props} />
            </View>
        );
    }

    getImgUrl = (str) => {
        if (str !== ''){
            let arr=[];
            arr[0] = str.slice(str.search(/src="/i));
            arr[1] = arr[0].slice(arr[0].search(/"/i)+1);
            arr[0] = arr[1].slice(0 , arr[1].search(/"/i));
            return arr[0];
        }
        else 
            return "https://fakeimg.pl/300/";
    }
}
 

function mapStateToProps(state){
    return {
        data : state.articles
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({articlesListAll} , dispatch)
}
//export default Cards;
export default connect(mapStateToProps , mapDispatchToProps)(CardsContainer);



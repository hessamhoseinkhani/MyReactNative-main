import React, { Component } from 'react';
import { StyleSheet , Text , View , Alert , TouchableHighlight } from 'react-native';
import EachCard from './eachCard';
import { createStackNavigator, createAppContainer } from "react-navigation";
import ArticleContent from './articleContent';





const ArticlesList = (props) => {

    const getImgUrl = (str) => {
        
            let arr=[];
            arr[0] = str.slice(str.search(/src="/i));
            arr[1] = arr[0].slice(arr[0].search(/"/i)+1);
            arr[0] = arr[1].slice(0 , arr[1].search(/"/i));
            if (arr[0] !== ''){
                return arr[0];
            }
            else 
                return "https://fakeimg.pl/300/";
    }
    console.log("this is what u searching");
    console.log(props.navigation);



    const renderArticles = (articles) => (
        articles ?
            articles.map((eachCard,i) =>(
                <TouchableHighlight key={eachCard.id} onPress={() => props.navigation.navigate('Article' , {
                    content : eachCard.content.rendered ,
                    title : eachCard.title.rendered
                })}>
                    <EachCard
                        key={eachCard.id}
                        //Title={eachCard.title.rendered}
                        Content={eachCard.title.rendered}
                        Author={eachCard._embedded.author[0].name}
                        Date={eachCard.date} 
                        PicSrc={getImgUrl(eachCard.content.rendered)}
                        
                        selcted={true}
                    />   
                </TouchableHighlight>

            )):null
    )

    return (
        <View>
            {renderArticles(props.data.articles)}
        </View>
    );
    
};

export default ArticlesList;

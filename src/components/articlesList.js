import React, { Component } from 'react';
import { StyleSheet , Text , View , Alert , TouchableHighlight , ActivityIndicator , TouchableOpacity} from 'react-native';
import EachCard from './eachCard';
import { createStackNavigator, createAppContainer } from "react-navigation";
import ArticleContent from './articleContent';





const ArticlesList = (props) => {

    state = {active : false}

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
    // console.log("this is what u searching :" , props);
    //console.log(props);
    const excerpCleaner = (str) => {
        return str.search("[&hellip;]") ? str.replace("<p>" , "").replace("</p>" , "").replace("[&hellip;]" , "") : str.replace("<p>" , "").replace("</p>" , "");
      }


    const renderArticles = (articles) => (
        props.data.Loaded ?
            articles.map((eachCard,i) =>(
                <TouchableOpacity key={eachCard.id} onPress={() => props.navigation.navigate('Article' , {
                    content : eachCard.content.rendered ,
                    title : eachCard.title.rendered ,
                    allProps : props
                })}>
                    <EachCard
                        key={eachCard.id}
                        Title={eachCard.title.rendered}
                        Content={excerpCleaner(eachCard.excerpt.rendered)} //{eachCard.excerpt.rendered}
                        Author={eachCard._embedded.author[0].name}
                        Date={eachCard.date} 
                        PicSrc={eachCard._embedded["wp:featuredmedia"]["0"].source_url} //{getImgUrl(eachCard.content.rendered)}
                        selcted={true}
                    />   
                </TouchableOpacity>

            )): <View style={styles.spinner }>
                    <ActivityIndicator size="large" color="#0090B0" />
                </View>
    )

    return (
        <View>
            {renderArticles(props.data.articles)}
            {props.data.MoreLoaded ? (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop : 10}}><ActivityIndicator size="small" color="#0090B0" /></View>) : null}
        </View>
    ); 
};

//{!props.data.MoreLoaded ? (<Text>heloo</Text>) : null}
const styles = StyleSheet.create({
    spinner : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 200
    }
 });

export default ArticlesList;




/*
// articleList component before implementing Loaded reducer

const renderArticles = (articles) => (
        articles ?
            articles.map((eachCard,i) =>(
                <TouchableHighlight key={eachCard.id} onPress={() => props.navigation.navigate('Article' , {
                    content : eachCard.content.rendered ,
                    title : eachCard.title.rendered
                })}>
                    <EachCard
                        key={eachCard.id}
                        Title={eachCard.title.rendered}
                        Content={eachCard.title.rendered} //{eachCard.excerpt.rendered}
                        Author={eachCard._embedded.author[0].name}
                        Date={eachCard.date} 
                        PicSrc={eachCard._embedded["wp:featuredmedia"]["0"].source_url} //{getImgUrl(eachCard.content.rendered)}
                        selcted={true}
                    />   
                </TouchableHighlight>

            )): <View style={styles.spinner }>
                    <ActivityIndicator size="large" color="#0090B0" />
                </View>
    )

    return (
        <View>
            {renderArticles(props.data.articles)}
        </View>
    ); 
};
*/
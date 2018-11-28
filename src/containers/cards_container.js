import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button , Card , Title, Paragraph ,Drawer ,Appbar ,DefaultTheme } from 'react-native-paper';
import axios from 'axios';
import { connect } from 'react-redux';
import { articlesListAll } from '../actions';
import { bindActionCreators } from 'redux';
// Importing Components and Files
import EachCard from '../components/eachCard';
import ArticlesList from '../components/articlesList'







class CardsContainer extends Component {
/*
    state = {
        cards : []
    };
*/
    componentWillMount(){
        console.log(this.props);
        this.props.articlesListAll();
        /*
        console.log("object Mounted !!!");
        axios.get('http://chetor.com/wp-json/wp/v2/posts?_embed&page=1')
            .then(Response => this.setState({cards : Response.data})) ;
            componentDidMount = () => {
                fetch('http://chetor.com/wp-json/wp/v2/posts?_embed&page=1', {
                    method: 'GET'
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    this.setState({
                        cards: responseJson
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
                }
                //Alert.alert(this.state.albums.length === 0 ? 'zero':'more');
                */
    }

    render() { 
        //console.log(typeof(this.state.cards[0].Content.rendered));
        console.log(this.props);
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


/*
            {id:1 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"13 Dec"  },
            {id:2 ,cardTitle:"I am the test " ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"25 Nov"  },
            {id:3 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"25 Nov"  },
            {id:4 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"25 Nov"  },
            {id:5 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Denniro" ,datePosted:"25 Nov"  },
            {id:6 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"25 Nov"  },
            {id:7 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Denniro" ,datePosted:"25 Nov"  },
            {id:8 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"25 Nov"  },
*/



/*
                {this.state.articles.map(eachCard => (
                    <EachCard
                    key={eachCard.id}
                    //Title={eachCard.title.rendered}
                    Content={eachCard.title.rendered}
                    Author={eachCard._embedded.author[0].name}
                    Date={eachCard.date} 
                    PicSrc={this.getImgUrl(eachCard.content.rendered)}
                    selcted={true}
                    />
                    ))}
*/